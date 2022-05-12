/*
 * @Author: cyong
 * @Date: 2022-03-30 19:10:06
 * @LastEditors: cyong
 * @LastEditTime: 2022-05-11 20:06:15
 * @FilePath: \view\src\layout\admin\header\index.jsx
 * @Description: 管理端头部组件
 */

import React from 'react'
import { Dropdown, Menu } from 'antd'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logout } from '@/redux/actions/useraction'


import Icon from '@ant-design/icons';

const Adminheader = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const menu = (
        <Menu className='menu'>
            <Menu.Item>
                <span onClick={e => history.push('/')}>
                    返回主页
                </span>
            </Menu.Item>
            <Menu.Item>
                <span
                    onClick={e => {
                        dispatch(logout())
                        history.push('/')
                    }}>
                    退出登录
                </span>
            </Menu.Item>
        </Menu>
    )

    return (
        <>
            <div>
                {/* <img src={logo} alt='pvmed' /> */}
                <span className='header-title'>CyBlog Manager</span>
                <Dropdown overlay={menu} className='header-dropdown'>
                    <div className='ant-dropdown-link'>
                        {"admin"} <Icon type='down' />
                    </div>
                </Dropdown>
            </div>
        </>
    )
}

export default Adminheader