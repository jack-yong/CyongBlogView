/*
 * @Author: cyong
 * @Date: 2021-10-17 20:19:58
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-29 16:26:38
 * @FilePath: \view\src\App.jsx
 * @Description: 博客的主界面
 */
import logo from './assets/icons/logo.svg';
import './styles/App.css'
//专门为web开发者使用的路由react-router-dom 
import { HashRouter as Router,Switch,Route} from 'react-router-dom'
import routes from './routes';

const App = props => {
  return (
    <Router>
      <Switch>
      {
        routes.map((v,k)=>{
          return <Route key={k} path={v.path} component={v.component} />
        })
        
      }
    </Switch>
  </Router>
  )
}

export default App
