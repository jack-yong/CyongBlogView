import React, { useState } from 'react';
import { message, Divider, Button } from 'antd';
import RegularTable from '@/components/RegularTable';
import axios from '@/utils/axios';
import url from '@/utils/url';
// import mycolumns from './catecolumns';
import SearchBar from '@/components/SearchBar';
import useAntdTable from '@/hooks/useAntdTable';
// import modalconfig from './modalconfig';
import ModifyDrawer from '@/components/ModifyDrawer';
import { drawerStyle, drawerItemStyle } from '@/config';
import styles from './index.module.less';

const Categorys = (props) => {

    const [isVisible, setisVisible] = useState(false);
    const [queryParams, setQueryParams] = useState({});
    const [modifyStatus, setModifyStatus] = useState(false);
    const [drawerData, setDrawerData] = useState();

    const modalconfig = [
        {
            name: 'cateimgurl',
            type: 'input',
            label: '类别图片',
        },
        {
            name: 'catename',
            type: 'input',
            label: '类别名称',
            placeholder: '请输入类别名',
            rules: [{ required: true, message: 'Please input your catename!' }]
        },

    ];

    const mycolumns = [
        {
            title: '类别图片',
            width: 100,
            dataIndex: 'cateimgurl',
            key: 'cateimgurl',
        },
        {
            title: '类别名称',
            width: 100,
            dataIndex: 'catename',
            key: 'catename',
            sorter: true,
        },
        {
            title: '状态',
            width: 100,
            dataIndex: 'catestatus',
            key: 'catestatus',
            render: (text) => {
                if (text === '0' || text === 0) {
                    return '可用';
                }
                else {
                    return '不可用'
                }
            },
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
        },
        {
            title: '创建时间',
            width: 100,
            dataIndex: 'createtime',
            key: 'createtime',
            sorter: true,
        },

        {
            title: '操作',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (text, record) => <><Button type="primary" size="small" className={styles.button} onClick={() => modifyButton(record)}>修改</Button><Button type="primary" size="small" danger className={styles.button}>删除</Button> </>,
        },
    ];

    const { tableProps, updateList, onSearch } = useAntdTable({
        requestUrl: url.categorysearch,
        queryParams,
    })

    const cateSearch = (searchname) => {
        setQueryParams({ cateName: searchname });
        onSearch({ ...queryParams, cateName: searchname });
    }

    const cateAdd = (params) => {
        updateList(() => {
            axios.post(url.categoryAdd, params).then(res => {
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
                console.log('cateAdd error', error);
            })
        })

    }

    return (
        <>
            <SearchBar title={"增加新类别"} searchService={cateSearch} modalConfData={modalconfig} addService={cateAdd} visible={isVisible} setVisible={setisVisible} />
            <Divider />
            <RegularTable tableProps={tableProps} columns={mycolumns} isopt={true} align={true} name={'cateTable'} />
            <ModifyDrawer
                title={'作品集修改'}
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

export default Categorys