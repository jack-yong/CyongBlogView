/*
 * @Author: cyong
 * @Date: 2021-10-17 20:19:58
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-09 21:42:29
 * @FilePath: \view\src\App.js
 * @Description: 博客的主界面
 */
import logo from './assets/icons/logo.svg';
import './styles/App.css'
//专门为web开发者使用的路由react-router-dom 
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'


function App() {
  return (
    <div className="App">
        我的博客，正式开始搭建了!
    </div>
  );
}

export default App;
