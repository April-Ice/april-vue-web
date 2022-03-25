const routes = [
    {
        name: 'commonJS',
        path: '/commonJS',
        component: () => import('@/view/commonJS')
    },
    {
        name: 'commonCss',
        path: '/commonCss',
        component: () => import('@/view/commonCss')
    },
   
    
];
 
export default routes