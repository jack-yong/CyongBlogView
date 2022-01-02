/*
 * @Author: cyong
 * @Date: 2021-12-21 16:28:20
 * @LastEditors: cyong
 * @LastEditTime: 2022-01-02 19:43:34
 * @FilePath: \view\src\pages\layout\web\header\right\index.jsx
 * @Description: 存放header组件右侧的内部组件
 */

import React  from 'react'
import SvgIcon from '../../../../../components/SvgIcon'
import { Link, useLocation } from 'react-router-dom'
import { HomeOutlined ,TagsOutlined, FolderOutlined, MessageOutlined ,PushpinOutlined,LinkOutlined} from '@ant-design/icons';
import { Button,Menu,Input,Space } from 'antd'

const { Search } = Input;

const onSearch = value => console.log(value)

const HeaderRight = (props) => {
    
    return (
        <div className='header-right '>
            <Space direction="vertical"  >
                <Search  placeholder='搜索文章' style={{ width: 300 }} onSearch={onSearch} enterButton className='search-bar' />
             </Space>
            <Menu  mode="horizontal" className='header-navbar'>
                    <Menu.Item key="home" icon={<HomeOutlined />}>
                        <Link to="/index">
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
            <div className='header-button'>
            <Button
              ghost
              type='primary'
              size='small'
              style={{ marginRight: 20 }}
              >
              登录
            </Button>
            <Button ghost type='danger' size='small' >
              注册
            </Button>
            </div>
        </div>
    )
}

export default HeaderRight


