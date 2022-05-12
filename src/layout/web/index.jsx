/*
 * @Author: cyong
 * @Date: 2021-12-19 20:15:54
 * @LastEditors: cyong
 * @LastEditTime: 2022-03-30 14:31:24
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
                <PmRibbon clickChangeDom={document} ribbonWidth="60" drawSite={[700, 500]} canClickChange="false" />
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
