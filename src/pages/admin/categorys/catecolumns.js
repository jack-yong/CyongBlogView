import { Button } from "antd";
import styles from './index.module.less'
const columns = [
    {
        title: '类别id',
        width: 100,
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '类别图片',
        width: 100,
        dataIndex: 'cateimgurl',
        key: 'cateimgurl',
    },
    {
        title: '类别名称',
        width: 100,
        dataIndex: 'catename',
        key: 'catename',
    },
    {
        title: '状态',
        width: 100,
        dataIndex: 'catestatus',
        key: 'catestatus',
        render: (text) => {
            if (text === '0' || text === 0) {
                return '可用';
            }
            else {
                return '不可用'
            }
        }
    },
    {
        title: '创建时间',
        width: 100,
        dataIndex: 'createtime',
        key: 'createtime',
    },

    {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <><Button type="primary" size="small" className={styles.button}>修改</Button><Button type="primary" size="small" danger className={styles.button}>删除</Button> </>,
    },
];

export default columns