/*
 * @Author: cyong
 * @Date: 2022-01-03 17:43:48
 * @LastEditors: cyong
 * @LastEditTime: 2022-01-03 20:40:44
 * @FilePath: \view\src\pages\layout\web\header\right\Userinfo.jsx
 * @Description:  header组件中右边的Userinfo子组件
 */

import React,{useState} from 'react'
import { Button,Modal,Form,Input} from 'antd'
const Userinfo = () => {
    const [visible,setVisible] = useState(false)
    const [type,setType] = useState('login')

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };

    return (
        <div className='header-button'>
            <Button
            ghost
            type='primary'
            size='small'
            style={{ marginRight: 20 }}
            key="login"
            onClick={e=>setVisible(true)}
            >
            登录
            </Button>
            <Button ghost type='danger' size='small' key="register" >
            注册
            </Button>
            <Modal width={460} title={type} visible={visible} onCancel={e => setVisible(false)} footer={null}>
                <Form
                layout='horizontal'
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input  placeholder='请输入用户名'/>
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password   placeholder='请输入密码' type='password'/>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                    登录
                    </Button>
                </Form.Item>
                </Form>
                </Modal>
        </div>
        
    )
}

export default Userinfo
