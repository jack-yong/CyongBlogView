/*
 * @Author: cyong
 * @Date: 2021-11-29 19:42:21
 * @LastEditors: cyong
 * @LastEditTime: 2022-03-31 14:44:51
 * @FilePath: \view\src\routes\web.js
 * @Description: 用户端的router路由，暂时弃用，后续还会继续添加
 */

import Userhome from "../pages/web/home"
import Userlayout from "../layout/web"
import Article from '../pages/web/article'
const webRoutes = {
    path: '/',
    component: Userlayout,
    childRoutes: [
        {
            path: '',
            component: Userhome,
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
            path: 'tages',
            component: Article
        }
    ]
}

export default webRoutes;