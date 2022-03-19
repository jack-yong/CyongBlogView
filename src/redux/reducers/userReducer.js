/*
 * @Author: cyong
 * @Date: 2022-02-25 20:06:56
 * @LastEditors: cyong
 * @LastEditTime: 2022-03-19 16:30:12
 * @FilePath: \view\src\redux\reducers\userReducer.js
 * @Description: 处理user相关的reducers
 */


import {
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
} from "../constant";
// import { produce } from 'immer';
import { get } from '../../utils/storage';


//获取本地存储的用户信息
const userInfo = get('userInfo');
//空白的用户state
const blankState = {
    userNickname: '',
    userRole: '',
    userId: 0,
    userAvatarimgurl: '',
    userPhone: '',
    email: '',
    birthday: ''
};

//此处使用了解构赋值，userInfo中与blankState的同名属性会被覆盖掉
let initialtState = { ...blankState, ...userInfo };

const defaultState = initialtState


const userReducer = (state = defaultState, action) => {
    const { type, value } = action
    switch (type) {
        case LOGIN_SUCCESS:
            // console.log(state);
            return { ...state, ...value };
        case REGISTER_SUCCESS:
            return blankState
        default:
            return blankState
    }
}

export default userReducer;


