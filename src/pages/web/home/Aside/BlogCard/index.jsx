import React from 'react';
import Card from '@/components/Card';
import styles from './index.module.less';
import { SIDEBAR } from '@/config';


const BlogCard = (props) => {
    return (
        <Card className={styles.card}>
            <div className={styles.selfinfo}>
                <img src={SIDEBAR.avatar} alt='' className={styles.image} />
                <h2 className={styles.title}>{SIDEBAR.title}</h2>
                <p className={styles.desc}>{SIDEBAR.subTitle}</p>
            </div>
        </Card>
    )
}

export default BlogCard