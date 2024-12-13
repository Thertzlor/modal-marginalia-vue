<script lang="ts"  setup>
import {useRouter} from 'vue-router';
import PaginationWidget from '../navigation/PaginationWidget.vue';
import TaxoList from '../containers/TaxoList.vue';
import {useGlobals} from '@/stores/globals';
import {computed, ref, onMounted, onBeforeUnmount} from 'vue';
import {usePostListQuery, usePostCountLazyQuery} from '@/graphql/api';
import type {CategoryFiltersInput, PaginationArg,PostFiltersInput,TagFiltersInput, UploadFile} from '@/graphql/api';

const {perPage, unRay, antiNull, refreshRate, newTime, hist,isEmpty} = useGlobals();
const invisible = ref(true);
const transi = ref('none');
onMounted(() => setTimeout(() => {invisible.value = false; transi.value = 'v-page';} , 260));
onBeforeUnmount(() => {transi.value='none'; invisible.value = true;});
const router = useRouter();
const route = router.currentRoute.value;
const origRoute = route.fullPath;
const targetPage = unRay(route.query.page);
const page = targetPage ? parseInt(targetPage, 10) : 1;
const paginationFilter:PaginationArg = {page, pageSize: perPage};
const [tagQuery, catQuery] = [route.query.tag, route.query.category].map(antiNull);
const singleCat = catQuery && !Array.isArray(catQuery);
const exclusiveCat = singleCat && !tagQuery;
const exclusiveTag = !catQuery && tagQuery && !Array.isArray(tagQuery);

const transActive = ref(false);
const allFilter = {};
const noneFilter= {documentId: {eq: `${-1}`}};

const slugFilter = (query:string | null | string[]) => (Array.isArray(query) ? {slug: {in: query.map(s => s.trim())}} : query ? {slug: {eq: query}} : allFilter);
const catSelection = slugFilter(catQuery);
const tagSelection = slugFilter(tagQuery);

const tagFilter:TagFiltersInput = tagQuery ? (tagSelection) : noneFilter;
const catFilter:CategoryFiltersInput = catQuery ? catSelection : noneFilter;

const postSelection:PostFiltersInput = {};
if (catSelection && !isEmpty(catSelection)) postSelection.category = catSelection;
if (tagSelection && !isEmpty(tagSelection)) postSelection.tags = tagSelection;


const {result, onError, fetchMore, onResult,refetch} = usePostListQuery(() => ({pg: paginationFilter,pf: postSelection,tf: tagFilter,cf: catFilter}));

onError(() => void router.push('/ServerError').then(() => hist(origRoute)));
const fetcher = (pg:PaginationArg) => {fetchMore({variables: {pg}})?.catch(e => console.log(e));};

let postCount:number|undefined;
let inVal:number|undefined;

const {onResult:upRes,refetch:upFetch,load} = usePostCountLazyQuery({pg: paginationFilter,pf: postSelection},{fetchPolicy: 'no-cache', nextFetchPolicy: 'no-cache'});
upRes(r => {if ((r.data?.posts_connection?.pageInfo.total ?? postCount) !== postCount) refetch()?.catch(e => console.log(e));});
const sitename = computed(() => ((exclusiveCat && result.value?.categories_connection?.nodes[0]?.name) ?
  result.value?.categories_connection.nodes[0].name :
  result.value?.tags_connection?.nodes.length === 1 ? `Tag "${result.value?.tags_connection?.nodes[0]?.name ?? ''}"` : 'Post List'));
onResult(r => {
  document.title = `${sitename.value} - Modal Marginalia`;
  if (!r.data?.posts_connection?.pageInfo.total || !refreshRate) return;
  postCount = r.data.posts_connection.pageInfo.total;
  if (!inVal) {
    inVal = 1;
    setTimeout(() => {
      void load();
      inVal = setInterval(() => {upFetch()?.catch(e => console.log(e));},refreshRate);
    },refreshRate);
  }

});
</script>

<template>
  <div v-if="result?.posts_connection" class="article_container">
    <h1 v-if="result?.categories_connection?.nodes?.length" class="generic_header fadeborder">{{ `${exclusiveCat ? "" : "Categories: "}${result?.categories_connection.nodes.map((c) => c.name ?? '').filter(f=>f).join(", ")}` }}</h1>
    <h1 v-if="result?.tags_connection?.nodes?.length" class="generic_header fadeborder">Posts tagged <em>{{ result?.tags_connection.nodes.map((t) => t.name).filter(f=>f).join(", ") }}</em></h1>
    <p v-if="(exclusiveCat && result?.categories_connection) || ((exclusiveTag && result?.tags_connection?.nodes[0]?.description) ?? '')" class="breakdown fadeborder" v-html="exclusiveCat?result.categories_connection?.nodes[0]?.description:result.tags_connection?.nodes[0]?.description ?? ''" />
    <h1 v-if="(!result?.tags_connection?.nodes?.length) && (!result?.categories_connection?.nodes?.length)" class="generic_header fadeborder">Posts</h1>
    <PaginationWidget v-if="result?.posts_connection" :page-data="result.posts_connection.pageInfo" @pg="fetcher" />
    <main class="list_body" :class="{transitioning: transActive}">
      <TransitionGroup v-if="result?.posts_connection.nodes.length" :name="transi">
        <article v-for="{documentId, human_id, header: img, slug, title, pub_date, teaser, tags_connection: tagData, category: catData} in result.posts_connection.nodes.filter((f): f is typeof f & {tags:{}, category:{}, header:UploadFile} => !!(f && f.tags_connection?.nodes && f.header && f.category))" :key="documentId" :class="{listing:true,invisible}">
          <div :class="{top_part:true,empty:!img,is_new:(new Date().getTime()-newTime) < (new Date(pub_date).getTime())}">
            <a v-if="img?.formats.medium.url" :href="`/post/${human_id}-${slug}`">
              <img
                :srcset="getSrcSet(getImageData(img))" :src="img.url" :width="img.width ?? ''"
                sizes="(max-width : 1100px) 90vw, 33vw" :height="img.height ?? ''" alt="whatever"
                class="invisible" @load="imgload">
            </a>
            <RouterLink :to="`/post/${human_id}-${slug}`"><h2>{{ title }}</h2></RouterLink>
            <div class="tagdiv shadowclone">
              <p class="tag_container">Category:<TaxoList :list="[catData].filter(f => f)" :tax-type="'category'" /></p>
              <p class="tag_container">Tags:<TaxoList :list="taxoSort([...tagData?.nodes])" :tax-type="'tag'" /></p>
            </div>
            <div class="tagdiv">
              <p class="tag_container">Category:<TaxoList :list="[catData].filter(f => f)" :tax-type="'category'" /></p>
              <p class="tag_container">Tags:<TaxoList :list="taxoSort([...tagData?.nodes])" :tax-type="'tag'" /></p>
            </div>
          </div>
          <div class="bottom_part"><p class="date_part">{{ gerDate(pub_date) }}</p><p>{{ teaser }}</p></div>
        </article>
      </TransitionGroup>
      <PaginationWidget v-if="result?.posts_connection?.nodes?.length" :page-data="result.posts_connection.pageInfo" @pg="fetcher" />
      <article v-else class="noresult">
        <h2>Nothing found.</h2>
        <p>Unfortunately, no content could be found. Try another page or go to the <RouterLink to="/">Homepage</RouterLink></p>
      </article>
    </main>
  </div>
</template>