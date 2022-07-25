/*
 * @Author: cyong
 * @Date: 2021-11-29 19:42:09
 * @LastEditors: cyong
 * @LastEditTime: 2022-07-21 19:27:18
 * @FilePath: \view\src\routes\admin.js
 * @Description: 管理端的router路由
 */

import Adminlayout from '../layout/admin';
import Home from '../pages/admin/home';
import Usermanger from '../pages/admin/user';
import ArticleEdit from '../pages/admin/article/edit';
import Categorys from '@/pages/admin/categorys';
import TagManger from '@/pages/admin/tags';
import ArticleManger from '@/pages/admin/article/manager';
import Pushpins from '@/pages/admin/pushpins';
import Portfolio from '@/pages/admin/portfolio';
import DevLog from '@/pages/admin/devlog';
import Messages from '@/pages/admin/messages';
import Link from '@/pages/admin/link';
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
            path: '/user',
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
        {
            path: '/pushpins',
            component: Pushpins,
        },
        {
            path: '/links',
            component: Link,
        },
        {
            path: '/messages',
            component: Messages,
        },
        {
            path: '/log',
            component: DevLog,
        },
        {
            path: '/portfolio',
            component: Portfolio,
        },
    ]
}

export default adminrouter;