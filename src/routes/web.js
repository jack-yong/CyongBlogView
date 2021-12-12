/*
 * @Author: cyong
 * @Date: 2021-11-29 19:42:21
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-12 16:23:14
 * @FilePath: \view\src\routes\web.js
 * @Description: 用户端的router路由，暂时弃用，后续还会继续添加
 */

import Home from "../pages/home/Home"

export default[
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
    }
]