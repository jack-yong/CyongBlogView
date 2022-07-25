

import { NavLink as Link } from 'react-router-dom';
import {
    HomeOutlined,
    FileProtectOutlined,
    FileSyncOutlined,
    FileAddOutlined,
    UserOutlined,
    FolderOutlined,
    TagsOutlined,
    PushpinOutlined,
    LinkOutlined,
    MessageOutlined,
    // SettingOutlined,
    AppstoreOutlined,
    BookOutlined
} from '@ant-design/icons';
const menu = [
    {
        key: '/admin',
        icon: <HomeOutlined />,
        label: <Link to="/admin">首页</Link>
    },
    {
        key: '/admin/article',
        icon: <FileProtectOutlined />,
        label: '文章',
        children: [
            {
                key: '/admin/article/manager',
                icon: <FileSyncOutlined />,
                label: <Link to="/admin/article/manager">管理</Link>
            },
            {
                key: '/admin/article/add',
                icon: <FileAddOutlined />,
                // name: '新增'
                label: <Link to="/admin/article/add">新增</Link>
            }
        ]
    },
    {
        key: '/admin/user',
        icon: <UserOutlined />,
        // name: '用户管理'
        label: <Link to="/admin/user">用户管理</Link>
    },
    {
        key: '/admin/categorys',
        icon: <FolderOutlined />,
        // name: '类别管理'
        label: <Link to="/admin/categorys">类别管理</Link>
    },
    {
        key: '/admin/tags',
        icon: <TagsOutlined />,
        // name: '标签管理'
        label: <Link to="/admin/tags">标签管理</Link>
    }
    ,
    {
        key: '/admin/pushpins',
        icon: <PushpinOutlined />,
        // name: '归档管理'
        label: <Link to="/admin/pushpins">说说管理</Link>
    }
    ,
    {
        key: '/admin/links',
        icon: <LinkOutlined />,
        // name: '友链管理'
        label: <Link to="/admin/links">友链管理</Link>
    }
    ,
    {
        key: '/admin/messages',
        icon: <MessageOutlined />,
        // name: '留言板管理'
        label: <Link to="/admin/messages">留言板管理</Link>
    },
    {
        key: '/admin/log',
        icon: <BookOutlined />,
        // name: '留言板管理'
        label: <Link to="/admin/log">开发日志管理</Link>
    },
    {
        key: '/admin/portfolio',
        icon: <AppstoreOutlined />,
        // name: '留言板管理'
        label: <Link to="/admin/portfolio">作品集管理</Link>
    },
    // {

    //     key: '/admin/settings',
    //     icon: <SettingOutlined />,
    //     // name: '系统设置管理'
    //     label: <Link to="/admin/settings">系统设置管理</Link>
    // }
]

export default menu
