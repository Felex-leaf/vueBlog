import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router';
import Home from '@/views/Home/index.vue';
import Test from '@/views/Test/index.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: '首页',
    component: Home,
  },
  {
    path: '/test',
    name: '测试',
    component: Test,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
