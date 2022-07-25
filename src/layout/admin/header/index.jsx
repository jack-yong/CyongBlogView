/*
 * @Author: cyong
 * @Date: 2022-03-30 19:10:06
 * @LastEditors: cyong
 * @LastEditTime: 2022-07-21 16:07:01
 * @FilePath: \view\src\layout\admin\header\index.jsx
 * @Description: 管理端头部组件
 */

import React from 'react'
import { Dropdown, Menu } from 'antd'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logout } from '@/redux/actions/useraction'
import SvgIcon from '@/components/SvgIcon'

import { HomeOutlined } from '@ant-design/icons';

const Adminheader = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const menu = (
        <Menu className='menu'
            items={[
                {
                    key: '/backhome',
                    label: <>
                        <span onClick={e => history.push('/')}>
                            返回主页
                        </span>
                    </>
                },
                {
                    key: '/logout',
                    label: <>
                        <span
                            onClick={e => {
                                dispatch(logout())
                                history.push('/')
                            }}>
                            退出登录
                        </span>
                    </>
                }
            ]}
        >

        </Menu>
    )

    return (
        <>
            <div>
                <SvgIcon type='icon-blog' style={{ width: 30, height: 30, transform: 'translateY(10px)' }} />
                <span className='header-title'>CyBlog后台管理</span>
                <Dropdown overlay={menu} className='header-dropdown'>
                    <div className='ant-dropdown-link'>
                        <HomeOutlined style={{ paddingRight: '30px', fontSize: "20px" }} />
                    </div>
                </Dropdown>
            </div>
        </>
    )
}

export default Adminheader