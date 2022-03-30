const routes = [
    {
        name: 'commonCss',
        path: '/commonCss',
        component: () => import('@/view/commonCss')
    },
    {
        name: 'txtShadow',
        path: '/txtShadow',
        component: () => import('@/view/commonCss/txtShadow')
    },
    {
        name: 'boxShadow',
        path: '/boxShadow',
        component: () => import('@/view/commonCss/boxShadow')
    },
    {
        name: 'cssAnimate',
        path: '/cssAnimate',
        component: () => import('@/view/commonCss/cssAnimate')
    },


    {
        name: 'commonJS',
        path: '/commonJS',
        component: () => import('@/view/commonJS')
    },
    
];
 
export default routes