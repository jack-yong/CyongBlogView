import React from 'react';

import styles from './index.module.less';
import BlogCard from './BlogCard';
import AccountCard from './AccountCard';
import DataCard from './DataCard';
import MyClock from './Clock';

const Aside = (props) => {

    return (

        <section className={styles.aside}>
            <BlogCard />
            <AccountCard />
            <DataCard />
            <MyClock />
        </section>
    )
}

export default Aside;