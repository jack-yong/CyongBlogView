/*
 * @Author: cyong
 * @Date: 2021-11-29 14:31:48
 * @LastEditors: cyong
 * @LastEditTime: 2022-07-29 19:41:43
 * @FilePath: \view\src\config.js
 * @Description: 存放项目中的一些配置信息
 */
import { GithubOutlined, ZhihuOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import Image from '@/assets/images/avatar.jpg';
import wechat from '@/assets/images/wechat.jpg';
import qqImage from '@/assets/images/qq.jpg';
import DefBlogImage from '@/assets/images/defaultImage.png'
//本地后端接口url
export const Local_Base_Url = 'http://localhost:8888'


export const HEADER_BLOG_NAME = 'cyong的博客' // header title 显示的名字

export const SIDEBAR = {
    avatar: Image, // 侧边栏头像
    title: 'cyong', // 标题
    subTitle: '道路是曲折的,前途是光明的！', // 子标题
    // 个人主页
    homepages: [
        {
            link: 'https://github.com/jack-yong',
            icon: <GithubOutlined />,
            content: '',
            isLink: true,
        },
        {
            link: 'https://blog.csdn.net/weixin_42920294',
            icon: <ZhihuOutlined />,
            content: '',
            isLink: true,
        },
        {
            link: '',
            icon: <QqOutlined />,
            content: <img src={qqImage} alt='QQ' style={{ width: '120px', height: '120px' }} />,
            isLink: false,
        },
        {
            link: '',
            icon: <WechatOutlined />,
            content: <img src={wechat} alt='WeChat' style={{ width: '120px', height: '120px' }} />,
            isLink: false,
        }
    ]
}

// === discuss avatar
export const DISCUSS_AVATAR = Image // 评论框博主头像

//default blogImage
export const BlogImage = DefBlogImage;

//设计
export const pageconfig = {
    pageSize: 6,
    homePagesize: 6,
}

//
export const drawerStyle = {
    labelCol: {
        span: 4
    },
    wrapperCol: {
        span: 20
    },
};
export const drawerItemStyle = {
    wrapperCol: { span: 20 },
};

