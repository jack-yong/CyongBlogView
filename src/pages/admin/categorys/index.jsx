import React, { useState } from 'react';
import { message, Divider } from 'antd';
import RegularTable from '@/components/RegularTable';
import axios from '@/utils/axios';
import url from '@/utils/url';
import mycolumns from './catecolumns';
import SearchBar from '@/components/SearchBar';
import useAntdTable from '@/hooks/useAntdTable';
import modalconfig from './modalconfig';

const Categorys = (props) => {

    const [isVisible, setisVisible] = useState(false);
    const [queryParams, setQueryParams] = useState({});

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
        </>
    )




}

export default Categorys