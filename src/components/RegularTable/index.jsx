import React from 'react'
import { Table } from 'antd'

const RegularTable = (props) => {
    const { columns, data } = props
    return (
        <Table
            columns={columns}
            dataSource={data}
            bordered
            size="small"
            scroll={{ x: 'calc(700px + 50%)', y: 240 }}
        />
    )
}

export default RegularTable