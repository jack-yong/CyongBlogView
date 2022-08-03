/*
 * @Author: cyong
 * @Date: 2021-11-29 19:42:21
 * @LastEditors: cyong
 * @LastEditTime: 2022-08-02 19:06:38
 * @FilePath: \view\src\routes\web.js
 * @Description: 现在正在使用
 */

import Userhome from "../pages/web/home";
import Userlayout from "../layout/web";
import Article from '../pages/web/article';
import Category from "@/pages/web/category/indxe";
import Tags from "@/pages/web/tags";
import Search from "@/pages/web/search";
import About from "@/pages/web/about";
import DevLog from "@/pages/web/devlog";
import Message from "@/pages/web/message";
import Portfolio from "@/pages/web/portfolio";
import Pushpins from "@/pages/web/pushpins";
import Link from "@/pages/web/link";
const webRoutes = {
    path: '/',
    component: Userlayout,
    childRoutes: [
        {
            path: '',
            component: Userhome,
        },
        {
            path: 'search',
            component: Search,
        },
        {
            path: 'article',
            component: Article,
        },
        {
            path: 'category',
            component: Category,
        },
        {
            path: 'tags',
            component: Tags,
        },
        {
            path: 'link',
            component: Link,
        },
        {
            path: 'about',
            component: About,
        },
        {
            path: 'devlog',
            component: DevLog,
        },
        {
            path: 'message',
            component: Message,
        },
        {
            path: 'portfolio',
            component: Portfolio,
        },
        {
            path: 'pushpins',
            component: Pushpins,
        },
    ]
}

export default webRoutes;