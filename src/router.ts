import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'
import { loadLayoutMiddleware } from '@/utils/load-layout'
// import HomeView from '@/views/HomeView.vue'
// import ConversationView from '@/views/ConversationView.vue'

const HomeView = () => import('@/views/HomeView.vue');
const ConversationView = () => import('@/views/ConversationView.vue');

const routes = [
    { path: '/' as const, component: HomeView, name: "My Workspace" },
    { path: '/conversations' as const, component: ConversationView, name: "Conversations" },
]

export type RoutePaths = typeof routes[number]['path'];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// Before each route changing the loadLayoutMiddleware middleware is executing.
router.beforeEach((route) => loadLayoutMiddleware(route))

export const ROUTES = {
    Home: '/',
    Conversations: '/conversations',
}

export default router;