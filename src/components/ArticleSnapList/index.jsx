import React from 'react';
import { Skeleton } from 'antd';
import styles from './index.module.less';

const ArticleSnapList = (props) => {
    const { articleData } = props;
    return (
        articleData ?
            <div className={styles.articleList}>
                {
                    articleData.map(item => (
                        <div className={styles.articleListItem} key={item.id}>
                            <span className={styles.title}>{item.title}</span>
                            <div className={styles.desc}>

                            </div>
                        </div>
                    ))

                }
            </div>
            :
            <Skeleton />
    )
}

export default ArticleSnapList;