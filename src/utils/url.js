/*
 * @Author: cyong
 * @Date: 2022-03-15 09:10:55
 * @LastEditors: cyong
 * @LastEditTime: 2022-07-09 19:21:35
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
    categorysearchAll: '/category/searchAll',
    //标签相关后端接口
    tagsearch: '/tag/vaguesearch',
    tagadd: '/tag/add',
    tagsearchall: '/tag/searchAll',
    //文章相关的后端接口
    articleadd: '/article/add'



}

export default url;

