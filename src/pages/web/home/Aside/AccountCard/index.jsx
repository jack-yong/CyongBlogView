import React from 'react';
import Card from '@/components/Card';
import styles from './index.module.less';
import { SIDEBAR } from '@/config';
import IconButton from './IconButon';

const AccountCard = (porps) => {
    return (
        <Card className={styles.card}>
            {
                SIDEBAR.homepages.map(({ link, content, isLink, icon }, index) => (
                    <IconButton isLink={isLink} link={link} content={content} key={index}>
                        {icon}
                    </IconButton>
                ))
            }
        </Card>
    )
}

export default AccountCard