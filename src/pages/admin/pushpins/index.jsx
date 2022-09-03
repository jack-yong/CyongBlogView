import React, { useState } from 'react'
import { message, Divider, Button } from 'antd';
import RegularTable from '@/components/RegularTable';
import axios from '@/utils/axios';
import url from '@/utils/url';
import SearchBar from '@/components/SearchBar';
import useAntdTable from '@/hooks/useAntdTable';
import ModifyDrawer from '@/components/ModifyDrawer';
import { drawerStyle, drawerItemStyle } from '@/config';
import styles from './index.module.less';

const Pushpins = (props) => {
    const [isVisible, setisVisible] = useState(false);
    const [drawerData, setDrawerData] = useState();
    const [modifyStatus, setModifyStatus] = useState(false);
    const [queryParams, setQueryParams] = useState({});

    const { tableProps, updateList, onSearch } = useAntdTable({
        requestUrl: url.pushpinssearch,
        queryParams,
    });


    const modalconfig = [
        {
            name: 'pushimg',
            type: 'input',
            label: '说说图片',
        },
        {
            name: 'pushcontent',
            type: 'textarea',
            label: '说说内容',
            placeholder: '请输入说说内容',
            rules: [{ required: true, message: 'Please input your Pushpins content!' }]
        },
    ]


    const mycolumns = [
        {
            title: '说说图片',
            width: 150,
            dataIndex: 'pushimg',
            key: 'pushimg',
        },
        {
            title: '说说内容',
            width: 500,
            dataIndex: 'pushcontent',
            key: 'pushcontent',
            sorter: true,
        },
        {
            title: '说说日期',
            width: 100,
            dataIndex: 'pushtime',
            key: 'pushtime',
            sorter: true,
        },
        {
            title: '操作',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (text, record) => <><Button type="primary" size="small" className={styles.button} onClick={() => { modifyButton(record) }}>修改</Button><Button type="primary" size="small" danger className={styles.button}>删除</Button> </>,
        },
    ]


    const pushpinsSearch = (searchkey) => {
        setQueryParams({ pushpinsContent: searchkey });
        onSearch({ ...queryParams, pushpinsContent: searchkey });
    }


    const pushpinsAdd = (params) => {
        updateList(() => {
            axios.post(url.pushpinsadd, params).then(res => {
                const { status } = res;
                if (status === 0 || status === '0') {
                    setisVisible(false);
                    message.success('添加成功!');
                }
                else {
                    message.error('错误码' + status + ':' + res.message);
                }
                setisVisible(false);
            }).catch(error => {
                console.log('pushpinsadd error', error);
            })
        })
    }

    return (
        <>
            <SearchBar title={"发布新说说"} searchService={pushpinsSearch} modalConfData={modalconfig} addService={pushpinsAdd} visible={isVisible} setVisible={setisVisible} />
            <Divider />
            <RegularTable tableProps={tableProps} columns={mycolumns} isopt={true} align={true} name={'pushpinsTable'} />
            <ModifyDrawer
                title={'说说修改'}
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

export default Pushpins