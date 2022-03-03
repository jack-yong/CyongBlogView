/*
 * @Author: cyong
 * @Date: 2022-02-27 21:46:08
 * @LastEditors: cyong
 * @LastEditTime: 2022-03-01 10:45:06
 * @FilePath: \view\src\utils\index.js
 * @Description: 常用的一些工具函数
 */
import { clear, get } from './storage';

/**
 * @author: cyong
 * @description: 获取 token
 * @return {*} 返回用户的验证信息token
 */
export function getToken() {
    let token = '';
    const userInfo = get('userInfo');

    if (userInfo && userInfo.token) {
        token = 'cyong ' + userInfo.token;
    }

    return token;
}

/**
 * @author: cyong
 * @description: 验证path是否是https，mailto，tel，http这些东西开头的
 * @param {*} path
 * @return {*} Boolean
 */
export function isExternal(path) {
    return /^(https?:|mailto:|tel:|http:)/.test(path);
}