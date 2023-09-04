<script lang="ts" setup>
import {useRouter} from 'vue-router';
import {useSinglePostQuery, usePostCheckLazyQuery, type PaginationArg} from '@/graphql/api';
import ImageContainer from '../containers/ImageContainer.vue';
import TaxoList from '../containers/TaxoList.vue';
import CommentSection from '../containers/CommentSection.vue';
import {useGlobals} from '@/stores/globals';
import DynaPost from '../containers/DynaPost.vue';
const {processContent, defaultNote, refreshRate, hist, unRay, perComment} = useGlobals();

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
  hashy && window.setTimeout(() => document.getElementById(hashy.slice(1))?.scrollIntoView(), noDelay ? 0 : 1000);
};

let updated:number|undefined;
let inVal:number|undefined;

const {result, onResult, refetch, onError} = useSinglePostQuery({postId:postId.toString(10),commentPagination});

const {onResult:upRes,refetch:upFetch,load} = usePostCheckLazyQuery({postId:postId.toString(10)},{enabled:true});
upRes(r => {if (new Date(r.data?.post?.data?.attributes?.updatedAt ?? updated).getTime() !== updated) refetch()?.catch(e => console.log(e));});

onError(e => void router.push((e.message.includes('publishedAt') && !(e.networkError||e.clientErrors.length || e.protocolErrors.length))?'/NotFound':'/ServerError').then(() => hist(origRoute)));
onResult(r => void (r.networkStatus !== 4 &&!r.loading && (!r.data?.post?.data ? router.push('/NotFound').then(() => hist(origRoute)) : (() => {
  document.title = `${r.data.post?.data?.attributes?.title} - Modal Marginalia`;
  updated = new Date(r.data.post?.data?.attributes?.updatedAt).getTime();
  processContent(result.value?.post?.data?.attributes?.toc,navd);
  if (!refreshRate) return;
  if (!inVal) {
    hashNav();
    inVal = 1;
    setTimeout(() => {
      load();
      inVal = setInterval(() => {upFetch()?.catch(e => console.log(e));},refreshRate);
    },refreshRate);
  }
})())));
// onUpdated(() => (processContent(result.value?.post?.data?.attributes?.toc), hashNav()));
const contentFetcher = () => refetch();

const rePage = (arg:PaginationArg) => (console.log(arg),refetch({commentPagination:arg}));

</script>

<template>
  <div class="article_container">
    <article v-if="result?.post?.data?.attributes" id="main_article" class="text">
      <h1 class="article_header fadeborder">{{ result.post.data.attributes.title }}</h1>
      <div class="tag_container"><TaxoList :list="taxoSort([...result.post.data.attributes.tags?.data ?? []])" :tax-type="'tag'" /></div>
      <ImageContainer
        v-if="result.post.data.attributes.header?.data?.attributes" :img-data="result.post.data.attributes.header.data.attributes" :class-name="'banner'"
        custom-size="60vw" />
      <main>
        <span class="datespan">Posted {{ gerDate(result.post.data.attributes.publishedAt) }}</span>
        <span class="post_text"><DynaPost :content="result.post.data.attributes.body_vue ?? ''" /></span>
      </main>
      <div
        v-if="result.post.data.attributes.footnotes
          && result.post.data.attributes.footnotes.replace(/\s*/g, '') !== defaultNote" id="footnote_container" class="footnotes">
        <DynaPost :content="result.post.data.attributes.footnotes" />
      </div>
      <div v-if="result.post.data.attributes.toenotes && result.post.data.attributes.toenotes.replace(/\s*/g, '') !== defaultNote" id="toenote_container" class="footnotes toenotes">
        <DynaPost :content="result.post.data.attributes.toenotes" />
      </div>
    </article>
    <CommentSection
      v-if="result?.post?.data?.attributes?.comments_enabled" :pagination="result.comments?.meta.pagination" :page="1"
      :post-id="postId" :comment-data="result.comments?.data ?? []" @pg="rePage"
      @fetch="contentFetcher" />
  </div>
</template>