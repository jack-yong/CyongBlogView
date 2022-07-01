/*
 * @Author: cyong
 * @Date: 2021-11-29 14:31:48
 * @LastEditors: cyong
 * @LastEditTime: 2022-06-21 20:23:44
 * @FilePath: \view\src\config.js
 * @Description: 存放项目中的一些配置信息
 */
import { GithubOutlined } from '@ant-design/icons';

//本地后端接口url
export const Local_Base_Url = 'http://localhost:8888'


export const HEADER_BLOG_NAME = 'cyong的博客' // header title 显示的名字

export const SIDEBAR = {
    avatar: require('./assets/images/avatar.jpg'), // 侧边栏头像
    title: 'cyong', // 标题
    subTitle: '学而知不足', // 子标题
    // 个人主页
    homepages: {
        github: {
            link: 'https://github.com/jack-yong',
            icon: <GithubOutlined className='homepage-icon' />
        }
    }
}

// === discuss avatar
export const DISCUSS_AVATAR = SIDEBAR.avatar // 评论框博主头像

//设计
export const pageconfig = {
    pageSize: 6
}
