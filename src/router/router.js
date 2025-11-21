import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Welcome from '@/pages/Welcome.vue';
const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        redirect: "/welcome"

    },
    {
      path: "/",
      redirect: "/welcome" // Redirige la ruta raíz a /home
    },
    {
        path: '/welcome', 
        name: 'welcome',
        component: Welcome,
    },    
    {
        path: '/home', 
        name: 'home',
        component: Home,
    },
    {
        path: '/meaning',
        name: 'meaning',
        component: () => import('@/pages/Meaning.vue'),
    },
    {
        path: '/parishes',
        name: 'parishes',
        component: () => import('@/pages/Parishes.vue'),
    },
    {
        path: '/monuments',
        name: 'monuments',
        component: () => import('@/pages/Monuments.vue')
    },
    {
        path: '/review',
        name: 'review',
        component: () => import('@/pages/Review.vue'),
    },
    {
        path: '/parishes/rural',
        name: 'rural',
        component: null,
        children: [
            {
                path: '',
                name: 'rural-home',
                component: () => import('@/pages/Rural.vue'),
            },
            {
                path: 'cotogchoa',
                name: 'cotogchoa',
                component: () => import('@/pages/ParishUR/Cotogchoa.vue'),
            },
            {
                path: 'rumibamba',
                name: 'rumibamba',
                component: () => import('@/pages/ParishUR/Rumibamba.vue'),
            },
            {
                path: 'meals-cotogchoa',
                name: 'meals-cotogchoa',
                component: () => import('@/pages/TraditionalMeals/MealsCotogchoa.vue'),
            },    
            {
                path: 'meals-rumibamba',
                name: 'meals-rumibamba',
                component: () => import('@/pages/TraditionalMeals/MealsRumibamba.vue'),
            },      
        ]
    },
    {
        path: '/parishes/urban',
        name: 'urban',
        component: null,
        children: [
            {
                path: '',
                name: 'urban-home',
                component: () => import('@/pages/Urban.vue'),
            },            
            {
                path: 'sangolqui',
                name: 'sangolqui',
                component: () => import('@/pages/ParishUR/Sangolqui.vue'),
            },
            {
                path: 'sanrafael',
                name: 'sanrafael',
                component: () => import('@/pages/ParishUR/SanRafael.vue'),
            },
            {
                path: 'sanpedrotaboada',
                name: 'sanpedrotaboada',
                component: () => import('@/pages/ParishUR/SanPedroTaboada.vue'),
            },
            {
                path: 'meals-sangolqui',
                name: 'meals-sangolqui',
                component: () => import('@/pages/TraditionalMeals/MealsSangolqui.vue'),
            },    
            {
                path: 'meals-sanrafael',
                name: 'meals-sanrafael',
                component: () => import('@/pages/TraditionalMeals/MealsSanRafael.vue'),
            },    
            {
                path: 'meals-sanpedrotaboada',
                name: 'meals-sanpedrotaboada',
                component: () => import('@/pages/TraditionalMeals/MealsSanPedroTaboada.vue'),
            },    
        ]
    },
    {
        path: '/puzzle',
        name: 'puzzle',
        component: () => import('@/pages/Puzzle/Puzzle.vue'),
    },  
]

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;