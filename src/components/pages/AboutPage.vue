<script setup lang="ts">
import gql from "graphql-tag";
import {useQuery} from "@vue/apollo-composable";
import {useRouter} from 'vue-router';
import { useGlobals } from '@/stores/globals';
import {onUpdated} from 'vue';
import DynaPost from '../containers/DynaPost.vue';
const {processContent,hist} = useGlobals()
const router = useRouter()
const origRoute = router.currentRoute.value.fullPath
const postQuery = gql`query about {aboutPage { data { attributes { text title footnotes toenotes         images { data { attributes { url width height caption formats } } }} } } } `;
const {result, onError} = useQuery<{aboutPage: Relation<AboutPage>}>(postQuery);
onError(() => router.push('/ServerError').then(()=>hist(origRoute)))
onUpdated(() => processContent(false))
</script>

<template>
  <div class="article_container">
    <article v-if="result && result.aboutPage.data" id="main_article" class="text">
      <h1 class="article_header fadeborder">{{ result.aboutPage.data.attributes.title}}</h1>
      <main>
        <span class="post_text">
          <DynaPost :content="result.aboutPage.data.attributes.text" :imgs="result.aboutPage.data.attributes.images.data" />
        </span>
      </main>
      <div v-if="result.aboutPage.data.attributes.footnotes" id="footnote_container" class="footnotes">
        <DynaPost :content="result.aboutPage.data.attributes.footnotes" :imgs="[]" />
      </div>
      <div v-if="result.aboutPage.data.attributes.toenotes" id="toenote_container" class="footnotes toenotes">
        <DynaPost :content="result.aboutPage.data.attributes.toenotes" :imgs="[]" />
      </div>
    </article>
  </div>
</template>