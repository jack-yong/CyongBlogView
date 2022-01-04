/*
 * @Author: cyong
 * @Date: 2021-12-20 20:55:25
 * @LastEditors: cyong
 * @LastEditTime: 2022-01-04 16:04:20
 * @FilePath: \view\src\pages\layout\web\header\index.jsx
 * @Description: 网页的header组件，主要包括左边的网站标志和右边的菜单栏部分
 */

import React from 'react';
import { Layout, Row, Col } from 'antd'
import Left from './left';
import Right from './right';

const { Header } = Layout

// 响应式
const responsiveLeft = { xxl: 10, xl: 11, lg: 11, sm: 10 }
const responsiveRight = { xxl: 14, xl: 13, lg: 13, sm: 14 }

const WebHeader = () => {
  return (
    <Header className='app-header'>
      <Row>
        <Col {...responsiveLeft}>
          <Left />
        </Col>
        <Col {...responsiveRight}>
          <Right />
        </Col>

      </Row>
    </Header>
  )

}

export default WebHeader