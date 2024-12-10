<script lang="ts" setup>
import {useRouter} from 'vue-router';// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {useSinglePostQuery, usePostCheckLazyQuery, type PaginationArg,Comment} from '@/graphql/api';
import ImageContainer from '../containers/ImageContainer.vue';
import TaxoList from '../containers/TaxoList.vue';
import CommentSection from '../containers/CommentSection.vue';
import {useGlobals} from '@/stores/globals';
import DynaPost from '../containers/DynaPost.vue';
import {useHead} from '@unhead/vue';
import {ref} from 'vue';
const {processContent, defaultNote, postRefreshRate, hist, unRay, perComment,scrollOption,iMap} = useGlobals();
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
const heady = useHead({});

const {result, onResult, refetch, onError} = useSinglePostQuery({postId:postId,commentPagination});

const {onResult:upRes,refetch:upFetch,load} = usePostCheckLazyQuery({postId:result.value?.posts_connection?.nodes[0]?.documentId ?? ''},{enabled:true});
upRes(r => {if (new Date(r.data?.post?.updatedAt ?? updated).getTime() !== updated) refetch()?.catch(e => console.log(e));});
const post = ref<Exclude<Exclude<(typeof result)['value'],undefined>['posts_connection'],null|undefined>['nodes'][number]|undefined>();
onError(e => void router.push((e.message.includes('publishedAt') && !(e.networkError||e.clientErrors.length || e.protocolErrors.length))?'/NotFound':'/ServerError').then(() => hist(origRoute)));
onResult(r => void (r.networkStatus !== 4 &&!r.loading && (!r.data?.posts_connection?.nodes.length ? router.push('/NotFound').then(() => hist(origRoute)) : (() => {
  const p = r.data.posts_connection.nodes[0];
  p.images_connection?.nodes?.forEach(n => !iMap.has(n.url) && iMap.set(n.url, n));
  p.header && !iMap.has(p.header.url) && iMap.set(p.header.url, p.header);
  post.value = p;
  const titlus = `${post.value.title} - Modal Marginalia`;
  heady?.patch({
    title:titlus,
    meta:[{name:'description',content:post.value.teaser},{name:'og:url',content:`https://www.modal-marginalia.com/post/${post.value.human_id}-${post.value.slug}`},{name:'og:description',content:post.value.teaser},{name:'og:title',content:titlus},{name:'og:image',content:post.value.header?.url}]
  });
  updated = new Date(post.value.updatedAt).getTime();
  if (!inVal) {
    hashNav();
    inVal = 1;
    if (!postRefreshRate) return;
    setTimeout(() => {
      void load();
      inVal = setInterval(() => {upFetch()?.catch(e => console.log(e));},postRefreshRate);
    },postRefreshRate);
  }
})())));
// onUpdated(() => (processContent(result.value?.post?.data?.attributes?.toc), hashNav()));
const contentFetcher = () => refetch();

const rePage = (arg:PaginationArg) => (console.log(arg),refetch({commentPagination:arg,postId}));

</script>

<template>
  <div class="article_container">
    <article v-if="post" id="main_article" class="text">
      <h1 class="article_header fadeborder">{{ post.title }}</h1>
      <div class="tag_container">
        <TaxoList :list="taxoSort([...post.tags_connection?.nodes ?? []])" :tax-type="'tag'" />
      </div>
      <ImageContainer
        v-if="post.header" :image="post.header.url" :class-name="'banner'"
        custom-size="60vw" />
      <input id="tocButton" type="checkbox">
      <label id="tocLabel" for="tocButton" title="table of contents">⩸</label>
      <main>
        <span class="datespan">Posted {{ gerDate(post.publishedAt) }}</span>
        <DynaPost
          :toc="post.toc" :main="true" :content="post.body_vue ?? ''"
          @vue:mounted="processContent(true)"
          @vue:updated="processContent(false)" />
      </main>
      <div
        v-if="post.footnotes
          && post.footnotes.replace(/\s*/g, '') !== defaultNote" id="footnote_container" class="footnotes">
        <DynaPost :content="post.footnotes" />
      </div>
      <div v-if="post.toenotes && post.toenotes.replace(/\s*/g, '') !== defaultNote" id="toenote_container" class="footnotes toenotes">
        <DynaPost :content="post.toenotes" />
      </div>
    </article>
    <CommentSection
      v-if="post?.comments_enabled" :pagination="result?.comments_connection?.pageInfo" :page="1"
      :post-id="post.documentId" :comment-data="result?.comments_connection?.nodes ?? []" @pg="rePage"
      @fetch="contentFetcher" />
  </div>
</template>