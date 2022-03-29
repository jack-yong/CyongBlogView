/*
 * @Author: cyong
 * @Date: 2021-12-19 20:15:54
 * @LastEditors: cyong
 * @LastEditTime: 2022-03-29 21:58:08
 * @FilePath: \view\src\layout\web\index.jsx
 * @Description: 博客网站的主页面
 */
import '../../styles/layout.less'
import React from 'react'
import { Layout, BackTop } from 'antd'

//引入自定义组件
import Header from './header';
import Content from './content'
import PmRibbon from 'pm-ribbon'


const { Footer } = Layout;


const Layouts = (props) => {
    return (
        <>

            <Layout className='app-container'>

                <Header className='app-header' />
                <PmRibbon clickChangeDom={document} ribbonWidth="120" globalAlpha="0.2" />
                <Content {...props} className='app-content' />
                <Footer style={{ textAlign: 'center', background: '#fff' }}>
                    cyong copyright
                </Footer>
                <BackTop />

            </Layout>

        </>

    )
}

export default Layouts
