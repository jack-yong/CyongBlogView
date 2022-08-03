/*
 * @Author: cyong
 * @Date: 2022-03-30 21:44:56
 * @LastEditors: cyong
 * @LastEditTime: 2022-08-03 19:44:26
 * @FilePath: \view\src\pages\web\article\index.jsx
 * @Description: 文章的组件
 */
import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import Qs from 'qs';
import url from '@/utils/url';
import axios from '@/utils/axios';
import {
    LikeOutlined,
    EyeOutlined,
    FieldTimeOutlined,
    TagsOutlined,
    FolderOutlined
} from '@ant-design/icons';
import { Divider, Tag, Spin } from 'antd';
import 'highlight.js/styles/atom-one-light.css';
import styles from './index.module.less';



const Article = (props) => {
    const { aid } = Qs.parse(props.location.search.replace(/^\?/, ''));
    const [articleData, setArticleData] = useState();
    const [loading, setLoading] = useState(true);
    hljs.configure({
        classPrefix: 'hljs-',
        // languages: ['CSS', 'SCSS', 'HTML', 'JavaScript', 'TypeScript', 'Markdown']
    });


    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: code => hljs.highlightAuto(code).value,
        gfm: true, // 默认为true。 允许 Git Hub标准的markdown.
        tables: true, // 允许支持表格语法（该选项要求 gfm 为true）
        breaks: true, // 默认为false。 允许回车换行。该选项要求 gfm 为true。
        // smartLists: true, // 使用比原生markdown更时髦的列表
    })

    useEffect(() => {
        axios.post(url.articledetial, { articleid: aid }).then(res => {
            const { status, data } = res;
            if (status === 0 || status === '0') {
                setLoading(false)
                setArticleData(data);
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Spin spinning={loading}>
            {
                articleData &&

                <div className={styles.article}>
                    <div className={styles.title}>
                        {articleData.title}
                    </div>
                    <div className={styles.desc}>
                        <div className={styles.descshowitem}>
                            <FieldTimeOutlined className={styles.itemicon} />
                            {`Posted on ${articleData.createtime}`}
                        </div>
                        <Divider type="vertical" />
                        <div className={styles.descshowitem}>
                            <FolderOutlined className={styles.itemicon} />
                            <Tag key={articleData.category.categoryId} color="blue">
                                {articleData.category.categoryName}
                            </Tag>
                        </div>
                        <Divider type="vertical" />
                        <div className={styles.descshowitem}>
                            <TagsOutlined className={styles.itemicon} />
                            {

                                articleData.tags.map(item => (
                                    <Tag color={item.tagColor}
                                        key={item.tagId}
                                        style={{ marginLeft: '2px' }}>{item.tagName}
                                    </Tag>
                                ))
                            }

                        </div>
                        <Divider type="vertical" />
                        <div className={styles.descshowitem}>
                            <LikeOutlined className={styles.itemicon} />
                            {articleData.likes}
                        </div>
                        <div className={styles.descshowitem}>
                            <EyeOutlined className={styles.itemicon} />
                            {articleData.views}
                        </div>

                    </div>
                    <Divider />
                    <div className={styles.detail} dangerouslySetInnerHTML={{
                        __html: marked(articleData.blogContent || '').replace(/<pre>/g, "<pre class='hljs'>")
                    }}></div>
                </div>
            }

        </Spin>
    )
}

export default Article;