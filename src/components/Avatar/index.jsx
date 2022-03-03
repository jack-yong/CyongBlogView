/*
 * @Author: cyong
 * @Date: 2022-02-28 09:36:06
 * @LastEditors: cyong
 * @LastEditTime: 2022-03-03 13:18:36
 * @FilePath: \view\src\components\Avatar\index.jsx
 * @Description: 头像展示的组件
 */
import React from 'react';
import './index.less';

//config
import { DISCUSS_AVATAR } from '../../config';


import { Avatar } from 'antd';


const AvatarComponent = ({ username, role, avatarurl }) => {
    let avatarSrc = '';
    if (role === 'admin') avatarSrc = DISCUSS_AVATAR;
    else {
        avatarSrc = avatarurl;
    }
    return <Avatar src={avatarSrc}>{username}</Avatar>;
}

const AppAvatar = (Props) => {
    const { role, username, avatarurl } = Props.userInfo;
    return <AvatarComponent role={role} avatarurl={avatarurl} username={username} />;
}


export default AppAvatar;