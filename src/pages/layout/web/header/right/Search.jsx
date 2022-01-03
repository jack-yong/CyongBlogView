/*
 * @Author: cyong
 * @Date: 2022-01-03 17:43:35
 * @LastEditors: cyong
 * @LastEditTime: 2022-01-03 18:23:25
 * @FilePath: \view\src\pages\layout\web\header\right\Search.jsx
 * @Description: header组件中右边的search子组件
 */

import React ,{useState}from 'react'
import { Input,Space } from 'antd'
const { Search } = Input;
const onSearch = value => console.log(value)

const Searchinput = (props) => {

    return (
    <Space direction="vertical"  >
            <Search  placeholder='搜索文章' style={{ width: 300 }} onSearch={onSearch} enterButton className='search-bar' />
     </Space>
    )
}

export default Searchinput

