/*
 * @Author: cyong
 * @Date: 2021-12-20 20:55:25
 * @LastEditors: cyong
 * @LastEditTime: 2022-03-20 17:46:07
 * @FilePath: \view\src\layout\web\header\index.jsx
 * @Description: 网页的header组件，主要包括左边的网站标志和右边的菜单栏部分
 */

import React from 'react';
import { Layout, Row } from 'antd'
import Left from './left';
import Right from './right';

const { Header } = Layout


const WebHeader = (props) => {
  const { className } = props
  return (
    < div className='appheader-root'>
      <Header className={className}>
        <Row>
          <Left />
          <Right />
        </Row>
      </Header>
    </div>

  )

}

export default WebHeader