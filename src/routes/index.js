/*
 * @Author: cyong
 * @Date: 2021-12-08 14:40:07
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-11 15:39:06
 * @FilePath: \view\src\routes\index.js
 * @Description: 整合admin和web的路由
 */

import webRoutes from './web'
import adminRouters from './admin'

const routers = [
    webRoutes,
    adminRouters
]

export default routers