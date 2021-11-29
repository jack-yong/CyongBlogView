



//用户端的router路由
export default{
    path:'/',
    name:'home',
    component:'',
    childRouters:[
        {path:'/',component:''},
        {path:'article/:id',component:''},
        {path:'archives',component:''},
        {path:'categories',component:''},
        {path:'categories/:name',component:''},
        {path:'tags/:name',component:''},
        {path:'*',component:''}
    ]
}