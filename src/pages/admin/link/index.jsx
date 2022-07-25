import React, { useState } from 'react'
import { message, Divider, Button, Tag, Image } from 'antd';
import RegularTable from '@/components/RegularTable';
import axios from '@/utils/axios';
import url from '@/utils/url';
import SearchBar from '@/components/SearchBar';
import useAntdTable from '@/hooks/useAntdTable';
import Href from '@/components/Href';
import styles from './index.module.less';
const Link = (props) => {
    const [visible, setVisible] = useState(false);
    const [queryParams, setQueryParams] = useState({});

    const { tableProps, updateList, onSearch } = useAntdTable({
        requestUrl: url.linksearch,
        queryParams,
    });


    const modalconfig = [
        {
            name: 'linkImage',
            type: 'input',
            label: '链接封面地址',
            placeholder: '请输入链接地址',
        },
        {
            name: 'linktype',
            type: 'select',
            label: '链接类型',
            list: [
                {
                    key: 0,
                    value: 0,
                    title: '个人网站'
                }
                , {
                    key: 1,
                    value: 1,
                    title: '推荐网站'
                }, {
                    key: 2,
                    value: 2,
                    title: '小工具'
                }
            ],
            rules: [{ required: true, message: 'Please select your link type!' }]
        },
        {
            name: 'linktitle',
            type: 'input',
            label: '链接名称',
            placeholder: '请输入链接名称',
            rules: [{ required: true, message: 'Please input your link name!' }]
        },
        {
            name: 'linkurl',
            type: 'input',
            label: '链接地址',
            placeholder: '请输入链接地址',
            rules: [{ required: true, message: 'Please input your link url!' }]
        },
        {
            name: 'linkdesc',
            type: 'textarea',
            label: '链接描述',
            placeholder: '请输入链接描述',
            rules: [{ required: true, message: 'Please input your link desc!' }]
        },

    ];


    const mycolumns = [
        {
            title: '链接图片',
            width: 100,
            dataIndex: 'linkimg',
            key: 'linkimg',
            render: (text, record) => {
                if (text !== '') {
                    return (
                        <Image
                            width={50}
                            height={50}
                            src={text}
                        />
                    )

                }

            }
        },
        {
            title: '链接名称',
            width: 100,
            dataIndex: 'linktitle',
            key: 'linktitle',
            sorter: true,
        },
        {
            title: '链接描述',
            width: 300,
            dataIndex: 'linkdesc',
            key: 'linkdesc',
        },
        {
            title: '链接地址',
            width: 200,
            dataIndex: 'linkurl',
            key: 'linkurl',
            render: (text, record) =>
            (
                <Href href={text} />
            )
        },
        {
            title: '链接类型',
            width: 100,
            dataIndex: 'linktype',
            key: 'linktype',
            render: (text, record) => {
                let linkcolor = '';
                let linkname = '';
                switch (text) {
                    case 0: case '0':
                        linkcolor = 'gold';
                        linkname = '友链';
                        break;
                    case 1: case '1':
                        linkcolor = 'cyan';
                        linkname = '推荐网站';
                        break;
                    case 2: case '2':
                        linkcolor = 'purple';
                        linkname = '小工具';
                        break;
                    default:
                        break;
                }
                return (
                    <Tag color={linkcolor} >{linkname}</Tag>
                )
            },
            filters: [
                {
                    text: '友链',
                    value: 0,
                },
                {
                    text: '推荐网站',
                    value: 1,
                },
                {
                    text: '小工具',
                    value: 2,
                },
            ],

        },
        {
            title: '创建日期',
            width: 100,
            dataIndex: 'linkCreateTime',
            key: 'linkCreateTime',
            sorter: true,
        },
        {
            title: '操作',
            key: 'operation',
            fixed: 'right',
            width: 150,
            render: () => <><Button type="primary" size="small" className={styles.button}>修改</Button><Button type="primary" size="small" danger className={styles.button}>删除</Button> </>,
        },
    ];

    const linkSearch = (searchkey) => {
        setQueryParams({ linkkey: searchkey });
        onSearch({ ...queryParams, linkkey: searchkey })
    }



    const linkAdd = (params) => {
        updateList(() => {
            axios.post(url.linkadd, params).then(res => {
                const { status } = res;
                if (status === 0 || status === '0') {
                    message.success('添加链接成功！');
                }
                else {
                    message.error('错误码' + status + ':' + res.message);
                }
                setVisible(false);
            }).catch(error => {
                console.log('add tag error', error);
            })
        })
    }

    return (
        <>
            <SearchBar title={"增加新链接"} searchService={linkSearch} modalConfData={modalconfig} addService={linkAdd} visible={visible} setVisible={setVisible} />
            <Divider />
            <RegularTable tableProps={tableProps} columns={mycolumns} isopt={true} align={true} />
        </>
    )
}

export default Link;