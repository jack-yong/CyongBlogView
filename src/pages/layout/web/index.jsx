/*
 * @Author: cyong
 * @Date: 2021-12-19 20:15:54
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-20 21:23:21
 * @FilePath: \view\src\pages\layout\web\index.jsx
 * @Description: 博客网站的主页面
 */
import '../../../styles/layout.less'
import React, { Component } from 'react';
import {Layout,BackTop,Row, Col,} from 'antd'
import { Header } from 'antd/lib/layout/layout';
const { Content, Footer, Sider } = Layout;


class Layouts extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <Layout className='app-container'>
            <Header/>
            <Footer style={{ textAlign: 'center', background: '#fff' }}>
            cyong copyright
            </Footer>
            <BackTop />
            </Layout>
        );
    }
}
 
export default Layouts;