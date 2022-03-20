/*
 * @Author: cyong
 * @Date: 2021-12-08 14:40:07
 * @LastEditors: cyong
 * @LastEditTime: 2022-03-20 13:50:27
 * @FilePath: \view\src\routes\index.js
 * @Description: 整合全部的路由
 */

import Home from "../pages/web/home"
import Layout from "../layout/web"
const routers = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                component: Home,
            },
            {
                path: 'article/:id',
                component: ''
            },
            {
                path: 'archives',
                component: ''
            },
            {
                path: 'categories',
                component: ''
            },
            {
                path: 'categories/:name',
                component: ''
            },
            {
                path: 'tags/:name',
                component: ''
            }
        ]
    },

    // {
    //     path: '/admin',
    //     component: '',
    // },
    // {
    //     path: '/admin/article/edit/:id',
    //     component: ''
    // },
    // {
    //     path: '/admin/article/add',
    //     component: ''
    // },
    // {
    //     path: '/admin/article/manager',
    //     component: ''
    // },
    // {
    //     path: '/adminuser/manger',
    //     component: ''
    // }
]

export default routers