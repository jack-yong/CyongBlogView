/*
 * @Author: cyong
 * @Date: 2021-12-20 20:55:25
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-21 11:22:31
 * @FilePath: \view\src\pages\layout\web\header\index.jsx
 * @Description: 网页的header组件，主要包括左边的网站标志和右边的菜单栏部分
 */

import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd'

const  {Header} = Layout

// 响应式
const responsiveLeft = { xxl: 4, xl: 5, lg: 5, sm: 4, xs: 24 }
const responsiveRight = { xxl: 20, xl: 19, lg: 19, sm: 20, xs: 0 }

const  WebHeader = ()=>{
    <Header className='app-header'>
      <Row>
        <Col {...responsiveLeft}>
        </Col>
        <Col {...responsiveRight}>
        </Col>
      </Row>
  </Header>
}

export default WebHeader