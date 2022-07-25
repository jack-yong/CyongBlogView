import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from '@/utils/axios';
import url from '@/utils/url';
import { getCategoryList } from '@/redux/actions/categoryaction';
import { getTagList } from '@/redux/actions/tagaction';

//该组件用来存放一些公用的组件或者初始化的状态
const PublicComponent = (props) => {
    const dispatch = useDispatch() // dispatch hooks
    useEffect(() => {
        axios.get(url.tagsearchall).then(res => {
            const { data } = res;
            dispatch(getTagList(data))
        })

        axios.get(url.categorysearchAll).then(res => {
            const { data } = res;
            dispatch(getCategoryList(data))
        })

    })

    return (
        <></>
    )
}

export default PublicComponent