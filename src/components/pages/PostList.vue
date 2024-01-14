<script lang="ts"  setup>
import {useRouter} from 'vue-router';
import PaginationWidget from '../navigation/PaginationWidget.vue';
import TaxoList from '../containers/TaxoList.vue';
import {useGlobals} from '@/stores/globals';
import {computed, ref, onMounted, onBeforeUnmount} from 'vue';
import {usePostListQuery, usePostCountLazyQuery} from '@/graphql/api';
import type {CategoryFiltersInput, PaginationArg,PostFiltersInput,TagFiltersInput, UploadFileEntity} from '@/graphql/api';
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
const noneFilter= {id: {eq: `${-1}`}};

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
upRes(r => {if ((r.data?.posts?.meta?.pagination.total ?? postCount) !== postCount) refetch()?.catch(e => console.log(e));});
const sitename = computed(() => ((exclusiveCat && result.value?.categories?.data[0]?.attributes?.name) ?
  result.value?.categories.data[0].attributes.name :
  result.value?.tags?.data.length === 1 ? `Tag "${result.value?.tags.data[0].attributes?.name ?? ''}"` : 'Post List'));
onResult(r => {
  document.title = `${sitename.value} - Modal Marginalia`;
  if (!r.data?.posts?.meta.pagination.total || !refreshRate) return;
  postCount = r.data.posts.meta.pagination.total;
  if (!inVal) {
    inVal = 1;
    setTimeout(() => {
      load();
      inVal = setInterval(() => {upFetch()?.catch(e => console.log(e));},refreshRate);
    },refreshRate);
  }

});
</script>

<template>
  <div v-if="result?.posts" class="article_container">
    <h1 v-if="result?.categories?.data?.length" class="generic_header fadeborder">{{ `${exclusiveCat ? "" : "Categories: "}${result?.categories.data.map((c) => c.attributes?.name ?? '').filter(f=>f).join(", ")}` }}</h1>
    <h1 v-if="result?.tags?.data?.length" class="generic_header fadeborder">Posts tagged <em>{{ result?.tags.data.map((t) => t.attributes?.name).filter(f=>f).join(", ") }}</em></h1>
    <p v-if="(exclusiveCat && result?.categories?.data) || ((exclusiveTag && result?.tags?.data[0]?.attributes?.description) ?? '')" class="breakdown fadeborder" v-html="exclusiveCat?result.categories?.data[0]?.attributes?.description:result.tags?.data[0]?.attributes?.description ?? ''" />
    <h1 v-if="(!result?.tags?.data?.length) && (!result?.categories?.data?.length)" class="generic_header fadeborder">Posts</h1>
    <PaginationWidget v-if="result?.posts" :page-data="result.posts.meta.pagination" @pg="fetcher" />
    <main class="list_body" :class="{transitioning: transActive}">
      <TransitionGroup v-if="result?.posts.data.length" :name="transi">
        <article v-for="{id, attributes: {header: {data: img}, slug, title, publishedAt, teaser, tags: {data: tagData}, category: {data: catData}}} in result.posts.data.filter((f): f is Present<typeof f,'attributes'|'id'> & {attributes:{tags:{}, category:{}, header:{data?:UploadFileEntity}}} => !!(f?.attributes && f.attributes.tags?.data && f.attributes.header && f.attributes.category?.data))" :key="id" :class="{listing:true,invisible}">
          <div :class="{top_part:true,empty:!img,is_new:(new Date().getTime()-newTime) < (new Date(publishedAt).getTime())}">
            <a v-if="img?.attributes?.formats.medium.url" :href="`/post/${id}-${slug}`">
              <img
                :srcset="getSrcSet(getImageData(img.attributes))" :src="img.attributes.url" :width="img.attributes.width ?? ''"
                sizes="(max-width : 1100px) 90vw, 33vw" :height="img.attributes.height ?? ''" alt="whatever"
                class="invisible" @load="imgload">
            </a>
            <RouterLink :to="`/post/${id}-${slug}`"><h2>{{ title }}</h2></RouterLink>
            <div class="tagdiv shadowclone">
              <p class="tag_container">Category:<TaxoList :list="[catData].filter(f => f)" :tax-type="'category'" /></p>
              <p class="tag_container">Tags:<TaxoList :list="taxoSort([...tagData])" :tax-type="'tag'" /></p>
            </div>
            <div class="tagdiv">
              <p class="tag_container">Category:<TaxoList :list="[catData].filter(f => f)" :tax-type="'category'" /></p>
              <p class="tag_container">Tags:<TaxoList :list="taxoSort([...tagData])" :tax-type="'tag'" /></p>
            </div>
          </div>
          <div class="bottom_part"><p class="date_part">{{ gerDate(publishedAt) }}</p><p>{{ teaser }}</p></div>
        </article>
      </TransitionGroup>
      <PaginationWidget v-if="result?.posts?.data?.length" :page-data="result.posts.meta.pagination" @pg="fetcher" />
      <article v-else class="noresult">
        <h2>Nothing found.</h2>
        <p>Unfortunately, no content could be found. Try another page or go to the <RouterLink to="/">Homepage</RouterLink></p>
      </article>
    </main>
  </div>
</template>