import { Button } from "antd";
import styles from './index.module.less'

const usercolumns = [
    {
        title: '标签id',
        width: 100,
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '标签名称',
        width: 100,
        dataIndex: 'tagname',
        key: 'tagname',

    },
    {
        title: '创建日期',
        width: 100,
        dataIndex: 'createTime',
        key: 'createTime',
    },
    {
        title: '标签状态',
        width: 100,
        dataIndex: 'isdeleted',
        key: 'isdeleted',
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