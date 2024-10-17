import { createWebHistory, createRouter } from 'vue-router'
import { loadLayoutMiddleware } from '@/utils/load-layout'
// import HomeView from '@/views/HomeView.vue'
// import ConversationView from '@/views/ConversationView.vue'

const HomeView = () => import('@/views/HomeView.vue');
const ConversationView = () => import('@/views/ConversationView.vue');
const ObligationView = () => import('@/views/ObligationView/ObligationView.vue');
const ObligationDetailsView = () => import('@/views/ObligationView/ObligationDetailsView.vue');

export const ROUTES = {
    Home: '/' as const,
    Conversations: '/conversations' as const,
    Obligations: '/obligations' as const,
    ObligationExcalation: (pathId: string) => `/obligation/excalation/${pathId}` as const,
};

const routes = [
    { path: ROUTES.Home, component: HomeView, name: "My Workspace" },
    { path: ROUTES.Conversations, component: ConversationView, name: "Conversations" },
    { path: ROUTES.Obligations, component: ObligationView, name: "Obligations", meta: { layout: 'DefaultLayout' } }, // for custom layouts add the meta.layout prop
    { path: ROUTES.ObligationExcalation(':id' as const), component: ObligationDetailsView, name: "Obligation Details" },
]

export type RoutePaths = typeof routes[number]['path'];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// Before each route changing the loadLayoutMiddleware middleware is executing.
router.beforeEach((route) => loadLayoutMiddleware(route))

export default router;