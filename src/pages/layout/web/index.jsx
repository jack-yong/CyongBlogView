/*
 * @Author: cyong
 * @Date: 2021-12-19 20:15:54
 * @LastEditors: cyong
 * @LastEditTime: 2022-01-04 16:05:54
 * @FilePath: \view\src\pages\layout\web\index.jsx
 * @Description: 博客网站的主页面
 */
import '../../../styles/layout.less'
import React from 'react'
import { Layout, BackTop } from 'antd'
import Header from './header';
const { Content, Footer } = Layout;


const Layouts = (props) => {
    return (
        <Layout className='app-container'>
            <Header />
            <Layout>
                <Content style={{ textAlign: 'center' }}>Content</Content>
            </Layout>
            <Footer style={{ textAlign: 'center', background: '#fff' }}>
                cyong copyright
            </Footer>
            <BackTop />
        </Layout>
    )
}

export default Layouts
