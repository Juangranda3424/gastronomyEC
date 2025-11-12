import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
const routes = [
    // {
    //     path: '/:pathMatch(.*)*',
    //     name: 'notfound',
    //     component: () => import('@/pages/NoFoundPage.vue')
    // },
    {
      path: "/",
      redirect: "/home" // Redirige la ruta raíz a /home
    },
    {path: '/home', name: 'home',
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
        component: () => import('@/pages/Rural.vue'),
    },
    {
        path: '/parishes/urban',
        name: 'urban',
        component: () => import('@/pages/Urban.vue'),
    },
]

const router = createRouter({
    history: createWebHistory('/gastronomiaEC'),
    routes
});

// router.beforeEach(async (to, from, next) => {
//   try {
//     const user = await getInfoUserFacade() // valida cookie en backend
//     if (user) {
//       // si está logueado
//       if (to.name === 'login') {
//         next({ name: 'store' })
//       } else {
//         // validación de roles
//         if (to.meta?.roles && !to.meta.roles.includes(user.data.name_rol)) {
//           // si no tiene permiso -> redirigir a home
//           return next({ name: 'store' })
//         }
//         next()
//       }
//     } else {
//       // no autenticado
//       if (to.name !== 'login') {
//         next({ name: 'login' })
//       } else {
//         next()
//       }
//     }
//   } catch (err) {
//     if (to.name !== 'login') {
//       next({ name: 'login' })
//     } else {
//       next()
//     }
//   }
// })


export default router;