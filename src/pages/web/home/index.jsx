/*
 * @Author: cyong
 * @Date: 2021-12-11 16:29:34
 * @LastEditors: cyong
 * @LastEditTime: 2022-07-22 20:38:31
 * @FilePath: \view\src\pages\web\home\index.jsx
 * @Description: home页面
 */
import React from 'react';
// import { Spin } from 'antd';
import styles from './index.module.less';
import Aside from './Aside';
import Section from './Section';
const Home = (props) => {
    return (
        <>
            <div className={styles.body}>
                <Section />
                <Aside />
            </div>
        </ >
    )
}

export default Home