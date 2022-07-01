import React from 'react'
import { Pagination } from 'antd'
import styles from './index.module.less'
const MyPagination = (props) => {
    const { current, defaultPageSize, total, setPage } = props;
    return (
        <>
            {
                total > defaultPageSize ?
                    (<Pagination
                        className={styles.pagination}
                        current={current}
                        total={total}
                        defaultPageSize={defaultPageSize}
                        showSizeChanger={false}
                        showTitle={false}
                        onChange={(page) => {
                            setPage(page)
                        }}
                    />) : null
            }

        </>
    )
}

export default MyPagination