/*
 * @Author: cyong
 * @Date: 2021-11-29 19:42:09
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-08 14:09:44
 * @FilePath: \view\src\routes\admin.js
 * @Description: 管理端的router路由,未完成，后续还会继续添加
 */


export default{
    path:'/admin',
    name:'home',
    component:'',
    childRoutes:[
        {path:'article/edit/:id',component:''},
        {path:'article/add',component:''},
        {path:'article/manager',component:''},
        {path:'user/manger',component:''},
    ]

}