import {
    // HomeOutlined,
    // TagsOutlined,
    // FolderOutlined,
    MessageOutlined,
    PushpinOutlined,
    LinkOutlined,
    TagsOutlined,
    FolderOutlined,
    ContainerOutlined,
    SearchOutlined,
    BookOutlined,
    AppstoreOutlined,
    InfoOutlined
} from '@ant-design/icons'
import { NavLink as Link } from 'react-router-dom';

const menu = [
    {
        key: '/waytoarticle',
        icon: <ContainerOutlined />,
        label: '文章',
        children: [
            {
                key: '/search',
                icon: <SearchOutlined />,
                label: <Link to="/search">搜索</Link>,
            }, {
                key: '/tags',
                icon: <TagsOutlined />,
                label: <Link to="/tags">标签</Link>,
            }, {
                key: '/category',
                icon: <FolderOutlined />,
                label: <Link to="/category">类别</Link>,
            }
        ]
    },
    {
        key: '/pushpins',
        icon: <PushpinOutlined />,
        label: <Link to="/pushpins">说说</Link>
    },

    {
        key: '/message',
        icon: <MessageOutlined />,
        label: <Link to="/message">留言</Link>
    },
    {
        key: '/link',
        icon: <LinkOutlined />,
        label: <Link to="/link">友链</Link>
    },
    {
        key: '/devlog',
        icon: <BookOutlined />,
        label: <Link to="/devlog">建站</Link>
    },
    {
        key: '/portfolio',
        icon: <AppstoreOutlined />,
        label: <Link to="/portfolio">作品</Link>
    },
    {
        key: '/about',
        icon: <InfoOutlined />,
        label: <Link to="/about">关于</Link>
    },
]

export default menu;
