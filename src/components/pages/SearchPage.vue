<script setup lang="ts">
import {useRouter} from 'vue-router';
import {computed, ref} from 'vue';
import {useGlobals} from '@/stores/globals';
import {usePostSearchQuery} from '@/graphql/api';
import type {PostFiltersInput, PaginationArg, UploadFile, Post} from '@/graphql/api';
import PaginationWidget from '../navigation/PaginationWidget.vue';
import TaxoList from '../containers/TaxoList.vue';
const {perPage, unRay, antiNull, hist, searchSurround} = useGlobals();

const router = useRouter();
const route = router.currentRoute.value;
const origRoute = route.fullPath;

function proc<T>(t:T) {return unRay(antiNull(t));}

const boolRoute = (key:string, def:boolean) => {
  const val = proc(route.query[key]);
  return val ? val === '1' : def;
};

const numRoute = (key:string, def:number) => {
  const val = parseInt(proc(route.query[key]) || '', 10);
  return isNaN(val) ? def : val;
};

const sortOptions = [
  {userVal: 'published', graphVal: 'publishedAt', urlVal: 'pub'},
  {userVal: 'name', graphVal: 'title', urlVal: 'name'},
  {userVal: 'category', graphVal: 'category.name', urlVal: 'cat'},
  {userVal: 'id', graphVal: 'id', urlVal: 'id'}
];

const href = ref(route.fullPath);
const andMode = ref(boolRoute('andMode', false));
const incTeaser = ref(boolRoute('ts', true));
const incTitle = ref(boolRoute('ti', true));
const incNotes = ref(boolRoute('fn', false));
const pageTarget = ref(numRoute('page', 1));
const perPageVal = ref(numRoute('pp', perPage));
const query = ref(proc(route.query.q) || '');
const [qSort, qSortDir] = (proc(route.query.sort) || 'pub_desc').split('_');
const searchQuery = ref(query.value);
const sortAsc = ref(qSortDir === 'asc');
const sortVal = ref((sortOptions.find(s => s.urlVal === qSort) || {graphVal: 'published'}).graphVal);
const sortArg = computed(() => `${sortVal.value}:${sortAsc.value ? 'asc' : 'desc'}`);
const pg= ref({page: pageTarget.value, pageSize: perPageVal.value} as PaginationArg);

const splitter = (t:string) => {
  const exactEx = /(?:"|')([^"']+)(?:"|')/gim;
  let exMatch = exactEx.exec(t);
  const searchStrings:string[] = [];
  while (exMatch) {
    searchStrings.push(exMatch[1].trim());
    exMatch = exactEx.exec(t);
  }
  return searchStrings.concat(t.replace(exactEx, '').split(/\s+/g).map(s => s.trim()).filter(f => f));
};

const staticSplit = computed(() => splitter(searchQuery.value));
const splitQuery = computed(() => splitter(searchQuery.value));

const genQuery = (t:string) => {
  const filter:PostFiltersInput= {or: [{body_searchable: {contains: t}}]};
  const pushy = (f:keyof Post) => filter.or?.push({[f]: {contains: t}});
  if (incTitle.value) pushy('title');
  if (incTeaser.value) pushy('teaser');
  if (incNotes.value) {
    pushy('toenotes');
    pushy('footnotes');
  }
  return filter;
};

const postFilter = computed(() => (splitQuery.value.length === 1 ? genQuery(splitQuery.value[0]) : {[andMode.value ? 'and' : 'or']: splitQuery.value.map(f => genQuery(f))}));

const {result, onError, refetch, fetchMore} = usePostSearchQuery({pg: pg.value, postFilter: postFilter.value, sort: [sortArg.value]});
onError(() => void (router.push('/ServerError').then(() => hist(origRoute))));

const fmore = (pgArg:PaginationArg) => fetchMore({variables: {pg: pgArg}});

function searchSubmit() {
  searchQuery.value = query.value;
  refetch({pg: pg.value, postFilter: postFilter.value, sort: [sortArg.value]})?.catch(e => console.log(e));
  pg.value.page = 1;
  const params = ([[incTeaser, 'ts'], [incTitle, 'ti'], [incNotes, 'fn'], [andMode, 'andMode']] as const).filter(([x]) => x.value).map(([, n]) => `${n}=1`);
  if (perPageVal.value !== perPage) params.push(`pp=${perPageVal.value}`);
  href.value = `/search?q=${encodeURIComponent(query.value)}${params.length ? `&${params.join('&')}` : ''}`;
  hist(href.value);
}

