import React from 'react';
import { Popover } from 'antd';
import styles from './index.module.less';


const IconButton = (props) => {
    const { link, content, isLink, children } = props;

    return (
        isLink ?
            (
                <a className={styles.iconBtn} href={link} target='_blank' rel='noreferrer'>
                    {children}
                </a>
            ) :
            (
                <Popover
                    trigger='hover'
                    className={styles.iconBtn}
                    content={content}
                    overlayClassName={styles.card}
                >
                    {children}
                </Popover>
            )


    )
}

export default IconButton;