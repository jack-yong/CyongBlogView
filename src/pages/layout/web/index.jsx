/*
 * @Author: cyong
 * @Date: 2021-12-19 20:15:54
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-30 17:40:18
 * @FilePath: \view\src\pages\layout\web\index.jsx
 * @Description: 博客网站的主页面
 */
import '../../../styles/layout.less'
import React, { useEffect } from 'react'
import {Layout,BackTop} from 'antd'
import  Header from './header'; 
const { Content, Footer, Sider } = Layout;


const Layouts = (props) => {
    return (
        <Layout className='app-container'>
            <Header/>
            <Layout>
                <Sider>Sider</Sider>
                <Content>Content</Content>
            </Layout>
            <Footer style={{ textAlign: 'center', background: '#fff' }}>
            cyong copyright
            </Footer>
            <BackTop />
        </Layout>
    )
}

export default Layouts
