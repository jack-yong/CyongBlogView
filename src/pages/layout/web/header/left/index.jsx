/*
 * @Author: cyong
 * @Date: 2021-12-21 16:17:48
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-30 21:28:14
 * @FilePath: \view\src\pages\layout\web\header\left\index.jsx
 * @Description: header组件的左侧的内部组件
 */


import React from 'react'
import SvgIcon from '../../../../../components/SvgIcon'

const HeaderLeft = () => {
    return (
        <div className='header-left'>  
             <SvgIcon type='icon-blog' style={{  width: 40, height: 25, transform: 'translateY(6px)' }} />
             <span className='blog-name'>cyong的博客</span>
        </div>
    )
}

export default HeaderLeft

