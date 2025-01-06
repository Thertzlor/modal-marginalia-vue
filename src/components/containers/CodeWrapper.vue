<script setup lang="ts">
defineProps<{codeClass?:string}>();
</script>
<template>
  <pre><code class="code_block"><slot /></code></pre>
</template>