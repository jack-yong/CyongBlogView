/*
 * @Author: cyong
 * @Date: 2022-04-05 17:15:46
 * @LastEditors: cyong
 * @LastEditTime: 2022-07-11 20:46:45
 * @FilePath: \view\src\pages\admin\user\index.jsx
 * @Description: 用户管理的组件
 */

import React, { useState } from 'react'
import { message, Divider } from 'antd'
import RegularTable from '@/components/RegularTable'
import SearchBar from '@/components/SearchBar'
import modalconfig from './modalconfig'
import axios from '@/utils/axios'
import url from '@/utils/url'
import mycolumns from './usercolumns'
import useAntdTable from '@/hooks/useAntdTable'

const AdminUser = (props) => {

    const [visible, setVisible] = useState(false);
    const [queryParams, setQueryParams] = useState({});

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