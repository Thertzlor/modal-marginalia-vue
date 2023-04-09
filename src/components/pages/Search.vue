<script setup lang="ts">
import {useRouter} from "vue-router";
import {computed, ComputedRef, Ref, ref} from 'vue';
import {useQuery} from "@vue/apollo-composable";
import {perPage, unRay, antiNull, hist, searchSurround} from '@/services/GlobalDataService';
import gql from "graphql-tag";
import Pagination from "../navigation/Pagination.vue";
import TaxoList from "../containers/TaxoList.vue";

const router = useRouter();
const route = router.currentRoute.value
const origRoute = route.fullPath

function proc<T>(t: T) {return unRay(antiNull(t))}

const boolRoute = (key: string, def: boolean) => {
  const val = proc(route.query[key])
  return val ? val === '1' : def
}

const numRoute = (key: string, def: number) => {
  const val = parseInt(proc(route.query[key]) || '', 10)
  return isNaN(val) ? def : val
}

const sortOptions = [
  {userVal: 'published', graphVal: "publishedAt", urlVal: 'pub'},
  {userVal: 'name', graphVal: 'title', urlVal: 'name'},
  {userVal: 'category', graphVal: "category.name", urlVal: 'cat'},
  {userVal: 'id', graphVal: 'id', urlVal: 'id'}
]

const href = ref(route.fullPath)
const andMode = ref(boolRoute('andMode', false));
const incTeaser = ref(boolRoute('ts', true));
const incTitle = ref(boolRoute('ti', true));
const incNotes = ref(boolRoute('fn', false));
const pageTarget = ref(numRoute('page', 1))
const perPageVal = ref(numRoute('pp', perPage))
const query = ref(proc(route.query.q) || '')
const [qSort, qSortDir] = (proc(route.query.sort) || 'pub_desc').split('_')
const searchQuery = ref(query.value)
const sortAsc = ref(qSortDir === 'asc')
const sortVal = ref((sortOptions.find(s => s.urlVal === qSort) || {graphVal: 'published'}).graphVal)
const sortArg = computed(() => `${sortVal.value}:${sortAsc.value ? 'asc' : 'desc'}`)
const pg: Ref<PaginationArg> = ref({page: pageTarget.value, pageSize: perPageVal.value, });

const splitter = (t: string) => {
  const exactEx = /(?:"|')([^"']+)(?:"|')/gim;
  let exMatch = exactEx.exec(t);
  const searchStrings: string[] = [];
  while (exMatch) {
    searchStrings.push(exMatch[1].trim());
    exMatch = exactEx.exec(t);
  }
  return searchStrings.concat(t.replace(exactEx, "").split(/\s+/g).map(s => s.trim()).filter(f => f));
};

const staticSplit = computed(() => splitter(searchQuery.value))
const splitQuery = computed(() => splitter(searchQuery.value));

const genQuery = (t: string) => {
  const filter: QueryFilter<Post> = {or: [{body_searchable: {contains: t}}], };
  const pushy = (f: keyof Post) => filter.or && filter.or.push({[f]: {contains: t}});
  if (incTitle.value) pushy("title");
  if (incTeaser.value) pushy("teaser");
  if (incNotes.value) {
    pushy("toenotes");
    pushy("footnotes");
  }
  return filter;
};

const postFilter: ComputedRef<QueryFilter<Post>> = computed(() => splitQuery.value.length === 1 ? genQuery(splitQuery.value[0]) : {[andMode.value ? "and" : "or"]: splitQuery.value.map(f => genQuery(f)), });

const postQuery = gql`query postSearch ($postFilter:PostFiltersInput!,$pg:PaginationArg!,$sort:[String]){ posts(filters:$postFilter, pagination:$pg, sort:$sort ){ meta { pagination { total page pageSize pageCount } } data { id attributes { publishedAt body_searchable title teaser slug header { data { attributes { formats } } } tags { data { attributes { name slug color } } } category { data { attributes { name slug color } } } } } } }`;

const {result, onError, refetch, fetchMore} = useQuery<{posts: EntityCollection<Post>}>(postQuery, {pg: pg.value, postFilter: postFilter.value, sort: [sortArg.value]});
onError(() => (router.push('/ServerError').then(()=>hist(origRoute))))

const fmore = (pg: PaginationArg) => fetchMore({variables: {pg}})

function searchSubmit() {
  searchQuery.value = query.value;
  refetch({pg: pg.value, postFilter: postFilter.value, sort: [sortArg.value]})
  pg.value.page = 1
  const params = ([[incTeaser, "ts"], [incTitle, "ti"], [incNotes, "fn"], [andMode, "andMode"]] as const).filter(([x]) => x.value).map(([, n]) => `${n}=1`);
  if (perPageVal.value !== perPage) params.push(`pp=${perPageVal.value}`)
  href.value = `/search?q=${encodeURIComponent(query.value)}${params.length ? `&${params.join('&')}` : ''}`;
  hist(href.value)
}

