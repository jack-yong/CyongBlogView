/*
 * @Author: cyong
 * @Date: 2021-12-20 20:55:25
 * @LastEditors: cyong
 * @LastEditTime: 2022-07-22 12:39:53
 * @FilePath: \view\src\layout\web\header\index.jsx
 * @Description: 网页的header组件，主要包括左边的网站标志和右边的菜单栏部分
 */

import React from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import Left from './left';
import Right from './right';
import styles from './index.module.less';

const { Header } = Layout


const WebHeader = (props) => {
  const location = useLocation();
  return (
    <div className={styles.appheaderRoot}>
      <Header className={styles.appHeader}>
        <Left />
        <Right selectedKeys={[location.pathname]} />
      </Header>
    </div>

  )

}

export default WebHeader