/*
 * @Author: cyong
 * @Date: 2021-12-19 20:15:54
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-19 21:38:50
 * @FilePath: \view\src\pages\layout\web\index.jsx
 * @Description: 博客网站的主页面
 */

import React, { Component } from 'react';
import {Layout,BackTop,Row, Col,} from 'antd'
const { Content, Footer, Sider } = Layout;

class Layouts extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <Layout >
                <Content>主页的相关的内容</Content>
                <Footer style={{ textAlign: 'center', background: '#fff' }}>
            cyong copyright
            </Footer>
            <BackTop />
            </Layout>
        );
    }
}
 
export default Layouts;