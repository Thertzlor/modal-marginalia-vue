<script lang ="ts" setup>
import {ref,onBeforeUnmount} from 'vue';
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';
import {useCommentatorMutation, useCommentEditorMutation} from '@/graphql/api';
import PaginationWidget from '../navigation/PaginationWidget.vue';
import type {Pagination, PaginationArg,SinglePostQuery} from '@/graphql/api';

const props = defineProps<{postId:string, commentData:NonNullable<SinglePostQuery['comments_connection']>['nodes'], page?:number, pagination?:Pagination}>();
const emit = defineEmits<{
  (e:'pg', arg:PaginationArg)
  (e:'fetch', value:true):void
}>();

const propagate = (arg:PaginationArg) => (console.log(arg),emit('pg',arg));
const sitekey = 'bd9d5be4-6fae-4c82-a3af-9c2529b30317'; //"10000000-ffff-ffff-ffff-000000000001"

const expanded = ref(false);
const commented = ref(false);
const commentStore = ref<Record<string,{edit_token:string,user:string,email:string}|undefined>>(JSON.parse(localStorage.getItem('mm_commentStore') ?? '{}'));
onBeforeUnmount(() => localStorage.setItem('mm_commentStore', JSON.stringify(commentStore.value)));
const editing = ref({} as Record<string,boolean|undefined>);
const body = ref('');
const mail = ref('');
const token = ref('');
const user = ref('');
const invisibleHcaptcha = ref<any | null>(null);
const submission = ref(false);
const activeCaptcha = ref(false);

const cleanStore = (cm:(typeof props.commentData)[number]):true => {
  if (!cm) return true;
  if (Math.abs(new Date(cm.createdAt).getTime() - Date.now()) > (30*60*1000)) commentStore.value[cm.documentId]=undefined;
  return true;
};

const {onDone:onEditDone,mutate:editComment} = useCommentEditorMutation();

onEditDone(c => {
  const edited = c.data?.updateComment?.documentId;
  if (!edited) return;
  emit('fetch',true);
});

const {onDone,onError:onCommentError,mutate} = useCommentatorMutation();
onDone(x => {
  console.log(x.errors);
  emit('fetch', true);
  expanded.value = false;
  commented.value = true;
});
onCommentError(e => alert(`Something went wrong:
  ${e.message ?? 'Unknown error'}
  Try again if you like.`));

const sendComment = async() => {
  const edit_token = self.crypto.randomUUID();
  const com = await mutate({email: mail.value, username: user.value, content: body.value, token: token.value,post:props.postId,edit_token});
  const comId = com?.data?.createComment?.documentId;
  if (!comId) return;
  commentStore.value[comId] = {edit_token,email:mail.value,user:user.value};
  localStorage.setItem('mm_commentStore', JSON.stringify(commentStore.value));
  setTimeout(() => {
    commentStore.value[comId] = undefined;
    localStorage.setItem('mm_commentStore', JSON.stringify(commentStore.value));
  },30*60*1000);
};

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
const editSubmit =(id:string,event:SubmitEvent) => {
  const saved = commentStore.value[id];
  if (!saved) return;
  const newValue = (event.target as any)?.edit_content.value as string|undefined;
  if (!newValue?.trim() || newValue.length < 20) return alert('Your comment needs at least 20 characters. Surely, you have more to say?');
  editing.value[id] = undefined;
  editComment({post:id,content:newValue,email:saved.email,username:saved.user,token:'',edit_token:saved.edit_token}).catch(console.log);
};
</script>


<template>
  <div class="commentainer">
    <h2>Comments</h2>
    <hr>
    <PaginationWidget
      v-if="pagination" term="p" :page-data="pagination"
      @pg="propagate" />
    <ul v-if="commentData.length">
      <li v-for="{ author: {username}, createdAt, content, documentId} in commentData.filter((f):f is typeof f & {author:{},createdAt:{}} => !!(f?.author && f.createdAt && cleanStore(f))).sort((a,b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())" :key="documentId">
        <span class="commentitle">{{ username }}</span>
        <input
          :id="`edit_${documentId}`" v-model="editing[documentId]" type="checkbox"
          class="invisible"><label
            v-if="commentStore[documentId]" class="edit_label" title="You can edit your comment within 30 minutes of posting."
            :for="`edit_${documentId}`">[{{ !editing[documentId]?"edit":"abort edit" }}]</label>
        <span class="commentStats">posted {{ gerDate(createdAt??new Date(0)) }}</span>
        <hr>
        <div v-if="!editing[documentId]" class="commentbody">{{ content }}</div>
        <form v-else class="com_forms" @submit.stop.prevent="e=>editSubmit(documentId,e as SubmitEvent)"><textarea
          id="uma" minlength="20" class="comment_input edit grayborder"
          :value="content"
          name="edit_content" /> <button class="comment_input_2nd vis grayborder hoverglow" type="submit">Submit Edit</button> </form>
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
      <div class="userhint">Note that an email address can only be used with a single username.</div>
    </form>
  </div>
  <div id="challenger" :class="{captive: activeCaptcha}" />
</template>