import React from 'react';
import styles from './index.module.less';
import classNames from 'classnames';
import { Skeleton } from 'antd';

const Card = (props) => {
    const { className, loading, children, isStatic, onClick, skeHeight } = props;
    return (
        <div
            className={
                classNames(
                    styles.card,
                    { [styles.center]: loading },
                    { [styles.active]: !isStatic },
                    className
                )
            }
            onClick={onClick}
        >{loading ? <Skeleton paragraph={{ rows: skeHeight ? skeHeight : 1 }} /> : children}
        </div>
    )
}

export default Card