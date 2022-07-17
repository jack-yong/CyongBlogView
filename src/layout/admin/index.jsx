/*
 * @Author: cyong
 * @Date: 2022-03-30 19:06:26
 * @LastEditors: cyong
 * @LastEditTime: 2022-07-15 19:32:10
 * @FilePath: \view\src\layout\admin\index.jsx
 * @Description: 管理端头部组件
 */

import React from 'react'
import './index.less'
import { useLocation } from 'react-router-dom'
import { Layout, Button } from 'antd'
import AdminSideBar from './siderbar'
import AdminHeader from './header'

const { Sider, Header, Content, Footer } = Layout

const AdminLayout = (props) => {
    const location = useLocation()
    return (
        <Layout className='admin-container'>

            <Header className='admin-header'>
                <AdminHeader />
            </Header>

            <Layout>
                <Sider width={200} className='admin-sider' >
                    <AdminSideBar selectedKeys={[location.pathname]} />
                </Sider>
                <Layout className='admin-content-wrap'>

                    <Content className='admin-content'>
                        {props.children}
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        cyongBlog后台管理界面 <Button type="link">github</Button>
                    </Footer>
                </Layout>

            </Layout>
        </Layout>
    )
}

export default AdminLayout