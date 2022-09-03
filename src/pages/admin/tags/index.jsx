import React, { useState } from 'react';
import { message, Divider, Button, Tag } from 'antd';
import RegularTable from '@/components/RegularTable';
import SearchBar from '@/components/SearchBar';
// import modalconfig from './modalconfig';
import axios from '@/utils/axios';
import url from '@/utils/url';
// import mycolumns from './tagcolumns';
import ModifyDrawer from '@/components/ModifyDrawer';
import { drawerStyle, drawerItemStyle } from '@/config';
import styles from './index.module.less';
import useAntdTable from '@/hooks/useAntdTable';

const TagManger = (props) => {
    const [visible, setVisible] = useState(false);
    const [queryParams, setQueryParams] = useState({});
    const [modifyStatus, setModifyStatus] = useState(false);
    const [drawerData, setDrawerData] = useState();
    const { tableProps, updateList, onSearch } = useAntdTable({
        requestUrl: url.tagsearch,
        queryParams,
    })

    const modalconfig = [
        {
            name: 'tagname',
            type: 'input',
            label: '标签名称',
            placeholder: '请输入标签名',
            rules: [{ required: true, message: 'Please input your tagname!' }]
        },
        {
            name: 'tagColor',
            type: 'colorInput',
            label: '标签颜色',
            placeholder: '请选择标签颜色',
            rules: [{ required: true, message: 'Please input your tagColor!' }]
        },

    ];

    const mycolumns = [
        {
            title: '标签名称',
            width: 100,
            dataIndex: 'tagname',
            key: 'tagname',
            sorter: true,
        },
        {
            title: '创建日期',
            width: 100,
            dataIndex: 'createTime',
            key: 'createTime',
            sorter: true,
        },
        {
            title: '标签颜色',
            width: 100,
            dataIndex: 'tagColor',
            key: 'tagColor',
            render: (text, record) => {
                return (
                    <Tag color={text} >{record.tagname}</Tag>
                )
            },
        },
        {
            title: '标签状态',
            width: 100,
            dataIndex: 'isdeleted',
            key: 'isdeleted',
            filters: [
                {
                    text: '可用',
                    value: 0,
                },
                {
                    text: '不可用',
                    value: 1,
                },
            ],
            render: (text) => {
                if (text === 0 || text === '0') {
                    return '可用';
                }
                else {
                    return '不可用'
                }
            }
        },

        {
            title: '操作',
            width: 100,
            key: 'operation',
            fixed: 'right',
            render: (text, record) => <><Button type="primary" size="small" className={styles.button} onClick={() => modifyButton(record)}>修改</Button><Button type="primary" size="small" danger className={styles.button}>删除</Button> </>,
        },
    ]

    const tagSearch = (searchname) => {
        // console.log(searchname, "ssss");
        setQueryParams({ tagName: searchname });
        onSearch({ ...queryParams, tagName: searchname })
    }
    const tagAdd = (params) => {
        // console.log(params);
        updateList(() => {
            axios.post(url.tagadd, params).then(res => {
                const { status } = res;
                if (status === 0 || status === '0') {
                    message.success('添加标签成功！');
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
            <SearchBar title={"增加新标签"} searchService={tagSearch} modalConfData={modalconfig} addService={tagAdd} visible={visible} setVisible={setVisible} />
            <Divider />
            <RegularTable tableProps={tableProps} columns={mycolumns} isopt={true} align={true} />
            <ModifyDrawer
                title={'标签内容修改'}
                buttonName={'修改'}
                visible={modifyStatus}
                onClose={onCloseDrawer}
                drawerConfData={modalconfig}
                drawerData={drawerData}
                drawerStyle={drawerStyle}
                drawerItemStyle={drawerItemStyle}
                setDrawerVisible={setModifyStatus}
                ModifyService={() => {
                    console.log('modify drawer');
                }}
            />
        </>
    )

    //关闭当前抽屉
    function onCloseDrawer() {
        setDrawerData(undefined); //关闭抽屉清空数据
        setModifyStatus(false);
    }

    function modifyButton(record) {
        setDrawerData(record);
        setModifyStatus(true);
    }
}

export default TagManger;