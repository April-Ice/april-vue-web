const routes = [
    {
        path: '/',
        hidden: true,
        component: () => import('@/layout/BasicLayout'),
        children: [
            {
                path: '',
                component: () => import('@/view/welcome/')
            },
            // commonCss
            {
                name: 'commonCss',
                path: 'commonCss',
                component: () => import('@/view/commonCss'),
                children: [
                    {
                        path: '',
                        component: () => import('@/view/commonCss/menu')
                    },
                    {
                        path: 'txtShadow',
                        component: () => import('@/view/commonCss/txtShadow')
                    },
                    {
                        name: 'boxShadow',
                        path: 'boxShadow',
                        component: () => import('@/view/commonCss/boxShadow')
                    },
                    {
                        name: 'cssAnimate',
                        path: 'cssAnimate',
                        component: () => import('@/view/commonCss/cssAnimate')
                    },
                ]
            },
            // conmmonJs
            {
                name: 'commonJS',
                path: 'commonJS',
                component: () => import('@/view/commonJS')
            },
            // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
            {
                path: '/:pathMatch(.*)*', name: 'NotFound',
                component: () => import('@/view/404/index.vue')
            },
        ]
    },
    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    // { path: '/:pathMatch(.*)', component: () => import('@/layout/BasicLayout') }
];

export default routes