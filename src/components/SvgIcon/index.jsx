/*
 * @Author: cyong
 * @Date: 2021-12-21 21:11:55
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-29 21:34:50
 * @FilePath: \view\src\components\SvgIcon\index.jsx
 * @Description: 个人博客的图标svg组件
 */

import React  from 'react'


const SvgIcon = props => {
    return (
    <svg className={`svg-icon ${props.className}`} aria-hidden='true' style={props.style}>
     
    </svg>
    )
}

export default SvgIcon
