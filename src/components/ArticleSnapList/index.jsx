import React from 'react';
import { Divider, Tag, Spin } from 'antd';
import { withRouter } from 'react-router-dom'
import { FieldTimeOutlined, TagsOutlined, FolderOutlined } from '@ant-design/icons';
import styles from './index.module.less';

const ArticleSnapList = (props) => {
    const { articleData, loading } = props;
    return (
        <Spin spinning={loading}>
            <div className={styles.articleList}>
                {
                    articleData.map(item => (
                        <div className={styles.articleListItem} key={item.id}>
                            <span className={styles.title} onClick={e => props.history.push(`/article?aid=${item.id}`)}>{item.title}</span>
                            <div className={styles.descshow}>
                                <div className={styles.descshowitem}>
                                    <FieldTimeOutlined className={styles.itemicon} />
                                    {item.createtime}
                                </div>
                                <Divider type="vertical" />
                                <div className={styles.descshowitem}>
                                    <FolderOutlined className={styles.itemicon} />
                                    <Tag key={item.category.categoryId} color="blue">
                                        {item.category.categoryName}
                                    </Tag>
                                </div>
                                <Divider type="vertical" />
                                <div className={styles.descshowitem}>
                                    <TagsOutlined className={styles.itemicon} />
                                    {

                                        item.tags && item.tags.map(titem => (
                                            <Tag color={titem.tagColor}
                                                key={titem.tagId}
                                                style={{ marginLeft: '2px' }}>{titem.tagName}
                                            </Tag>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                    ))

                }
            </div>
        </Spin>
    )
}

export default withRouter(ArticleSnapList);