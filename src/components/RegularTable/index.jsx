import React from 'react'
import { Table } from 'antd'
// import styles from './index.module.less'
const RegularTable = (props) => {
    const { tableProps, columns, isopt, align } = props

    const filterColumns = (columns) => {
        let narr = []
        columns.forEach(item => {
            if (isopt) {
                // item['render'] = <><Button className={styles.button}>修改</Button><Button className={styles.button}>删除</Button> </>
            }
            if (align) {
                item['align'] = 'center'
            }
            narr.push(item)
        })
        return narr
    }

    return (
        <>
            <Table
                {...tableProps}
                columns={filterColumns(columns)}
                // key={name ? 'table' : name}

                bordered
                size="small"

                scroll={{ x: 'calc(700px + 50%)', y: 440 }}
            />
        </>
    )
}

export default RegularTable