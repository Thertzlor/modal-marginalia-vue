<script lang ="ts" setup>
import type {Comment, Pagination, PaginationArg} from '@/graphql/api';
import {ref} from 'vue';
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';
import {useCommentatorMutation} from '@/graphql/api';
import PaginationWidget from '../navigation/PaginationWidget.vue';

const props = defineProps<{postId:number, commentData:Comment[], page?:number, pagination?:Pagination}>();
const emit = defineEmits<{
  (e:'pg', arg:PaginationArg)
  (e:'fetch', value:true):void
}>();

const propagate = (arg:PaginationArg) => (console.log(arg),emit('pg',arg));

const sitekey = 'bd9d5be4-6fae-4c82-a3af-9c2529b30317'; //"10000000-ffff-ffff-ffff-000000000001"

const expanded = ref(false);
const commented = ref(false);

const body = ref('');
const mail = ref('');
const token = ref('');
const user = ref('');
const invisibleHcaptcha = ref<any | null>(null);
const submission = ref(false);
const activeCaptcha = ref(false);

const {onDone,onError:onCommentError,mutate} = useCommentatorMutation();
onDone(() => {
  emit('fetch', true);
  expanded.value = false;
  commented.value = true;
});
onCommentError(e => alert(`Something went wrong:
  ${e.message ?? 'Unknown error'}
  Try again if you like.`));

const sendComment = () => mutate({email: mail.value, username: user.value, content: body.value, token: token.value,post:props.postId.toString(10)});

function onExpire() {
  console.log('Ex Pire');
}
function onChallengeExpire() {
  console.log('Challex Pire');
}
function onError() {
  console.log('Er or');
}
function formSubmit() {
  submission.value = true;
  activeCaptcha.value = true;
  invisibleHcaptcha.value?.execute();
}

function commentSubmit(challengeToken) {
  activeCaptcha.value = false;
  if (!submission.value) throw new Error('No comment form submitted!');
  submission.value = false;
  token.value = challengeToken;
  sendComment().catch(e => console.log(e));
}
</script>


<template>
  <div class="commentainer">
    <h2>Comments</h2>
    <hr>
    <PaginationWidget
      v-if="pagination" term="p" :page-data="pagination"
      @pg="propagate" />
    <ul v-if="commentData.length">
      <li v-for="{ author: {username}, createdAt, content, documentId} in commentData.filter((f):f is Present<NonNullable<typeof f>> & {author:{}} => !!(f?.author))" :key="documentId">
        <span class="commentitle">{{ username }}</span>
        <span class="commentStats">posted {{ gerDate(createdAt??new Date(0)) }}</span>
        <hr>
        <div class="commentbody">{{ content }}</div>
      </li>
    </ul>
    <p v-else class="no_comment">Nothing here yet.</p>
    <PaginationWidget
      v-if="pagination" term="p" :page-data="pagination"
      @pg="propagate" />
    <input
      id="comment_check" v-model="expanded" :disabled="commented"
      type="checkbox" name="comCheck">
    <label :class="{grayborder:true, hoverglow:!commented, grayed:commented}" for="comment_check" title="You know you want to.">Post a Comment</label>
    <form id="comment_form" class="com_forms" @submit.stop.prevent="formSubmit">
      <textarea
        id="comtext" v-model="body" minlength="20"
        required class="comment_input grayborder" name="comment_text"
        cols="30" rows="10" placeholder="Your comment" />
      <input
        v-model="user" minlength="3" type="text"
        name="comment_name" class="comment_input_2nd grayborder" placeholder="Name"
        required>
      <input
        v-model="mail" minlength="4" type="email"
        name="comment_email" placeholder="Email" class="comment_input_2nd grayborder"
        required>
      <button type="submit" class="comment_input_2nd grayborder hoverglow">Submit Comment</button>
      <VueHcaptcha
        ref="invisibleHcaptcha" :sitekey="sitekey" theme="dark"
        size="invisible" challenge-container="challenger" @pg="propagate"
        @verify="commentSubmit" @expired="onExpire" @challenge-expired="onChallengeExpire"
        @error="onError" />
    </form>
  </div>
  <div id="challenger" :class="{captive: activeCaptcha}" />
</template>