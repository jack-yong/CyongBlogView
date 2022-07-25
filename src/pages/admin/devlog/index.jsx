import React, { useState } from 'react';
import { message, Divider, Button, Tag } from 'antd';
import RegularTable from '@/components/RegularTable';
import axios from '@/utils/axios';
import url from '@/utils/url';
import SearchBar from '@/components/SearchBar';
import useAntdTable from '@/hooks/useAntdTable';
import ModifyDrawer from '@/components/ModifyDrawer';
import { drawerStyle, drawerItemStyle } from '@/config'
import styles from './index.module.less';
import {
    RedoOutlined,
    CheckOutlined,
    BugOutlined,
    RocketOutlined
} from '@ant-design/icons'

const DevLog = (props) => {
    const [isVisible, setisVisible] = useState(false);
    const [queryParams, setQueryParams] = useState({});
    const [drawerVisiable, setDrawerVisiable] = useState(false);
    const [drawerData, setDrawerData] = useState();
    const { tableProps, updateList, onSearch } = useAntdTable({
        requestUrl: url.devlogsearch,
        queryParams,
    });

    const modalconfig = [
        {
            name: 'devlogtitle',
            type: 'input',
            label: '日志标题',
            placeholder: '请输入日志标题',
            rules: [{ required: true, message: 'Please input your devlog title!' }]

        },
        {
            name: 'devlogtype',
            type: 'select',
            label: '日志类型',
            list: [
                {
                    key: 0,
                    value: 0,
                    title: '添加新功能'
                },
                {
                    key: 1,
                    value: 1,
                    title: '修复bug'
                },
                {
                    key: 2,
                    value: 2,
                    title: '项目重构'
                },
                {
                    key: 3,
                    value: 3,
                    title: '性能优化'
                },
            ],
            rules: [{ required: true, message: 'Please select your devlog type!' }]
        },
        {
            name: 'devlogcontent',
            type: 'textarea',
            label: '日志内容',
            placeholder: '请输入日志内容',
            rules: [{ required: true, message: 'Please input your devlog content!' }]

        },

    ];


    const mycolumns = [
        {
            title: '日志标题',
            width: 100,
            dataIndex: 'devlogtitle',
            key: 'devlogtitle',
            sorter: true,
        },
        {
            title: '日志内容',
            width: 300,
            dataIndex: 'devlogcontent',
            key: 'devlogcontent',
            render: (text, record) => {
                // console.log(text,'texttext');
                return (
                    <div className={styles.mycontent}>{text}</div>
                )
            }
        },

        {
            title: '日志类型',
            width: 100,
            dataIndex: 'devlogtype',
            key: 'devlogtype',
            render: (text, record) => {
                let linkname = '';
                let color = '';
                let icon = '';
                switch (text) {
                    case 0: case '0':
                        linkname = '添加新功能';
                        color = 'success';
                        icon = <CheckOutlined />;
                        break;
                    case 1: case '1':
                        linkname = '修复bug';
                        color = 'error';
                        icon = <BugOutlined />;
                        break;
                    case 2: case '2':
                        linkname = '项目重构';
                        color = 'processing';
                        icon = < RedoOutlined />;
                        break;
                    case 3: case '3':
                        linkname = '性能优化';
                        color = 'warning';
                        icon = <RocketOutlined />;
                        break;
                    default:
                        break;
                }
                return (
                    <Tag icon={icon} color={color}>
                        {linkname}
                    </Tag>
                )
            },
            filters: [
                {
                    text: '添加新功能',
                    value: 0,
                },
                {
                    text: '修复bug',
                    value: 1,
                },
                {
                    text: '项目重构',
                    value: 2,
                },
                {
                    text: '性能优化',
                    value: 3,
                },
            ],

        },
        {
            title: '创建日期',
            width: 100,
            dataIndex: 'devlogCreateTime',
            key: 'devlogCreateTime',
            sorter: true,
        },
        {
            title: '操作',
            key: 'operation',
            fixed: 'right',
            width: 150,
            render: (text, record) => <><Button type="primary" size="small" className={styles.button} onClick={() => { modifyButton(record) }}>修改</Button><Button type="primary" size="small" danger className={styles.button}>删除</Button> </>,
        },
    ];

    const devlogSearch = (searchkey) => {
        setQueryParams({ devlogkey: searchkey });
        onSearch({ ...queryParams, devlogkey: searchkey })
    }


    const devlogAdd = (params) => {
        updateList(() => {
            axios.post(url.devlogadd, params).then(res => {
                const { status } = res;
                if (status === 0 || status === '0') {
                    message.success('添加日志成功！');
                }
                else {
                    message.error('错误码' + status + ':' + res.message);
                }
                setisVisible(false);
            }).catch(error => {
                console.log('add devlog error', error);
            })
        })
    }




    return (
        <>
            <SearchBar title={"增加新日志"} searchService={devlogSearch} modalConfData={modalconfig} addService={devlogAdd} visible={isVisible} setVisible={setisVisible} />
            <Divider />
            <RegularTable tableProps={tableProps} columns={mycolumns} isopt={true} align={true} />
            <ModifyDrawer
                title={'开发日志修改'}
                buttonName={'修改'}
                visible={drawerVisiable}
                onClose={onCloseDrawer}
                drawerConfData={modalconfig}
                drawerData={drawerData}
                drawerStyle={drawerStyle}
                drawerItemStyle={drawerItemStyle}
                setDrawerVisible={setDrawerVisiable}
                ModifyService={() => {
                    console.log('modify drawer');
                }}
            />
        </>
    );

    //关闭当前抽屉
    function onCloseDrawer() {
        setDrawerData(undefined); //关闭抽屉清空数据
        setDrawerVisiable(false);
    }

    function modifyButton(record) {
        setDrawerData(record);
        setDrawerVisiable(true);
    }
}


export default DevLog;