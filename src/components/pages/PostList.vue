<script lang="ts"  setup>
import {useRouter} from "vue-router";
import gql from "graphql-tag";
import {useQuery,provideApolloClient} from "@vue/apollo-composable";
import Pagination from "../navigation/Pagination.vue";
import TaxoList from "../containers/TaxoList.vue";
import {perPage, unRay, antiNull, refreshRate} from '@/services/GlobalDataService';
import { apolloClient } from '../../main';
import {computed, ref, onMounted, onBeforeUnmount} from 'vue';
const invisible = ref(true)
const transi = ref('none')
provideApolloClient(apolloClient)
onMounted(()=>setTimeout(()=> {invisible.value = false;transi.value = 'v-page';} , 260) )
onBeforeUnmount(()=>{transi.value='none';invisible.value = true;})
const router = useRouter();
const route = router.currentRoute.value;
let targetPage = unRay(route.query.page);
const page = targetPage ? parseInt(targetPage, 10) : 1;
const paginationFilter: PaginationArg = {page, pageSize: perPage}
const [tagQuery, catQuery] = [route.query.tag, route.query.category].map(antiNull);
const singleCat = catQuery && !Array.isArray(catQuery);
const exclusiveCat = singleCat && !tagQuery;
const exclusiveTag = !catQuery && tagQuery && !Array.isArray(tagQuery)

const transActive = ref(false)
const allFilter = {}
const noneFilter= {id: {eq: -1}}

const slugFilter = (query: string | null | string[]): FilterObject<{slug: string}> => Array.isArray(query) ? {slug: {in: query.map(s => s.trim())}} : query ? {slug: {eq: query}} : allFilter;
const catSelection = catQuery && slugFilter(catQuery);
const tagSelection = tagQuery && slugFilter(tagQuery);

const tagFilter = tagQuery ? tagSelection : noneFilter
const catFilter = catQuery ? catSelection : noneFilter

const postSelection: FilterObject<Post> = {}
if (catSelection) postSelection.category = catSelection
if (tagSelection) postSelection.tags = tagSelection

const postQuery = gql`query PostList( $pf: PostFiltersInput $tf: TagFiltersInput! $cf: CategoryFiltersInput $pg:PaginationArg! ) { posts(filters: $pf, pagination: $pg sort: "publishedAt:desc") { meta { pagination { total page pageSize pageCount } } data { id attributes { publishedAt title teaser slug header { data { attributes { formats } } } tags { data { attributes { name slug color } } } category { data { attributes { name slug color } } } } } } tags(filters: $tf) { data { attributes { name slug color description } } } categories(filters: $cf) { data { attributes { name slug color description } } } }`;

const {result, onError, fetchMore, onResult,refetch} = useQuery<{posts: EntityCollection<Post>, categories: EntityCollection<Category>, tags: EntityCollection<Tag>}>(postQuery, () => (
  {
    pg: paginationFilter,
    pf: postSelection,
    tf: tagFilter,
    cf: catFilter
  }
));
onError(() => router.push('/ServerError'))
const fetcher = (pg: PaginationArg) => {fetchMore({variables: {pg}})}

let postCount:number|undefined;
let inVal:number|undefined

onResult(r => {
  document.title = `${sitename.value} - Modal Marginalia`
  if(!r.data?.posts?.meta.pagination.total || !refreshRate) return
  postCount = r.data.posts.meta.pagination.total
  if(!inVal) {
    inVal = 1;
    setTimeout(()=>{
      const countQuery = gql`query PostCount( $pf: PostFiltersInput $pg: PaginationArg! ) { posts(filters: $pf, pagination: $pg) { meta { pagination { total pageSize } } } }`
      const {onResult:upRes,refetch:upFetch} = useQuery<MetaKey<'posts'>>(countQuery,{pg: paginationFilter,pf: postSelection},{fetchPolicy: 'no-cache', nextFetchPolicy: 'no-cache'})
      upRes(r=> {if((r.data?.posts.meta?.pagination.total ?? postCount) !== postCount) refetch();})
      inVal = setInterval(()=>{upFetch()},refreshRate)
    },refreshRate)
  }

})

const sitename = computed(() =>
  (exclusiveCat && result.value?.categories.data[0]?.attributes.name) ?
    result.value?.categories.data[0].attributes.name :
    result.value?.tags.data.length === 1 ? `Tag "${result.value?.tags.data[0].attributes.name}"` : 'Post List'
)
</script>

<template>
  <div v-if="result?.posts" class="article_container">
    <h1 v-if="result?.categories?.data?.length" class="generic_header fadeborder">
      {{ `${exclusiveCat ? "" : "Categories: "}${result?.categories.data.map((c) => c.attributes.name).join(", ")}`}}
    </h1>
    <h1 v-if="result?.tags?.data?.length" class="generic_header fadeborder">
      Posts tagged <em>{{ result?.tags.data.map((t) => t.attributes.name).join(", ")}}</em>
    </h1>
    <p v-if="exclusiveCat && result?.categories?.data" v-html="result.categories.data[0]?.attributes.description" class="breakdown fadeborder"></p>
    <p v-else-if="exclusiveTag && result?.tags?.data[0]?.attributes.description" v-html="result.tags.data[0]?.attributes.description" class="breakdown fadeborder"></p>
    <h1 v-if="(!result?.tags?.data?.length) && (!result?.categories?.data?.length)" class="generic_header fadeborder">Posts</h1>
    <Pagination v-if="result?.posts" :page_data="result.posts.meta.pagination" @pg="fetcher" />
    <main class="list_body" :class="{transitioning: transActive}">
      <TransitionGroup :name="transi" v-if="result?.posts.data.length">
        <article :class="{listing:true,invisible}" v-for="{id, attributes: {header: {data: img}, slug, title, publishedAt, teaser, tags: {data: tagData}, category: {data: catData}}} in result.posts.data" :key="id">
          <div :class="`top_part ${img ? '' : ' empty'}`">
            <a v-if="img?.attributes.formats.medium.url" :href="`/post/${id}-${slug}`">
              <img :srcset="getSrcSet(getImageData(img.attributes))" :src="img.attributes.url" @load="imgload" :width="img.attributes.width" sizes="(max-width : 1100px) 90vw, 33vw" :height="img.attributes.height" alt="whatever" class="invisible" />
            </a>
            <RouterLink :to="`/post/${id}-${slug}`">
              <h2>{{ title}}</h2>
            </RouterLink>
            <div class="tagdiv shadowclone">
              <p class="tag_container">
                Category:
                <TaxoList :list="[catData].filter(f => f)" :taxType="'category'" />
              </p>
              <p class="tag_container">
                Tags:
                <TaxoList :list="taxoSort([...tagData])" :taxType="'tag'" />
              </p>
            </div>
            <div class="tagdiv">
              <p class="tag_container">
                Category:
                <TaxoList :list="[catData].filter(f => f)" :taxType="'category'" />
              </p>
              <p class="tag_container">
                Tags:
                <TaxoList :list="taxoSort([...tagData])" :taxType="'tag'" />
              </p>
            </div>
          </div>
          <div class="bottom_part">
            <p class="date_part">{{ gerDate(publishedAt)}}</p>
            <p>{{ teaser}}</p>
          </div>
        </article>
      </TransitionGroup>
      <Pagination v-if="result?.posts?.data?.length" :page_data="result.posts.meta.pagination" @pg="fetcher" />
      <article v-else class="noresult">
        <h2>Not found</h2>
        <p>
          Unfortunately, no content could be found. Try another page, or go to
          the <RouterLink to="/">Homepage</RouterLink>
        </p>
      </article>
    </main>
  </div>
</template>