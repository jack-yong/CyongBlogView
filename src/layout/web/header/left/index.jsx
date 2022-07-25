/*
 * @Author: cyong
 * @Date: 2021-12-21 16:17:48
 * @LastEditors: cyong
 * @LastEditTime: 2022-07-23 17:32:54
 * @FilePath: \view\src\layout\web\header\left\index.jsx
 * @Description: header组件的左侧的内部组件
 */


import React from 'react';
import SvgIcon from '@/components/SvgIcon';
import { NavLink as Link } from 'react-router-dom';
import styles from './index.module.less';

const HeaderLeft = (props) => {
    return (
        <Link to="/" key='/'>
            <div className={styles.headerLeft}>
                <SvgIcon type='icon-blog' style={{ width: 40, height: 25, transform: 'translateY(6px)' }} />
                <span >cyong的博客</span>
            </div>
        </Link>
    )
}

export default HeaderLeft

