import React, { useState } from 'react'
import { message, Divider } from 'antd'
import RegularTable from '@/components/RegularTable'
import SearchBar from '@/components/SearchBar'
import modalconfig from './modalconfig'
import axios from '@/utils/axios'
import url from '@/utils/url'
import mycolumns from './tagcolumns'
import useAntdTable from '@/hooks/useAntdTable'

const TagManger = (props) => {
    const [visible, setVisible] = useState(false);
    const [queryParams, setQueryParams] = useState({});

    const { tableProps, updateList, onSearch } = useAntdTable({
        requestUrl: url.tagsearch,
        queryParams,
    })

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
        </>
    )
}

export default TagManger