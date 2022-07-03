/*
 * @Author: cyong
 * @Date: 2021-10-17 20:19:58
 * @LastEditors: cyong
 * @LastEditTime: 2022-07-03 20:42:32
 * @FilePath: \view\src\App.jsx
 * @Description: 博客的主界面
 */
import './styles/App.css'
//专门为web开发者使用的路由react-router-dom 
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './routes';
//引入antd的css文件
import 'antd/dist/antd.css';
import PublicComponent from './components/Public';
const App = props => {

  //路由给我整吐了
  // //实现嵌套路由的函数
  // const renderRouters = (routes, rootpath) => {
  //   const childrenList = []
  //   routes.forEach((items) => {
  //     let newpath = items.path ? `${rootpath}/${items.path}` : rootpath

  //     newpath = newpath.replace(/\/+/g, '/')
  //     if (!items.children) {

  //       childrenList.push(
  //         <Route key={newpath} path={newpath} component={items.component} exact />

  //       )
  //     } else {
  //       let children = renderRouters(items.children, newpath)
  //       // let exact = items.path === '/'
  //       return childrenList.push(

  //         <Route
  //           key={newpath}
  //           render={props => <items.component {...props}>{children}</items.component>}
  //           path={newpath}

  //         />
  //       )
  //     }

  //   })
  //   return childrenList
  // }

  // 解构 route
  function renderRoutes(routes, contextPath) {
    const children = []

    const renderRoute = (item, routeContextPath) => {
      let newContextPath = item.path ? `${routeContextPath}/${item.path}` : routeContextPath
      newContextPath = newContextPath.replace(/\/+/g, '/')
      // if (newContextPath.includes('admin') && role !== 1) {
      //   item = {
      //     ...item,
      //     component: () => <Redirect to='/' />,
      //     children: []
      //   }
      // }
      if (!item.component) return

      if (item.childRoutes) {
        const childRoutes = renderRoutes(item.childRoutes, newContextPath)
        children.push(
          <Route
            key={newContextPath}
            render={props => <item.component {...props}>{childRoutes}</item.component>}
            path={newContextPath}
          />
        )
        item.childRoutes.forEach(r => renderRoute(r, newContextPath))
      } else {
        children.push(<Route key={newContextPath} component={item.component} path={newContextPath} exact />)
      }
    }

    routes.forEach(item => renderRoute(item, contextPath))

    return <Switch>{children}</Switch>
  }

  const children = renderRoutes(routes, '/');
  // console.log(children);
  return (
    <Router>

      {children}
      <PublicComponent />
    </Router>
  )
}

export default App
