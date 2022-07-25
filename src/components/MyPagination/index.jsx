import React from 'react'
import { Pagination } from 'antd'
import styles from './index.module.less'
const MyPagination = (props) => {
    const { current, total, onChange, pageSize, hideOnSinglePage } = props;
    return (
        <>
            {
                <div className={styles.pagination}>

                    <Pagination
                        current={current}
                        total={total}
                        pageSize={pageSize}
                        showSizeChanger={false}
                        showTitle={false}
                        onChange={onChange}
                        hideOnSinglePage={hideOnSinglePage}
                    />
                </div>

            }

        </>
    )
}

export default MyPagination