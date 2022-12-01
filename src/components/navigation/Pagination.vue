<script lang="ts" setup>
import PageEntry from "../containers/PageEntry.vue";

const surrounding = 2;
const maxVisible = surrounding * 2 + 1;

const props = defineProps<{page_data: MetaData['pagination'], base_url?: string, res?: PaginationArg}>();
const emit = defineEmits<{(e: 'pg', arg: any)}>()

function rePage(target: number | string, base = props.base_url) {
  const page = typeof target === 'number' ? target : parseInt(target, 10)
  if (isNaN(page) || page > props.page_data.pageCount) return;
  const nextArg: PaginationArg = {pageSize: props.page_data.pageSize, page}
  emit('pg', nextArg)
  const curLok = base || window.location.href
  window.history.pushState({}, '', /page=\d+/.test(curLok) ? curLok.replace(/page=\d+/gi, `page=${page}`) : `${curLok}${curLok.includes('?') ? '&' : '?'}page=${page}`)
}

function pageEntries(pageCount: number, current: number) {
  const max = maxVisible;
  const sur = surrounding;
  const needFirst = Math.abs(current - 0) > sur + 1;
  const needLast = Math.abs(current - pageCount) > sur;
  const links = [] as {text: string | number; target: string | number; disabled?: boolean;}[];
  needFirst && links.push(...[{text: 1, target: 1}, {disabled: true, text: "...", target: ""},]
    .filter(({text}) => text === 1 || current - sur !== 2));
  for (let i = 0; i < max; i++) {
    const target = current - sur + i;
    if (target < 1 || target > pageCount) continue;
    links.push({target, text: target});
  }
  needLast && links.push(...[{disabled: true, text: "...", target: ""}, {text: pageCount, target: pageCount},]
    .filter(({text}) => text === pageCount || current - sur + max !== pageCount));
  return links;
}

</script>

<template>
  <ul v-if="page_data.pageCount !== 1 && page_data.page <= page_data.pageCount" class="pagination">
    <PageEntry page_text="<" :page_target="page_data.page - 1" :page_disabled="page_data.page - 1 === 0"
      @page="rePage" />
    <PageEntry v-for="({text, target, disabled}, idx) in pageEntries(page_data.pageCount, page_data.page)" :key="idx"
      :page_text="text" :page_target="target" :page_current="target === page_data.page" :page_disabled="disabled"
      @page="rePage" />
    <PageEntry page_text=">" :page_target="page_data.page + 1" :page_disabled="page_data.page + 1 > page_data.pageCount"
      @page="rePage" />
  </ul>
</template>