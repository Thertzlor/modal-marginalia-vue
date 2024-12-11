<script setup lang="ts">
defineProps<{codeClass?:string}>();
</script>
<template>
  <pre><code><slot /></code></pre>
</template>