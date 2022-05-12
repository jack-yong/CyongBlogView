/*
 * @Author: cyong
 * @Date: 2022-03-30 19:10:29
 * @LastEditors: cyong
 * @LastEditTime: 2022-04-06 20:21:52
 * @FilePath: \view\src\layout\admin\siderbar\menu.js
 * @Description: 
 */
import { HomeOutlined, FileProtectOutlined, FileSyncOutlined, FileAddOutlined, UserOutlined, FolderOutlined, TagsOutlined, PushpinOutlined, LinkOutlined, MessageOutlined } from '@ant-design/icons';
const menu = [
    {
        path: '/admin',
        icon: <HomeOutlined />,
        name: '首页'
    },
    {
        path: '/admin/article',
        icon: <FileProtectOutlined />,
        name: '文章',
        children: [
            {
                path: '/admin/article/manager',
                icon: <FileSyncOutlined />,
                name: '管理'
            },
            {
                path: '/admin/article/add',
                icon: <FileAddOutlined />,
                name: '新增'
            }
        ]
    },
    {
        path: '/admin/user/manger',
        icon: <UserOutlined />,
        name: '用户管理'
    },
    {
        path: '/admin/categorys',
        icon: <FolderOutlined />,
        name: '类别管理'
    },
    {
        path: '/admin/tages',
        icon: <TagsOutlined />,
        name: '标签管理'
    }
    ,
    {
        path: '/admin/pushpins',
        icon: <PushpinOutlined />,
        name: '归档管理'
    }
    ,
    {
        path: '/admin/links',
        icon: <LinkOutlined />,
        name: '友链管理'
    }
    ,
    {
        path: '/admin/messages',
        icon: <MessageOutlined />,
        name: '留言板管理'
    }
]

export default menu
