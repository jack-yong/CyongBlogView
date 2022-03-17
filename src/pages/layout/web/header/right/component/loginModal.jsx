/*
 * @Author: cyong
 * @Date: 2022-01-04 15:14:46
 * @LastEditors: cyong
 * @LastEditTime: 2022-03-09 16:33:16
 * @FilePath: \view\src\pages\layout\web\header\right\component\loginModal.jsx
 * @Description: 登录的弹窗组件
 */

import React from 'react';
import { Button, Modal, Form, Input } from 'antd';
//下面的注释是使用styled-components的注释，这种用法是css in js
// import styled from 'styled-components';

// const LoginModal = styled.div`
//         .input1{
//             width:200px;
//         }

// `;
//控制文本框的布局
const FormItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
    }
}



const LoginModal = (props) => {
    const { visible, onCancelModal, onSubmit, type } = props;

    //通过 Form.useForm 对表单数据域进行交互
    const [form] = Form.useForm();

    async function onClickLoginButton() {
        //form.validateFields()返回的是promise对象,下面是promise.then的用法回调
        //再此处会对表单进行验证，若表单有错误会停止向下执行。
        await form.validateFields().then(values => {
            if (!values) {
                return;
            }
            onSubmit(values);
        })
            .catch(errorInfo => {
                console.log(errorInfo);
            })

    }

    return (
        <Modal width={460} title={type} visible={visible} onCancel={onCancelModal} footer={null} onOk={onSubmit}>
            {/* <LoginModal> */}
            <Form
                layout='horizontal'
                form={form}
                {...FormItemLayout}
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

                <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                    <Button type="primary" htmlType="submit"
                        onClick={onClickLoginButton}
                    >
                        登录
                    </Button>
                </Form.Item>
            </Form>
            {/* </LoginModal> */}
        </Modal>


    )
}

export default LoginModal
