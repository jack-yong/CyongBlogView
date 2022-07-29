import React, { useEffect, useState } from 'react';
import { Tag, Badge, Spin } from 'antd';
import axios from '@/utils/axios';
import url from '@/utils/url';
import Qs from 'qs';
import useFetchList from '@/hooks/useFetchList';
import ArticleSnapList from '@/components/ArticleSnapList';
import MyPagination from '@/components/MyPagination';
import './index.custom.less';
import styles from './index.module.less';

const Category = (props) => {
    const { kindid } = Qs.parse(props.location.search.replace(/^\?/, ''));
    const [category, setCategorys] = useState();
    const [categoryLoading, setcategoryLoading] = useState(true);
    console.log(kindid);
    const { dataList, loading, pagination, onFetch } = useFetchList({
        requestUrl: url.articlesearch,
    })

    useEffect(() => {
        axios.get(url.articltype, { params: { aType: 'category' } }).then(res => {
            const { status, data } = res;
            if (status === '0' || status === 0) {
                setCategorys(data);
                setcategoryLoading(false);
            }
        });
    }, [])

    useEffect(() => {
        onFetch({ categoryid: kindid })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [kindid])

    return (
        <div className={styles.categorypage}>
            <div className={styles.categoryshow}>
                <Spin spinning={categoryLoading}>
                    <div className={styles.categorylist} id='categoryList'  >
                        <Tag color={'blue'} key={'all'} onClick={(e) => { props.history.push(`/category`) }}>{'全部'}</Tag>
                        {
                            category && category.map((item, idx) => (
                                <Badge count={item.articleNum} size="small" key={idx} >
                                    <Tag color={'blue'} key={item.categoryId} onClick={(e) => { props.history.push(`/category?kindid=${item.categoryId}`) }}>{item.categoryName}</Tag>
                                </Badge>
                            ))
                        }
                    </div>
                </Spin>
            </div>
            <ArticleSnapList articleData={dataList} loading={loading} />
            <MyPagination {...pagination} />

        </div>
    )
}

export default Category