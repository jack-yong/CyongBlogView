/*
 * @Author: cyong
 * @Date: 2022-02-27 21:46:08
 * @LastEditors: cyong
 * @LastEditTime: 2022-06-19 17:36:35
 * @FilePath: \view\src\utils\index.js
 * @Description: 常用的一些工具函数
 */
import { get } from './storage';

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

// 获取 url query 参数
export const decodeQuery = url => {
    const params = {}
    const paramsStr = url.replace(/\.*\?/, '') // a=1&b=2&c=&d=xxx&e
    paramsStr.split('&').forEach(v => {
        const d = v.split('=')
        if (d[1] && d[0]) params[d[0]] = d[1]
    })
    return params
}

export const isTel = (phone) => {
    var reg = /^1[34578]\d{9}$/;
    if (!reg.test(phone)) {
        return false
    }
    return true
}