/*
 * @Author: cyong
 * @Date: 2021-10-17 20:19:58
 * @LastEditors: cyong
 * @LastEditTime: 2022-03-20 14:14:09
 * @FilePath: \view\src\App.jsx
 * @Description: 博客的主界面
 */
import './styles/App.css'
//专门为web开发者使用的路由react-router-dom 
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './routes';
//引入antd的css文件
import 'antd/dist/antd.css';
const App = props => {

  //实现嵌套路由的函数
  const renderRouters = (routes) => {
    const childrenList = []
    routes.forEach((items) => {
      if (!items.children) {
        childrenList.push(
          <Route key={items.path} path={items.path} component={items.component} />
        )
      } else {
        let children = renderRouters(items.children)
        return childrenList.push(
          <Route
            key={items.path}
            render={props => <items.component {...props}>{children}</items.component>}
            path={items.path}
          />
        )
      }

    })
    return childrenList
  }

  const children = renderRouters(routes);
  return (
    <Router>
      <Switch>
        {children}
      </Switch>
    </Router>
  )
}

export default App
