/*
 * @Author: cyong
 * @Date: 2021-11-29 19:42:09
 * @LastEditors: cyong
 * @LastEditTime: 2022-07-02 20:48:46
 * @FilePath: \view\src\routes\admin.js
 * @Description: 管理端的router路由
 */

import Adminlayout from '../layout/admin'
import Home from '../pages/admin/home'
import Usermanger from '../pages/admin/user'
import ArticleEdit from '../pages/admin/article/edit'
import Categorys from '@/pages/admin/categorys'
import TagManger from '@/pages/admin/tags'
import ArticleManger from '@/pages/admin/article/manager'
const adminrouter = {
    path: '/admin',
    component: Adminlayout,
    childRoutes: [
        {
            path: '',
            component: Home,
        },
        {
            path: '/article/edit/:id',
            component: ArticleEdit,
        },
        {
            path: '/article/add',
            component: ArticleEdit,
        },
        {
            path: '/article/manager',
            component: ArticleManger,
        },
        {
            path: '/user/manger',
            component: Usermanger,
        },
        {
            path: '/categorys',
            component: Categorys,
        },
        {
            path: '/tags',
            component: TagManger,
        },
    ]
}

export default adminrouter;