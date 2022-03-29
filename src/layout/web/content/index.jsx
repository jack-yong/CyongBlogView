/*
 * @Author: cyong
 * @Date: 2022-03-20 12:37:24
 * @LastEditors: cyong
 * @LastEditTime: 2022-03-29 21:09:09
 * @FilePath: \view\src\layout\web\content\index.jsx
 * @Description: 主页的内容组件
 */

import React from 'react'
import { Layout } from 'antd'

const { Content } = Layout;

const AppMain = (props) => {
    const { className, children } = props
    return (
        <div className={className}>
            <Content >{children}</Content>

        </div>
    )
}

export default AppMain