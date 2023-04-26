<script setup lang="ts">
defineProps<{errorCode:number | string}>();
</script>

<template>
  <div class="error_container article_container">
    <h1 :style='({"--title": `"${errorCode}"`})' class="block title">{{ errorCode }}</h1>
    <div class="error_block">
      <p v-if="errorCode == '404'">Not Found.<br>Whatever you were looking for isn't here.</p>
      <p v-else-if="errorCode == '501'">Server Error!<br>Something must have gone wrong on my end, I am probably trying to fix it right now.<br>...Check back later.</p>
      <p v-else-if="errorCode == '502'">This site is currently undergoing maintenance.</p>
      <p v-else>Errors are happening. Mistakes were made.</p>
    </div>
  </div>
</template>