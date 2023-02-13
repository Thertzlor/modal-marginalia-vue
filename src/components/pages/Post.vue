<script lang="ts" setup>
import {useRouter} from "vue-router";
import gql from "graphql-tag";
import {useQuery, provideApolloClient} from "@vue/apollo-composable";
import { apolloClient } from '../../main';
import ImageContainer from "../containers/ImageContainer.vue";
import TaxoList from "../containers/TaxoList.vue";
import CommentSection from "../containers/CommentSection.vue";
import {onUpdated} from 'vue';
import {processContent, defaultNote, refreshRate} from '@/services/GlobalDataService';
import DynaPost from '../containers/DynaPost.vue';
const router = useRouter();

provideApolloClient(apolloClient)

const selector = router.currentRoute.value.params.select;
if (!selector || typeof selector !== "string") router.push('/NotFound');
const postId = parseInt((selector as any).split("-")[0]);
if (isNaN(postId)) router.push('/NotFound');

let navd = false;

const hashNav = (noDelay = false) => {
  if (navd) return;
  navd = true;
  const hashy = router.currentRoute.value.hash
  hashy && window.setTimeout(() => document.getElementById(hashy.slice(1))?.scrollIntoView(), noDelay ? 0 : 1000)
}

const postQuery = gql`query SinglePost( $postId: ID) { commentManagerComments( filters: { related_to: { slag: { id: { eq: $postId } } } } ) { data { attributes { content createdAt author { data { attributes { username } } } } } } post(id: $postId) { data { id attributes { title header { data { attributes { url caption width height alternativeText formats } } } body slug toc publishedAt updatedAt comments_enabled footnotes toenotes category { data { attributes { color name slug } } } tags { data { attributes { color name slug } } } images { data { attributes { url width height caption formats } } } } } } } `;

let updated: number|undefined
let inVal:number|undefined

const {result, onResult, refetch, onError} = useQuery<{post: Relation<Post>, commentManagerComments: RelationCollection<PluginComment>}>(postQuery, {postId});
onError(() => router.push('/ServerError'))
onResult(r => r.networkStatus !== 4 && ((!r.data?.post.data) ? (router.push('/NotFound')) : onResult(rs => {
  document.title = `${r.data.post.data.attributes.title} - Modal Marginalia`
  updated = new Date(rs.data.post.data.attributes.updatedAt).getTime();
  if(!inVal) {
    inVal = 1;
    setTimeout(()=>{
      const changeQuery = gql`query postCheck($postId: ID) { post(id: $postId) { data { id attributes { updatedAt } }}}`
      const {onResult:upRes,refetch:upFetch} = useQuery<{post: Relation<Post>}>(changeQuery,{postId},{enabled:true})
      upRes(r=> {if(new Date(r.data?.post.data?.attributes.updatedAt ?? updated).getTime() !== updated) refetch();})
      inVal = setInterval(()=>{upFetch()},refreshRate)
    },refreshRate)
  }
}))
)
onUpdated(() => (processContent(result.value?.post.data?.attributes.toc), hashNav()))
const contentFetcher = () => refetch()
</script>

<template>
  <div class="article_container">
    <article v-if="result?.post?.data" id="main_article" class="text">
      <h1 class="article_header fadeborder">
        {{ result.post.data.attributes.title}}
      </h1>
      <div class="tag_container">
        <TaxoList :list="taxoSort([...result.post.data.attributes.tags.data])" :taxType="'tag'" />
      </div>
      <ImageContainer v-if="result.post.data.attributes.header?.data" :imgData="result.post.data.attributes.header.data.attributes" :className="'banner'" custom-size="60vw" />
      <main>
        <span class="datespan">Posted {{ gerDate(result.post.data.attributes.publishedAt)}}</span>
        <span class="post_text">
          <DynaPost :content="result.post.data.attributes.body" :imgs="result.post.data.attributes.images.data" />
        </span>
      </main>

      <div v-if="result.post.data.attributes.footnotes
      && result.post.data.attributes.footnotes.replace(/\s*/g, '') !== defaultNote" id="footnote_container" class="footnotes">
        <DynaPost :content="result.post.data.attributes.footnotes" :imgs="[]" />
      </div>
      <div v-if="result.post.data.attributes.toenotes && result.post.data.attributes.toenotes.replace(/\s*/g, '') !== defaultNote" id="toenote_container" class="footnotes toenotes">
        <DynaPost :content="result.post.data.attributes.toenotes" :imgs="[]" />
      </div>
    </article>
    <CommentSection @fetch="contentFetcher" v-if="result?.post?.data?.attributes.comments_enabled" :post_id="postId" :comment_data="result.commentManagerComments.data" />
  </div>
</template>