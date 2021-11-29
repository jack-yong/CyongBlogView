


//管理端的router路由,未完成，后续还会继续添加
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