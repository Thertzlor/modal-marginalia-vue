import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("./components/pages/Home.vue" as any),
  },

  { 
    path: '/:pathMatch(.*)*', 
    name: 'Not Found', 
    component: ()=>import("./components/pages/WebError.vue" as any), 
    props:{error_code:404} 
  },
  { 
    path: '/ServerError', 
    name: 'Server Error', 
    component: ()=>import("./components/pages/WebError.vue" as any), 
    props:{error_code:501} 
  },
  {
    path: "/about",
    name: "About",
    component: () => import("./components/pages/AboutPage.vue" as any),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("./components/pages/Search.vue" as any),
  },
  {
    path: "/post/:select",
    name: "Post",
    component: () => import("./components/pages/Post.vue" as any),
  },
  {
    path: "/tag-cloud",
    name: "Tag Cloud",
    component: () => import("./components/pages/TagCloud.vue" as any),
  },
  {
    path: "/only-stars",
    name: "Only Stars",
    component: () => import("./components/pages/OnlyStars.vue" as any),
  },  {
    path: "/post-list",
    name: "Post List",
    component: () => import("./components/pages/PostList.vue" as any),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to) {
    if (to.hash) {
      console.log(to.hash)
      return {
        selector: to.hash,
        behavior: 'smooth'
      };
    }
    return { x: 0, y: 0,behavior:'smooth' };  // Go to the top of the page if no hash
  },
});

export default router;