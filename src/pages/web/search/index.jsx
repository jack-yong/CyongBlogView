import React from 'react';
import { Input } from 'antd';
import url from '@/utils/url';
import useFetchList from '@/hooks/useFetchList';
import ArticleSnapList from '@/components/ArticleSnapList';
import MyPagination from '@/components/MyPagination';
import styles from './index.module.less';

const { Search } = Input;

const Searchs = (props) => {
    const { dataList, loading, pagination, onFetch } = useFetchList({
        requestUrl: url.articlesearch,
    })
    const searhByKey = (keystr) => {
        onFetch({ title: keystr });
    }

    return (
        <div className={styles.searchPage}>
            <div className={styles.searchShow}>
                <Search placeholder="请输入关键字进行搜索" className={styles.searchinput} enterButton onSearch={(value) => searhByKey(value)} />
            </div>
            <ArticleSnapList articleData={dataList} loading={loading} />
            <MyPagination {...pagination} />
        </div>

    )
}

export default Searchs;