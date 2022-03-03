/*
 * @Author: cyong
 * @Date: 2022-03-01 10:37:50
 * @LastEditors: cyong
 * @LastEditTime: 2022-03-01 12:31:41
 * @FilePath: \view\src\components\Href\index.jsx
 * @Description: 封装可以跳转新窗口的a标签
 */

import React from 'react';
import { isExternal } from '../../utils/index';


/**
 * @author: cyong
 * @description: rest参数是用来搜集Href中可能新添加的参数
 * @param {*} children
 * @param {*} href
 * @param {array} rest
 * @return {*}
 */
const Href = ({ children, href, ...rest }) => {
    let url = href;
    if (!isExternal(href)) {
        //验证是否是正常的网页链接
        url = `http://${href}`;
    }
    return (
        <a target='_blank' rel='noreferrer noopener' {...rest} href={url}>
            {children}
        </a>
    )

}

export default Href