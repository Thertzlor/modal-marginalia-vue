<script setup lang="ts">
import {useRouter} from 'vue-router';
import {useGlobals} from '@/stores/globals';
import {useAboutQuery} from '@/graphql/api';
import DynaPost from '../containers/DynaPost.vue';
import DynaNote from '../containers/DynaNote.vue';
import {ref} from 'vue';
const {hist,mockGraphQL} = useGlobals();
const router = useRouter();
const origRoute = router.currentRoute.value.fullPath;

const {result, onError} = mockGraphQL(d => d) ?? useAboutQuery();//useQuery<{aboutPage: Relation<AboutPage>}>(postQuery);
onError(() => void router.push('/ServerError').then(() => hist(origRoute)));
const hoverIndex = ref(0);
const toeHoverIndex = ref(0);
</script>
<template>
  <div class="article_container">
    <article v-if="result && result.aboutPage" id="main_article" class="text">
      <h1 class="article_header fadeborder">{{ result.aboutPage?.title ?? '' }}</h1>
      <main>
        <span class="post_text">
          <DynaPost :content="result.aboutPage?.body_vue ?? ''" @active-hover="n => hoverIndex = n" />
        </span>
      </main>
      <DynaNote :hovering="hoverIndex" :content="result.aboutPage.footnotes_vue" @active-hover="n => toeHoverIndex = n" />
      <DynaNote :hovering="toeHoverIndex" :content="result.aboutPage.toenotes_vue" :toenotes="true" />
    </article>
  </div>
</template>