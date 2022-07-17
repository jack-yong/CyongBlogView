import { Button, Tag } from "antd";
import styles from './index.module.less'

const usercolumns = [
    {
        title: '标签名称',
        width: 100,
        dataIndex: 'tagname',
        key: 'tagname',
        sorter: true,
    },
    {
        title: '创建日期',
        width: 100,
        dataIndex: 'createTime',
        key: 'createTime',
        sorter: true,
    },
    {
        title: '标签颜色',
        width: 100,
        dataIndex: 'tagColor',
        key: 'tagColor',
        render: (text, record) => {
            return (
                <Tag color={text} >{record.tagname}</Tag>
            )
        },
    },
    {
        title: '标签状态',
        width: 100,
        dataIndex: 'isdeleted',
        key: 'isdeleted',
        filters: [
            {
                text: '可用',
                value: 0,
            },
            {
                text: '不可用',
                value: 1,
            },
        ],
        render: (text) => {
            if (text === 0 || text === '0') {
                return '可用';
            }
            else {
                return '不可用'
            }
        }
    },

    {
        title: '操作',
        width: 100,
        key: 'operation',
        fixed: 'right',
        render: () => <><Button type="primary" size="small" className={styles.button}>修改</Button><Button type="primary" size="small" danger className={styles.button}>删除</Button> </>,
    },
]

export default usercolumns;