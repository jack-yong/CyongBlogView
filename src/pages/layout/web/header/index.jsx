/*
 * @Author: cyong
 * @Date: 2021-12-20 20:55:25
 * @LastEditors: cyong
 * @LastEditTime: 2022-02-25 13:32:04
 * @FilePath: \view\src\pages\layout\web\header\index.jsx
 * @Description: 网页的header组件，主要包括左边的网站标志和右边的菜单栏部分
 */

import React from 'react';
import { Layout, Row } from 'antd'
import Left from './left';
import Right from './right';

const { Header } = Layout


const WebHeader = () => {
  return (
    <Header className='app-header'>
      <Row>
        <Left />
        <Right />
      </Row>
    </Header>
  )

}

export default WebHeader