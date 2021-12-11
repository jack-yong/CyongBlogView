import Home from "../pages/home/Home"

/*
 * @Author: cyong
 * @Date: 2021-11-29 19:42:21
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-11 21:56:57
 * @FilePath: \view\src\routes\web.js
 * @Description: 用户端的router路由
 */

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