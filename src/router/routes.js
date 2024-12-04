// const routes = [
//     {
//         path: '/',
//         hidden: true,
//         component: () => import('@/layout/BasicLayout'),
//         children: [
//             {
//                 path: '',
//                 component: () => import('@/view/welcome/')
//             },
//             // commonCss
//             {
//                 name: 'commonCss',
//                 path: 'commonCss',
//                 component: () => import('@/view/commonCss'),
//                 children: [
//                     {
//                         path: '',
//                         component: () => import('@/view/commonCss/menu')
//                     },
//                     {
//                         path: 'txtShadow',
//                         component: () => import('@/view/commonCss/txtShadow')
//                     },
//                     {
//                         name: 'boxShadow',
//                         path: 'boxShadow',
//                         component: () => import('@/view/commonCss/boxShadow')
//                     },
//                     {
//                         name: 'cssAnimate',
//                         path: 'cssAnimate',
//                         component: () => import('@/view/commonCss/cssAnimate')
//                     },
//                     {
//                         name: 'cssComponent',
//                         path: 'cssComponent',
//                         component: () => import('@/view/commonCss/cssComponent')
//                     },
//                 ]
//             },
//             // conmmonJs
//             {
//                 name: 'commonJS',
//                 path: 'commonJS',
//                 component: () => import('@/view/commonJS')
//             },
//             // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
//             {
//                 path: '/:pathMatch(.*)*', name: 'NotFound',
//                 component: () => import('@/view/404/index.vue')
//             },
//         ]
//     },
//     // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
//     // { path: '/:pathMatch(.*)', component: () => import('@/layout/BasicLayout') }
// ];

// export default routes

// 根据目录自动添加路由
let routers = require.context('../view', true, /\.vue$/).keys()
console.log('--routers---',routers)
let indexRouterMap = {}
routers.forEach(item => {
    const paths = item.match(/[a-zA-Z]+/g)
    const routerChild = {
        // path: paths[1] == 'menu' ? paths[1] : paths[1],
        path: paths[1] == 'menu' ? '' : paths[1],
        name: paths[0]+paths[1],
        url: `@/view/${paths[0]}/${paths[1]}`,
        component: () => import(`@/view/${paths[0]}/${paths[1]}`),
    }
    if (indexRouterMap[paths[0]]) {
        indexRouterMap[paths[0]].children.push(routerChild)
    } else {
        indexRouterMap[paths[0]] = {
            path: paths[0],
            name: paths[0],
            url: `@/view/${paths[0]}`,
            component: () => import(`@/view/${paths[0]}`),
            children: [routerChild]
        }
    }
})
const routes = [
    {
        path: '/',
        hidden: true,
        component: () => import('@/layout/BasicLayout'),
        children: [
            {
                path: '',
                component: () => import('@/view/welcome/'),
            },
            {
                path: 'commonJS/componets/coms/timer',
                component: () => import('@/view/commonJS/componets/coms/timer'),
            },
            ...Object.values(indexRouterMap),
        ]
    },
]
console.log('---routes--', routes)
export default routes