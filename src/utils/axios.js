/*
 * @Author: cyong
 * @Date: 2022-02-27 19:05:52
 * @LastEditors: cyong
 * @LastEditTime: 2022-02-28 09:10:21
 * @FilePath: \view\src\utils\axios.js
 * @Description: 对http请求进行封装
 */

import { Local_Base_Url } from '../config';
import axios from 'axios';

import { message } from 'antd'
import { getToken } from './index'

//1.创建axios实例，默认配置也可以在具体请求内复写修改。
const instance = axios.create({

    // 覆写库的超时默认值
    // 现在，在超时前，所有请求都会等待 5 秒
    timeout: 5000,

    //apibaseURL设置
    baseURL: Local_Base_Url,
});

let timer;
// 2.添加请求拦截器
instance.interceptors.request.use((request) => {
    // 在发送请求之前做些什么

    const token = getToken()
    if (token) {
        request.headers.common['Authorization'] = token;
    }
    return request;

}, (error) => {
    message.error("请求出现错误!");
    // 对请求错误做些什么(转到错误页面之类的)
    return Promise.reject(error);

});


// 3.添加响应拦截器
instance.interceptors.response.use((response) => {
    // 对响应数据做点什么
    //对一些特定的后端指定错误进行页面跳转（比如权限验证等的）
    //返回data使用时只关注数据
    return response.data;
}, (err) => {
    //清除定时器
    clearTimeout(timer);
    timer = setTimeout(() => {
        if (err.response) {
            const { status, data } = err.response
            switch (status) {
                case 401:
                    message.error((data && data.message) || '登录信息过期或未授权,请重新登录!')
                    break

                default:
                    message.error(data.message || `连接错误 ${status}!`)
                    break
            }
        } else {
            message.error(err.message)
        }
    }, 200) // 200 毫秒内重复报错则只提示一次！
    // 对响应错误做点什么（转到错误页面之类的）
    return Promise.reject(err);
});

export default instance;