/*
 * @Author: cyong
 * @Date: 2021-10-17 20:19:58
 * @LastEditors: cyong
 * @LastEditTime: 2022-02-28 09:20:54
 * @FilePath: \view\src\index.js
 * @Description: 网站入口文件
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';




//redux相关的内容
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

