/*
 * @Author: cyong
 * @Date: 2021-12-07 21:32:11
 * @LastEditors: cyong
 * @LastEditTime: 2022-03-03 15:12:33
 * @FilePath: \view\src\redux\rootReducers.js
 * @Description: 进行reducer的集中的暴露和组合
 */

import { combineReducers } from 'redux';
//注意，下面的user指的就是userReducer其中包含初始状态
import user from './reducers/userReducer';

export default combineReducers({
    user,
})