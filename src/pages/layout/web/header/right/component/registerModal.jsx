/*
 * @Author: cyong
 * @Date: 2022-01-04 16:13:42
 * @LastEditors: cyong
 * @LastEditTime: 2022-01-04 17:27:16
 * @FilePath: \view\src\pages\layout\web\header\right\component\registerModal.jsx
 * @Description: 注册的弹窗组件
 */

import React from 'react'
import { Button, Modal, Form, Input } from 'antd';

const registerModal = (props) => {
    const { visible, onCancelModal, onSubmit, type } = props;

    return (

        <Modal width={460} title={type} visible={visible} onCancel={onCancelModal} footer={null} onOk={onSubmit}>
            {/* <LoginModal> */}
            <Form
                layout='horizontal'

            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input placeholder='请输入用户名' />
                </Form.Item>
                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder='请输入密码' type='password' />
                </Form.Item>
                <Form.Item
                    label="确认密码"
                    name="repassword"
                    rules={[{ required: true, message: 'Please input your password again!' }]}
                >
                    <Input.Password placeholder='请再次输入密码' type='password' />
                </Form.Item>
                <Form.Item
                    label="邮箱"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email in right way!' }]}
                >
                    <Input placeholder='请输入邮箱' type='email' />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default registerModal
