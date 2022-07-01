/*
 * @Author: cyong
 * @Date: 2022-03-15 09:10:55
 * @LastEditors: cyong
 * @LastEditTime: 2022-07-01 20:59:03
 * @FilePath: \view\src\utils\url.js
 * @Description: 存放向后端请求地址的url
 */



const url = {
    //用户相关后端接口
    userlogin: '/user/login',
    userregister: '/user/register',
    userSearch: '/user/vaguesearch',
    //类型相关后端接口
    categorysearch: '/category/search',
    categoryAdd: '/category/add',
    //标签相关后端接口
    tagsearch: '/tag/vaguesearch',
    tagadd: '/tag/add',



}

export default url;

