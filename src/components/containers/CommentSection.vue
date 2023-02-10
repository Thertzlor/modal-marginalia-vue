<script lang ="ts" setup>
import {ref} from "vue";
import VueHcaptcha from "@hcaptcha/vue3-hcaptcha";
import {apiURL} from "@/services/GlobalDataService";
import axios from "axios"

const props = defineProps<{post_id: number, comment_data: Entity<PluginComment>[]}>();
const emit = defineEmits<{(e: 'fetch', value: true): void}>()

const sitekey = 'bd9d5be4-6fae-4c82-a3af-9c2529b30317' //"10000000-ffff-ffff-ffff-000000000001" 

const expanded = ref(false);
const commented = ref(false);

const body = ref("");
const mail = ref("");
const token = ref("");
const user = ref("");
const invisibleHcaptcha = ref<any | null>(null)
const submission = ref(false)
const activeCaptcha = ref(false)

const sendComment = () => {
  const commentUrl = `${apiURL}/comment-manager/comments/${props.post_id}`
  return axios.post(commentUrl, {email: mail.value, username: user.value, content: body.value, captcha_token: token.value})
}

function onExpire() {
  console.log("Ex Pire");
}
function onChallengeExpire() {
  console.log("Challex Pire");
}
function onError() {
  console.log("Er or");
}
function formSubmit() {
  submission.value = true;
  activeCaptcha.value = true;
  invisibleHcaptcha.value?.execute();
}

function commentSubmit(challengeToken) {
  activeCaptcha.value = false;
  if (!submission.value) throw new Error("No comment form submitted!");
  submission.value = false
  token.value = challengeToken;
  sendComment().then(
    () => {
      emit('fetch', true);
      expanded.value = false;
      commented.value = true;
    },
    x => alert(`Something went wrong:
    ${x?.response?.data?.error?.message ?? 'Unknown error'}
    Try again if you like.`)
  );
}
</script>


<template>
  <div class="commentainer">
    <h2>Comments</h2>
    <hr />
    <ul v-if="comment_data.length">
      <li v-for="{attributes: {author: {data: {attributes: {username}}}, createdAt, content}, id} in comment_data" :key="id">
        <span class="commentitle">{{ username}}</span>
        <span class="commentStats">posted {{ gerDate(createdAt)}}</span>
        <hr />
        <div class="commentbody">{{ content}}</div>
      </li>
    </ul>
    <p v-else class="no_comment">Nothing here yet.</p>

    <input v-model="expanded" :disabled="commented" type="checkbox" name="comCheck" id="comment_check" />
    <label :class="{grayborder:true, hoverglow:!commented, grayed:commented}" for="comment_check">Post a Comment</label>
    <form class="com_forms" id="comment_form" @submit.stop.prevent="formSubmit">
      <textarea minlength="20" required class="comment_input grayborder" v-model="body" name="comment_text" id="comtext" cols="30" rows="10" placeholder="Your comment"></textarea>
      <input minlength="3" type="text" v-model="user" name="comment_name" class="comment_input_2nd grayborder" placeholder="Name" required />
      <input minlength="4" type="email" v-model="mail" name="comment_email" placeholder="Email" class="comment_input_2nd grayborder" required />
      <button type="submit" class="comment_input_2nd grayborder hoverglow">Submit Comment</button>
      <vue-hcaptcha ref="invisibleHcaptcha" :sitekey="sitekey" theme="dark" size="invisible" @verify="commentSubmit" @expired="onExpire" challengeContainer="challenger" @challenge-expired="onChallengeExpire" @error="onError" />
    </form>
  </div>
  <div id="challenger" :class="{captive: activeCaptcha}"></div>
</template>