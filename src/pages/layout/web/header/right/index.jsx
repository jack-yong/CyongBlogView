/*
 * @Author: cyong
 * @Date: 2021-12-21 16:28:20
 * @LastEditors: cyong
 * @LastEditTime: 2022-01-03 18:21:43
 * @FilePath: \view\src\pages\layout\web\header\right\index.jsx
 * @Description: 存放header组件右侧的内部组件
 */

import React  from 'react'
import Searchinput from './Search'
import Navbar from './Navbar'
import Userinfo from './Userinfo'
const HeaderRight = (props) => {
    
    return (
        <div className='header-right '>
            <Searchinput/>
            <Navbar/>
            <Userinfo/>
        </div>
    )
}

export default HeaderRight


