<script setup lang="ts">
defineProps<{error_code: number | string}>()
</script>

<template>
  <div class="error_container article_container">
    <h1 :style='({"--title": `"${error_code}"`})' class="block title">{{ error_code}}</h1>
    <div class="error_block">
      <p v-if="error_code == '404'">Not Found.<br>Whatever you were looking for isn't here.</p>
      <p v-else-if="error_code == '501'">Server Error!<br>Something must have gone wrong on my end, I am probably
        trying to fix it right now.<br>...Check back later.</p>
      <p v-else-if="error_code == '502'">This site is currently undergoing maintenance.</p>
      <p v-else>Errors are happening. Mistakes were made.</p>
    </div>
  </div>
</template>