/*
 * @Author: cyong
 * @Date: 2021-12-07 21:32:11
 * @LastEditors: cyong
 * @LastEditTime: 2022-07-03 22:10:38
 * @FilePath: \view\src\redux\rootReducers.js
 * @Description: 进行reducer的集中的暴露和组合
 */

import { combineReducers } from 'redux';
//注意，下面的user指的就是userReducer其中包含初始状态
import user from './reducers/userReducer';
import category from './reducers/categoryReducer';
import tag from './reducers/tagReducer'

export default combineReducers({
    user,
    category,
    tag
})