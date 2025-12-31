import { createRouter, createWebHistory } from 'vue-router';

import Ticket from '@/components/Ticket.vue';
import Main from '@/components/Main.vue';
import Login from '@/components/Login.vue';
import Join from '@/components/Join.vue';
import Mypage from '@/components/Mypage.vue'
import Waiting from '@/components/Waiting.vue'
import ReservePage from '@/components/Reservation.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Main
  },
  {
    path: '/:idx',
    name: 'Ticket',
    component: Ticket
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { hideHeader: true }
  },
  {
    path: '/join',
    name: 'Join',
    component: Join,
    meta: { hideHeader: true }
  },
  {
    path: '/mypage',
    name: 'Mypage',
    component: Mypage
  },
  {
    path: '/waiting/:idx',
    name: 'Waiting',
    component: Waiting,
    meta: { hideHeader: true }
  },
  {
    path: '/reserve/:idx',
    name: 'Reserve',
    component: ReservePage,
    meta: { hideHeader: true }
  }
];

const router = createRouter({
  history: createWebHistory(), // 브라우저 히스토리 모드 사용
  routes
});

export default router;