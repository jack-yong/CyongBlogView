import { Button, Image } from "antd";
import styles from './index.module.less'

const usercolumns = [
    {
        title: '用户id',
        width: 100,
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '用户头像',
        width: 100,
        dataIndex: 'imageurl',
        key: 'imageurl',
        render: (text) => {
            return (
                <Image
                    width={50}
                    height={50}
                    src={text}
                />
            )
        }

    },
    {
        title: '用户名',
        width: 100,
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: '用户密码',
        width: 100,
        dataIndex: 'password',
        key: 'password',
    },
    {
        title: '用户邮箱',
        width: 100,
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: '用户手机号',
        width: 100,
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: '用户最近登录时间',
        width: 100,
        dataIndex: 'recentlandtime',
        key: 'recentlandtime',
    },
    {
        title: '用户角色',
        width: 100,
        dataIndex: 'role',
        key: 'role',
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