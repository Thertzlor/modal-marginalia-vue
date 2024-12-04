<script lang="ts" setup>
import {useRouter} from 'vue-router';
import {useSinglePostQuery, usePostCheckLazyQuery, type PaginationArg, Comment} from '@/graphql/api';
import ImageContainer from '../containers/ImageContainer.vue';
import TaxoList from '../containers/TaxoList.vue';
import CommentSection from '../containers/CommentSection.vue';
import {useGlobals} from '@/stores/globals';
import DynaPost from '../containers/DynaPost.vue';
const {processContent, defaultNote, refreshRate, hist, unRay, perComment,scrollOption} = useGlobals();

const router = useRouter();
const origRoute = router.currentRoute.value.fullPath;
const selector = router.currentRoute.value.params.select;
if (!selector || typeof selector !== 'string') router.push('/NotFound').then(() => hist(origRoute)).catch(e => console.log(e));
const postId = parseInt((selector as any).split('-')[0],10);
if (isNaN(postId)) router.push('/NotFound').then(() => hist(origRoute)).catch(e => console.log(e));

const targetPage = unRay(router.currentRoute.value.query.p);
const page = targetPage ? parseInt(targetPage, 10) : 1;
const commentPagination:PaginationArg = {
  page,
  pageSize:perComment
};


let navd = false;
const hashNav = (noDelay = false) => {
  if (navd) return;
  navd = true;
  const hashy = router.currentRoute.value.hash;
  hashy && window.setTimeout(() => document.getElementById(hashy.slice(1))?.scrollIntoView(scrollOption), noDelay ? 0 : 1000);
};

let updated:number|undefined;
let inVal:number|undefined;

const {result, onResult, refetch, onError} = useSinglePostQuery({postId:postId.toString(10),commentPagination});

const {onResult:upRes,refetch:upFetch,load} = usePostCheckLazyQuery({postId:postId.toString(10)},{enabled:true});
upRes(r => {if (new Date(r.data?.post?.updatedAt ?? updated).getTime() !== updated) refetch()?.catch(e => console.log(e));});

onError(e => void router.push((e.message.includes('publishedAt') && !(e.networkError||e.clientErrors.length || e.protocolErrors.length))?'/NotFound':'/ServerError').then(() => hist(origRoute)));
onResult(r => void (r.networkStatus !== 4 &&!r.loading && (!r.data?.post ? router.push('/NotFound').then(() => hist(origRoute)) : (() => {
  document.title = `${r.data.post?.title} - Modal Marginalia`;
  updated = new Date(r.data.post?.updatedAt).getTime();
  processContent(result.value?.post?.toc,navd);
  if (!refreshRate) return;
  if (!inVal) {
    hashNav();
    inVal = 1;
    setTimeout(() => {
      void load();
      inVal = setInterval(() => {upFetch()?.catch(e => console.log(e));},refreshRate);
    },refreshRate);
  }
})())));
// onUpdated(() => (processContent(result.value?.post?.data?.attributes?.toc), hashNav()));
const contentFetcher = () => refetch();

const rePage = (arg:PaginationArg) => (console.log(arg),refetch({commentPagination:arg,postId:''}));

</script>

<template>
  <div class="article_container">
    <article v-if="result?.post" id="main_article" class="text">
      <h1 class="article_header fadeborder">{{ result.post.title }}</h1>
      <div class="tag_container">
        <TaxoList :list="taxoSort([...result.post.tags_connection?.nodes ?? []])" :tax-type="'tag'" />
      </div>
      <ImageContainer
        v-if="result.post.header" :img-data="result.post.header" :class-name="'banner'"
        custom-size="60vw" />
      <input id="tocButton" type="checkbox">
      <label id="tocLabel" for="tocButton" title="table of contents">⩸</label>
      <main>
        <span class="datespan">Posted {{ gerDate(result.post.publishedAt) }}</span>
        <span class="post_text">
          <DynaPost :content="result.post.body_vue ?? ''" />
        </span>
      </main>
      <div
        v-if="result.post.footnotes
          && result.post.footnotes.replace(/\s*/g, '') !== defaultNote" id="footnote_container" class="footnotes">
        <DynaPost :content="result.post.footnotes" />
      </div>
      <div v-if="result.post.toenotes && result.post.toenotes.replace(/\s*/g, '') !== defaultNote" id="toenote_container" class="footnotes toenotes">
        <DynaPost :content="result.post.toenotes" />
      </div>
    </article>
    <CommentSection
      v-if="result?.post?.comments_enabled" :pagination="result.comments_connection?.pageInfo" :page="1"
      :post-id="postId" :comment-data="result.comments_connection?.nodes as any as Comment[] ?? []" @pg="rePage"
      @fetch="contentFetcher" />
  </div>
</template>