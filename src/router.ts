import {RouteRecordRaw} from 'vue-router';

export const routes:RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',

    component: () => import('./components/pages/HomePage.vue')
  },
  {
    path: '/NotFound',
    name: 'Not Found',
    props:{errorCode:404},
    component: () => import('./components/pages/WebError.vue')
  },
  {
    path: '/ServerError',
    name: 'Server Error',
    props:{errorCode:501},
    component: () => import('./components/pages/WebError.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./components/pages/AboutPage.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('./components/pages/SearchPage.vue')
  },
  {
    path: '/post/:select',
    name: 'Post',
    component: () => import('./components/pages/PostContent.vue')
  },
  {
    path: '/tag-cloud',
    name: 'Tag Cloud',
    component: () => import('./components/pages/TagCloud.vue')
  },
  {
    path: '/only-stars',
    name: 'Only Stars',
    component: () => import('./components/pages/OnlyStars.vue')
  }, {
    path: '/post-list',
    name: 'Post List',
    component: () => import('./components/pages/PostList.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Not Found',
    props:{errorCode:404},
    component: () => import('./components/pages/WebError.vue')
  }
];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
//   scrollBehavior(to) {
//     return to.hash?{selector: to.hash,behavior: 'smooth'}:{x: 0, y: 0,behavior:'smooth'};// Go to the top of the page if no hash
//   }
// });

// // router.beforeEach(x => {
// //   console.log(x.fullPath);
// // });

// export default router;