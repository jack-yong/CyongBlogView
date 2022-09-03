/*
 * @Author: cyong
 * @Date: 2022-04-05 17:15:46
 * @LastEditors: cyong
 * @LastEditTime: 2022-07-11 20:46:45
 * @FilePath: \view\src\pages\admin\user\index.jsx
 * @Description: 用户管理的组件
 */

import React, { useState } from 'react'
import { message, Divider, Button, Image } from 'antd'
import RegularTable from '@/components/RegularTable'
import SearchBar from '@/components/SearchBar'
// import modalconfig from './modalconfig'
import axios from '@/utils/axios'
import url from '@/utils/url';
// import mycolumns from './usercolumns';
import useAntdTable from '@/hooks/useAntdTable';
import { isTel } from '@/utils';
import styles from './index.module.less'



const AdminUser = (props) => {

    const [visible, setVisible] = useState(false);
    const [queryParams, setQueryParams] = useState({});


    const modalconfig = [
        {
            name: 'username',
            type: 'input',
            label: '用户名',
            placeholder: '请输入用户名',
            rules: [
                {
                    required: true,
                    message: 'Please input your username!'
                },
                {
                    // 下面是组件的验证函数
                    validator: (_, value) =>
                        value.replace(/\s+/g, "") ? Promise.resolve() : Promise.reject(new Error('username should not only have blank')),
                }
            ]
        },
        {
            name: 'password',
            type: 'input',
            label: '密码',
            placeholder: '请输入密码',
            rules: [{ required: true, message: 'Please input your password!' }]
        },
        {
            name: 'repassword',
            type: 'input',
            label: '确认密码',
            placeholder: '请再次输入密码',
            rules: [
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
            ]
        },
        {
            name: 'email',
            type: 'input',
            label: '邮箱',
            placeholder: '请输入邮箱',
            rules: [{
                required: true, message: 'Please input your email in right way!',
            }, {
                type: 'email',
            },
            ]
        },
        {
            name: 'phone',
            type: 'input',
            label: '手机号',
            placeholder: '请输入手机号',
            rules: [{
                required: true, message: 'Please input your phone number!',
            }, {
                // 下面是组件的验证函数
                validator: (_, value) =>
                    isTel(value) ? Promise.resolve() : Promise.reject(new Error('Please input your phone in right way!')),
            },
            ]
        }
    ];

    const mycolumns = [
        {
            title: '用户头像',
            width: 100,
            dataIndex: 'imageurl',
            key: 'imageurl',
            render: (text) => {
                return (
                    <Image
                        width={50}
                        height={50}
                        src={text}
                    />
                )
            }
        },
        {
            title: '用户名',
            width: 100,
            dataIndex: 'username',
            key: 'username',
            sorter: true,

        },
        {
            title: '用户密码',
            width: 100,
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: '用户邮箱',
            width: 100,
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: '用户手机号',
            width: 100,
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: '用户最近登录时间',
            width: 100,
            dataIndex: 'recentlandtime',
            key: 'recentlandtime',
            sorter: true,
        },
        {
            title: '用户角色',
            width: 100,
            dataIndex: 'role',
            key: 'role',
            render: (text) => {
                if (text === 'user') {
                    return '普通用户';
                }
                else {
                    return '管理员'
                }
            },
            filters: [
                {
                    text: '普通用户',
                    value: 'user',
                },
                {
                    text: '管理员',
                    value: 'admin',
                },
            ],
        },
        {
            title: '操作',
            width: 100,
            key: 'operation',
            fixed: 'right',
            render: () => <><Button type="primary" size="small" className={styles.button}>修改</Button><Button type="primary" size="small" danger className={styles.button}>删除</Button> </>,
        },
    ]

    const { tableProps, updateList, onSearch } = useAntdTable({
        requestUrl: url.userSearch,
        queryParams,
    })

    const userSearch = (searchname) => {
        // console.log(searchname, "ssss");
        setQueryParams({ searchName: searchname });
        onSearch({ ...queryParams, searchName: searchname })
    }

    const userAdd = (params) => {
        // console.log(params);
        updateList(() => {
            axios.post(url.userregister, params).then(res => {
                const { status } = res;
                if (status === 0 || status === '0') {
                    message.success('添加用户成功！');
                }
                else {
                    message.error('错误码' + status + ':' + res.message);
                }
                setVisible(false);
            }).catch(error => {
                console.log('userregister error', error);
            })
        })
    }



    return (
        <>
            <SearchBar title={"增加新用户"} searchService={userSearch} modalConfData={modalconfig} addService={userAdd} visible={visible} setVisible={setVisible} />
            <Divider />
            <RegularTable tableProps={tableProps} columns={mycolumns} isopt={true} align={true} />

        </>
    )
}

export default AdminUser