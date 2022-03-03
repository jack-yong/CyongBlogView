/*
 * @Author: cyong
 * @Date: 2022-02-26 21:46:34
 * @LastEditors: cyong
 * @LastEditTime: 2022-02-27 11:45:52
 * @FilePath: \view\src\utils\storage.js
 * @Description: 进行本地数据的存储和读取
 */

/**
 * @author: cyong
 * @description: 读取本地存储
 * @param {String} key
 * @return {*}
 */
//Window localStorage 属性
export const get = key => {
    //获取键值为key的value值
    const value = localStorage.getItem(key);
    if (!value) return null;
    //判断value值是否是单个值
    return value.indexOf('{') === 0 || value.indexOf('[') === 0 ? JSON.parse(value) : value;
}

/**
 * @author: cyong
 * @description: 进行本地数据的存储
 * @param {*} key
 * @param {*} value
 * @return {*}
 */
export const save = (key, value) => {
    const data = typeof value === 'object' ? JSON.stringify(value) : value;
    localStorage.setItem(key, data);
}

/**
 * @author: cyong
 * @description: 删除本地的存储数据
 * @param {*} key
 * @return {*}
 */
export const remove = key => {
    localStorage.removeItem(key);
}

/**
 * @author: cyong
 * @description: 清楚本地的数据
 * @param {*}
 * @return {*}
 */
export const clear = () => {
    localStorage.clear();
}