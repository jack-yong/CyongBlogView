/*
 * @Author: cyong
 * @Date: 2021-12-08 14:40:07
 * @LastEditors: cyong
 * @LastEditTime: 2022-03-31 11:29:52
 * @FilePath: \view\src\routes\index.js
 * @Description: 整合全部的路由
 */

import adminrouter from './admin'
import webroutee from './web'

const routers = [
    adminrouter,
    webroutee

]

export default routers