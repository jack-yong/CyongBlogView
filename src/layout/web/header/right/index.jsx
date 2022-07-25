/*
 * @Author: cyong
 * @Date: 2021-12-21 16:28:20
 * @LastEditors: cyong
 * @LastEditTime: 2022-07-22 12:35:10
 * @FilePath: \view\src\layout\web\header\right\index.jsx
 * @Description: 存放header组件右侧的内部组件
 */

import React from 'react';
// import Searchinput from './component/Search';
import { Menu } from 'antd';
// import Navbar from './component/Navbar';
import Userinfo from './Userinfo';
import menu from './menu';
// import { getMenuOpenKeys } from '@/utils/index';
import styles from './index.module.less';
const HeaderRight = (props) => {
    return (
        <div className={styles.headerRight}>
            <Menu
                mode="horizontal"
                className={styles.headerNavbar}
                selectedKeys={props.selectedKeys}
                items={menu}

            />
            <Userinfo />
        </div>
    )
}

export default HeaderRight


