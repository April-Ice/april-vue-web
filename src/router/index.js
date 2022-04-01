import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
    // createWebHistory路由模式路径不带#号(生产环境下不能直接访问项目，需要nginx转发)
    // history: createWebHistory(), 
    history: createWebHashHistory(),
    routes
})

export default router