function locatePreview(text:string, queryValue:string[]) {
  const lookAround = searchSurround;
  const searchtext = text.toLowerCase();
  const process = (txt:string, matchStart:number, matchLength:number, overflowStart:boolean, overflowEnd:boolean) => `${overflowStart ? '[...]' : ''}${(matchLength ?
    `${txt.slice(0, matchStart)}<mark>${txt.slice(matchStart, matchStart + matchLength)}</mark>${txt.slice(matchStart + matchLength, txt.length)
    }`.trim() : txt.trim()
  ).replace(/(\S+$)/, /\S/.test(text[matchStart + matchLength + 1] || '') ? '' : '$1').replace(/^(\S+)/, /\S/.test(text[matchStart - 1] || '') ? '' : '$1').trim()}${overflowEnd ? '[...]' : ''}`.replace(/\n/g, '<br/>');

  for (let i = 0; i < queryValue.length; i++) {
    const st = queryValue[i].toLowerCase();
    const index = searchtext.indexOf(st);
    const textStart = Math.max(0, index - lookAround * 0.6);
    const textEnd = Math.min(text.length, index + st.length + lookAround * 1.6);
    if (index !== -1) return process(text.slice(textStart, textEnd), index - textStart, st.length, textStart !== 0, text.length > index + st.length + lookAround);
  }
  return (text || '').slice(0, Math.min(lookAround * 2, (text || '').length)).trim();
}

</script>

<template>
  <div v-if="result?.posts_connection" class="article_container">
    <form id="searchform-main" enctype="text/plain" @submit.stop.prevent="searchSubmit">
      <input
        v-model="query" type="search" placeholder="..."
        name="searchTerm">
      <button class="hoverglow" type="submit">Search</button>
      <fieldset>
        <label title="Match post title"><input
          id="incTitle" v-model="incTitle" type="checkbox"
          name="incTitle">Match Title</label>
        <label title="Match the post's teaser text"><input
          id="incTeaser" v-model="incTeaser" type="checkbox"
          name="incTeaser">Match Teaser</label>
      </fieldset>
      <fieldset>
        <label title="Include footnotes and foenotes in your search"><input
          id="incNotes" v-model="incNotes" type="checkbox"
          name="incNotes">Match Notes</label>
        <label title="Posts have to match all terms not just some of them"><input
          id="andMode" v-model="andMode" type="checkbox"
          name="andMode">Strict</label>
      </fieldset>
      <fieldset title="Choose field for sorting">
        <label class="select">Sort<select id="sortSelect" v-model="sortVal" name="sortSelect">
          <option v-for="{graphVal, userVal} in sortOptions" :key="graphVal" :value="graphVal">{{ userVal }}</option>
        </select></label>
        <label title="Reverse sort order"><input
          id="sortAsc" v-model="sortAsc" type="checkbox"
          name="sortAsc">Ascending</label>
      </fieldset>
    </form>
    <PaginationWidget
      v-if="result?.posts_connection" :page-data="result.posts_connection.pageInfo" :base-url="href"
      @pg="a => {pg = a; searchSubmit()}" />
    <TransitionGroup name="v-page">
      <article v-for="{documentId, human_id ,header: img, slug, title, publishedAt, body_searchable, tags_connection: tagData, category: catData} in result.posts_connection.nodes?.filter((f): f is typeof f & {tags:{}, category:{}, header:UploadFile} => !!(f?.documentId && f.category)) ?? []" :key="documentId" class="search_result">
        <RouterLink v-if="img" :to="`/post/${human_id}-${slug}`">
          <img
            :srcset="getSrcSet(getImageData(img))" :src="img.url" :width="img.width ?? ''"
            sizes="30vw" :height="img.height??''" alt="whatever"
            class="invisible" @load="imgload">
        </RouterLink>
        <div class="search_group">
          <h2>
            <RouterLink :to="`/post/${human_id}-${slug}`">{{ title }}</RouterLink>
            <span class="datespan">{{ gerDate(publishedAt) }}</span>
          </h2>
          <p class="grayborder" v-html="locatePreview(body_searchable || '', staticSplit)" />
          <p class="tag_container">Tags:<TaxoList :list="taxoSort([...(tagData?.nodes ?? [])])" :tax-type="'tag'" /></p>
          <p class="tag_container">Category:<TaxoList :list="[catData].filter(f => f)" :tax-type="'category'" /></p>
        </div>
      </article>
    </TransitionGroup>
    <PaginationWidget
      v-if="result?.posts_connection" :page-data="result.posts_connection.pageInfo" :base-url="href"
      @pg="fmore" />
    <article v-if="!result?.posts_connection.nodes.length" class="noresult">No content found for your search.</article>
  </div>
</template>