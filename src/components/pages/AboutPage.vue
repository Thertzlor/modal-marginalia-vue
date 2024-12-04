<script setup lang="ts">
import {useRouter} from 'vue-router';
import {useGlobals} from '@/stores/globals';
import {onUpdated} from 'vue';
import {useAboutQuery} from '@/graphql/api';
import DynaPost from '../containers/DynaPost.vue';
const {processContent,hist} = useGlobals();
const router = useRouter();
const origRoute = router.currentRoute.value.fullPath;

const {result, onError} = useAboutQuery();//useQuery<{aboutPage: Relation<AboutPage>}>(postQuery);
onError(() => void router.push('/ServerError').then(() => hist(origRoute)));
onUpdated(() => processContent(false));
</script>

<template>
  <div class="article_container">
    <article v-if="result && result.aboutPage" id="main_article" class="text">
      <h1 class="article_header fadeborder">{{ result.aboutPage?.title ?? '' }}</h1>
      <main>
        <span class="post_text">
          <DynaPost :content="result.aboutPage?.text ?? ''" />
        </span>
      </main>
      <div v-if="result.aboutPage.footnotes" id="footnote_container" class="footnotes">
        <DynaPost :content="result.aboutPage.footnotes" />
      </div>
      <div v-if="result.aboutPage.toenotes" id="toenote_container" class="footnotes toenotes">
        <DynaPost :content="result.aboutPage.toenotes" />
      </div>
    </article>
  </div>
</template>