function locatePreview(text: string, query: string[]) {
  const lookAround = searchSurround;
  const searchtext = text.toLowerCase();
  const process = (txt: string, matchStart: number, matchLength: number, overflowStart: boolean, overflowEnd: boolean) =>
    `${overflowStart ? "[...]" : ""}${(matchLength
      ? `${txt.slice(0, matchStart)}<mark>${txt.slice(matchStart, matchStart + matchLength)}</mark>${txt.slice(matchStart + matchLength, txt.length)
      }`.trim() : txt.trim()
    ).replace(/(\S+$)/, /\S/.test(text[matchStart + matchLength + 1] || '') ? "" : "$1").replace(/^(\S+)/, /\S/.test(text[matchStart - 1] || '') ? "" : "$1").trim()}${overflowEnd ? "[...]" : ""}`.replace(/\n/g, "<br/>");

  for (let i = 0; i < query.length; i++) {
    const st = query[i].toLowerCase();
    const index = searchtext.indexOf(st);
    const textStart = Math.max(0, index - lookAround * 0.6);
    const textEnd = Math.min(text.length, index + st.length + lookAround * 1.6);
    if (index !== -1) return process(text.slice(textStart, textEnd), index - textStart, st.length, textStart !== 0, text.length > index + st.length + lookAround);
  }
  return (text || "").slice(0, Math.min(lookAround * 2, (text || "").length)).trim();
}

</script>

<template>
  <div v-if="result?.posts" class="article_container">
    <form id="searchform-main" @submit.stop.prevent="searchSubmit" enctype="text/plain">
      <input type="search" v-model="query" placeholder="..." name="searchTerm" />
      <button class="hoverglow" type="submit">Search</button>
      <fieldset>
        <label title="Match post title"><input type="checkbox" v-model="incTitle" name="incTitle" id="incTitle" />Match Title</label>
        <label title="Match the post's teaser text"><input type="checkbox" v-model="incTeaser" name="incTeaser" id="incTeaser" />Match Teaser</label>
      </fieldset>
      <fieldset>
        <label title="Include footnotes and foenotes in your search"><input type="checkbox" v-model="incNotes" name="incNotes" id="incNotes" />Match Notes</label>
        <label title="Posts have to match all terms not just some of them"><input type="checkbox" v-model="andMode" name="andMode" id="andMode" />Strict</label>
      </fieldset>
      <fieldset title="Choose field for sorting"><label class="select">Sort<select name="sortSelect" v-model="sortVal" id="sortSelect">
            <option v-for="{graphVal, userVal} in sortOptions" :key="graphVal" :value="graphVal">{{ userVal}}</option>
          </select></label>
        <label title="Reverse sort order"><input type="checkbox" v-model="sortAsc" name="sortAsc" id="sortAsc" />Ascending</label>
      </fieldset>
    </form>
    <Pagination v-if="result?.posts" :page_data="result.posts.meta.pagination" :base_url="href" @pg="a => {pg = a; searchSubmit()}" />
    <TransitionGroup name="v-page">
      <article v-for="{id, attributes: {header: {data: img}, slug, title, publishedAt, body_searchable, tags: {data: tagData}, category: {data: catData}}} in result.posts.data" :key="id" class="search_result">
        <RouterLink :to="`/post/${id}-${slug}`" v-if="img">
          <img :srcset="getSrcSet(getImageData(img.attributes))" :src="img.attributes.url" :width="img.attributes.width" sizes="30vw" :height="img.attributes.height" alt="whatever" @load="imgload" class="invisible" />
        </RouterLink>

        <div class="search_group">
          <h2>
            <RouterLink :to="`/post/${id}-${slug}`">{{ title}}</RouterLink>
            <span class="datespan">{{ gerDate(publishedAt)}}</span>
          </h2>
          <p class="grayborder" v-html="locatePreview(body_searchable || '', staticSplit)"></p>
          <p class="tag_container">Tags:
            <TaxoList :list="taxoSort([...tagData])" :taxType="'tag'" />
          </p>
          <p class="tag_container">Category:
            <TaxoList :list="[catData].filter(f => f)" :taxType="'category'" />
          </p>
        </div>
      </article>
    </TransitionGroup>
    <Pagination v-if="result?.posts" :page_data="result.posts.meta.pagination" :base_url="href" @pg="fmore" />
    <article class="noresult" v-if="!result?.posts.data.length">No content found for your search.</article>
  </div>
</template>