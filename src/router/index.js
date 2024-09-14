import Diary from '../pages/Diary.vue';
import Profile from '../pages/Profile.vue';
import Pro from '../pages/Pro.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  { path: '/', name: 'Diary', component: Diary },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/pro', name: 'Pro', component: Pro },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;
