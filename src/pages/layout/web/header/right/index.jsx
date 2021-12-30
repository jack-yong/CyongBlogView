/*
 * @Author: cyong
 * @Date: 2021-12-21 16:28:20
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-30 22:07:45
 * @FilePath: \view\src\pages\layout\web\header\right\index.jsx
 * @Description: 存放header组件右侧的内部组件
 */

import React  from 'react'
import SvgIcon from '../../../../../components/SvgIcon'
import { Link, useLocation } from 'react-router-dom'
import narbarinfo from './narbarinfo'
import { Menu, Icon } from 'antd'

const HeaderRight = () => {
    return (
        <div className='header-right '>
            <Menu  mode="horizontal">
                {
                    narbarinfo.map( nav=>{
                        <Menu.Item key={nav.link} icon={nav.icon}>
                        <Link to={nav.link}>
                          <span >{nav.title}</span>
                        </Link>
                      </Menu.Item>
                    })
                }
            </Menu>
        </div>
    )
}

export default HeaderRight


