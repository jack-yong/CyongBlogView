/*
 * @Author: cyong
 * @Date: 2022-02-28 09:36:06
 * @LastEditors: cyong
 * @LastEditTime: 2022-03-17 18:53:46
 * @FilePath: \view\src\components\Avatar\index.jsx
 * @Description: 头像展示的组件
 */
import React from 'react';
import './index.less';

//config
import { DISCUSS_AVATAR } from '../../config';


import { Avatar } from 'antd';



const AppAvatar = (Props) => {
    const { username, avatarurl } = Props;
    let avatarSrc = avatarurl;
    if (avatarSrc === '') avatarSrc = DISCUSS_AVATAR.default;
    // console.log(DISCUSS_AVATAR);
    return <Avatar src={avatarSrc}>{username}</Avatar>;
}


export default AppAvatar;