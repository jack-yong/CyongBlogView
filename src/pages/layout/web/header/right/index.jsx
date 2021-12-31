/*
 * @Author: cyong
 * @Date: 2021-12-21 16:28:20
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-31 18:37:35
 * @FilePath: \view\src\pages\layout\web\header\right\index.jsx
 * @Description: 存放header组件右侧的内部组件
 */

import React  from 'react'
import SvgIcon from '../../../../../components/SvgIcon'
import { Link, useLocation } from 'react-router-dom'
import { HomeOutlined ,TagsOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu} from 'antd'

const HeaderRight = () => {
    return (
        <div className='header-right '>
            <Menu  mode="horizontal" >
                    <Menu.Item key="home" icon={<HomeOutlined />}>
                        <Link to="/index">
                            首页
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="TagsOutlined" icon={<TagsOutlined />}>
                        <Link to="/tages">
                            标签
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="TagsOutlined" icon={<TagsOutlined />}>
                        <Link to="/tages">
                            标签
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="TagsOutlined" icon={<TagsOutlined />}>
                        <Link to="/tages">
                            标签
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="TagsOutlined" icon={<TagsOutlined />}>
                        <Link to="/tages">
                            标签
                        </Link>
                    </Menu.Item>
            </Menu>
        </div>
    )
}

export default HeaderRight


