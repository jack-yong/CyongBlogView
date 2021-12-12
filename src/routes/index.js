/*
 * @Author: cyong
 * @Date: 2021-12-08 14:40:07
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-12 16:23:04
 * @FilePath: \view\src\routes\index.js
 * @Description: 整合全部的路由
 */

import Home from "../pages/home/Home"
const routers = [
    {
        path:'/home',
        component:Home,
    },
    {
        path:'article/:id',
        component:''
    },
    {
        path:'archives',
        component:''
    },
    {
        path:'categories',
        component:''
    },
    {
        path:'categories/:name',
        component:''
    },
    {
        path:'tags/:name',
        component:''
    },
    {
        path:'/admin',
        component:'',
    },
    {
        path:'/admin/article/edit/:id',
        component:''
    },
    {
        path:'/admin/article/add',
        component:''
    },
    {
        path:'/admin/article/manager',
        component:''
    },
    {
        path:'/adminuser/manger',
        component:''
    }
]

export default routers