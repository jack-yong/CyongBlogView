/*
 * @Author: cyong
 * @Date: 2022-02-27 19:05:52
 * @LastEditors: cyong
 * @LastEditTime: 2022-03-17 14:45:25
 * @FilePath: \view\src\utils\axios.js
 * @Description: 对http请求进行封装
 */

import { Local_Base_Url } from '../config';
import axios from 'axios';
import Qs from 'qs'

import { message } from 'antd'
// import { getToken } from './index'

//1.创建axios实例，默认配置也可以在具体请求内复写修改。
const instance = axios.create({

    // 覆写库的超时默认值
    // 现在，在超时前，所有请求都会等待 5 秒
    timeout: 5000,

    //apibaseURL设置
    baseURL: Local_Base_Url,
    withCredentials: true,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

});

// 2.添加请求拦截器
instance.interceptors.request.use((request) => {
    // 在发送请求之前做些什么

    request.data = Qs.stringify(request.data)
    // const token = getToken()
    // if (token) {
    //     request.headers.common['Authorization'] = token;
    // }
    return request;

}, (error) => {
    // message.error("请求出现错误!");
    // 对请求错误做些什么(转到错误页面之类的)
    return Promise.reject(error);

});


// 3.添加响应拦截器
instance.interceptors.response.use((response) => {
    // 对响应数据做点什么
    //对一些特定的后端指定错误进行页面跳转（比如权限验证等的）
    //返回data使用时只关注数据
    return Qs.parse(response.data);
}, (err) => {
    //清除定时器
    // clearTimeout(timer);
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
    return Promise.reject(err);
});

export default instance;