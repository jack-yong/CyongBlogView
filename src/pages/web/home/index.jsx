/*
 * @Author: cyong
 * @Date: 2021-12-11 16:29:34
 * @LastEditors: cyong
 * @LastEditTime: 2022-04-06 20:45:33
 * @FilePath: \view\src\pages\web\home\index.jsx
 * @Description: home页面
 */
import React from 'react'
import './index.less'

import { Spin } from 'antd'

//引入对应的组件
// import ArticleList from './ArticleList'


const Home = (props) => {

    const loading = "1"

    return (

        <Spin tip='Loading...' spinning={loading}>
            <div className='app-home'>
                <div className='recent-posts'>
                    {/* <ArticleList list={list} /> */}
                </div>
                <div className='aside-content'>

                </div>

            </div>
        </Spin>
    )
}

export default Home