/*
 * @Author: cyong
 * @Date: 2022-02-25 20:06:56
 * @LastEditors: cyong
 * @LastEditTime: 2022-03-03 11:28:07
 * @FilePath: \view\src\redux\reducers\userReducer.js
 * @Description: 处理user相关的reducers
 */


import {
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
} from "../constant";
import { produce } from 'immer';
import { get, } from '../../utils/storage';


//获取本地存储的用户信息
const userInfo = get('userInfo');
//空白的用户state
const blankState = {
    username: '',
    role: '',
    userId: 0,
    imgurl: '',
    phone: '',
    email: '',
    birthday: ''
};

//此处使用了解构赋值，userInfo中与blankState的同名属性会被覆盖掉
let initialtState = { ...blankState, ...userInfo };

const defaultState = {
    schema: initialtState
}


//每次都要是一个新的state，不能返回原来的state。经常返回state,都是一个全新的对象，引用会变化，会造成性能问题。通过immer(更好用)/immutable不用关心数据引用和性能的问题
const userReducer = (state = defaultState, action) => produce(state, (draft) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            draft.schema = action.value;
            break;
        case REGISTER_SUCCESS:
            draft.schema = blankState;
            break;
        default:
            break;
    }
})

export default userReducer;


