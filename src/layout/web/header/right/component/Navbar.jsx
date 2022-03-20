/*
 * @Author: cyong
 * @Date: 2022-01-03 17:44:16
 * @LastEditors: cyong
 * @LastEditTime: 2022-03-20 14:52:50
 * @FilePath: \view\src\layout\web\header\right\component\Navbar.jsx
 * @Description: header组件中右边的navbar子组件
 */

import React from 'react'
import { HomeOutlined, TagsOutlined, FolderOutlined, MessageOutlined, PushpinOutlined, LinkOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'


const Navbar = (props) => {
    return (
        <Menu mode="horizontal" className='header-navbar'>
            <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">
                    首页
                </Link>
            </Menu.Item>
            <Menu.Item key="FolderOutlined" icon={<FolderOutlined />}>
                <Link to="/tages">
                    分类
                </Link>
            </Menu.Item>
            <Menu.Item key="TagsOutlined" icon={<TagsOutlined />}>
                <Link to="/tages">
                    标签
                </Link>
            </Menu.Item>
            <Menu.Item key="PushpinOutlined" icon={<PushpinOutlined />}>
                <Link to="/tages">
                    归档
                </Link>
            </Menu.Item>
            <Menu.Item key="LinkOutlined" icon={<LinkOutlined />}>
                <Link to="/tages">
                    友链
                </Link>
            </Menu.Item>
            <Menu.Item key="MessageOutlined" icon={<MessageOutlined />}>
                <Link to="/tages">
                    留言板
                </Link>
            </Menu.Item>
        </Menu>
    )
}

export default Navbar

