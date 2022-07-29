import React, { useEffect, useState } from 'react';
import { Tag, Badge, Spin } from 'antd';
// import { useSelector } from 'react-redux';
import axios from '@/utils/axios';
import url from '@/utils/url';
import Qs from 'qs';
import useFetchList from '@/hooks/useFetchList';
import ArticleSnapList from '@/components/ArticleSnapList';
import MyPagination from '@/components/MyPagination';
import './index.custom.less';
import styles from './index.module.less';


const Tags = (props) => {
    const { kindid } = Qs.parse(props.location.search.replace(/^\?/, ''));
    const [tags, setTags] = useState();
    const [tagLoading, settagLoading] = useState(true);
    const { dataList, loading, pagination, onFetch } = useFetchList({
        requestUrl: url.articlesearch,
        tags: kindid
    })
    useEffect(() => {
        axios.get(url.articltype, { params: { aType: 'tag' } }).then(res => {
            const { status, data } = res;
            if (status === '0' || status === 0) {
                setTags(data);
                settagLoading(false);
            }
        });
    }, [])

    useEffect(() => {
        onFetch({ tags: kindid })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [kindid])

    // console.log(tags);
    return (
        <div className={styles.tagpage}>
            <div className={styles.tagshow}>
                <Spin spinning={tagLoading}>
                    <div className={styles.taglist} id='tagsList'  >
                        <Tag color={'blue'} key={'all'} onClick={(e) => { props.history.push(`/tags`) }}>{'全部'}</Tag>
                        {

                            tags && tags.map(item => (
                                <Badge count={item.articleNum} size="small" >
                                    <Tag color={item.tagColor} key={item.tagId} onClick={(e) => { props.history.push(`/tags?kindid=${item.tagName}`) }} >{item.tagName}</Tag>
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

export default Tags;