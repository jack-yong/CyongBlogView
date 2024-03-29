/*
 * @Author: cyong
 * @Date: 2022-03-15 09:10:55
 * @LastEditors: cyong
 * @LastEditTime: 2022-08-29 10:06:31
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
    articleadd: '/article/add',
    articlesearch: '/article/search',
    articlepostshow: '/article/postshow',
    articledetial: '/article/detail',
    //展示页面的相关接口
    homepage: '/homepage/showdata',
    articltype: '/homepage/articletype',
    canlderdata: '/homepage/canlder',
    //日常说说相关的接口
    pushpinssearch: '/pushpins/search',
    pushpinsadd: '/pushpins/add',
    pushpinsall: '/pushpins/all',
    //友链相关的接口
    linksearch: '/link/search',
    linkadd: '/link/add',
    linkall: '/link/all',
    //日志相关的接口
    devlogsearch: '/devlog/search',
    devlogadd: '/devlog/add',
    devlogall: '/devlog/all',
    //主页相关接口
    ACTData: '/homepage/ACTdata',
    //作品集相关的接口
    portfolioall: '/portfolio/all',
    portfolioadd: '/portfolio/add',


}

export default url;

