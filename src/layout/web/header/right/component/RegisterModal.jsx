/*
 * @Author: cyong
 * @Date: 2022-01-04 16:13:42
 * @LastEditors: cyong
 * @LastEditTime: 2022-06-17 18:18:51
 * @FilePath: \view\src\layout\web\header\right\component\RegisterModal.jsx
 * @Description: 注册的弹窗组件
 */

import React from 'react'
import { Button, Modal, Form, Input } from 'antd';

const FormItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
    }
}

const RegisterModal = (props) => {
    const { visible, onCancelModal, onSubmit, type } = props;

    //通过 Form.useForm 对表单数据域进行交互
    const [form] = Form.useForm();


    //返回验证的数据进行注册
    const onRegisterSubmit = async () => {
        await form.validateFields().then(values => {
            if (!values) {
                return
            }
            onSubmit(values)
        }).catch(errorInfo => {
            console.log(errorInfo);
        })
    }

    const isTel = (phone) => {
        var reg = /^1[34578]\d{9}$/;
        if (!reg.test(phone)) {
            return false
        }
        return true
    }
    return (

        <Modal width={460} title={type} visible={visible} onCancel={onCancelModal} footer={null} onOk={onSubmit}>
            {/* <LoginModal> */}
            <Form
                layout='horizontal'
                {...FormItemLayout}
                form={form}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[
                        { required: true, message: 'Please input your username!' }
                        ,
                        {
                            // 下面是组件的验证函数
                            validator: (_, value) =>
                                value.replace(/\s+/g, "") ? Promise.resolve() : Promise.reject(new Error('username should not only have blank')),
                        },]}
                >
                    <Input placeholder='请输入用户名' />
                </Form.Item>
                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    hasFeedback
                >
                    <Input.Password placeholder='请输入密码' type='password' />
                </Form.Item>
                <Form.Item
                    label="确认密码"
                    name="repassword"
                    rules={[
                        {
                            required: true, message: 'Please input your password again!'
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder='请再次输入密码' type='password' />
                </Form.Item>
                <Form.Item
                    label="邮箱"
                    name="email"
                    rules={[{
                        required: true, message: 'Please input your email in right way!',
                    }, {
                        type: 'email',
                    },
                    ]}
                    hasFeedback
                >
                    <Input placeholder='请输入邮箱' />
                </Form.Item>
                <Form.Item
                    label="手机号"
                    name="phone"
                    rules={[{
                        required: true, message: 'Please input your phone number!',
                    }, {
                        // 下面是组件的验证函数
                        validator: (_, value) =>
                            isTel(value) ? Promise.resolve() : Promise.reject(new Error('Please input your phone in right way!')),
                    },
                    ]}
                    hasFeedback
                >
                    <Input placeholder='请输入手机号' />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                    <Button type="primary" htmlType="submit" onClick={onRegisterSubmit}>
                        注册
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default RegisterModal
