import Vue from 'vue';
import VueRouter from 'vue-router';
import UsersList from '../views/UsersList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UsersList,
  },
  {
    path: '/user/:id',
    name: 'UserDetail',
    props: true,
    component: () => import('@/components/UserList/UserDetail.vue'),
    children: [
      {
        path: 'albums',
        name: 'UserAlbumPage',
        props: true,
        component: () => import('@/components/UserList/UserAlbumPage.vue'),
      },
      {
        path: 'posts',
        name: 'UserPostsPage',
        props: true,
        component: () => import('@/components/UserList/UserPostsPage.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
