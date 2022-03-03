/*
 * @Author: cyong
 * @Date: 2022-02-25 20:06:34
 * @LastEditors: cyong
 * @LastEditTime: 2022-03-03 14:50:15
 * @FilePath: \view\src\redux\actions\useraction.js
 * @Description: reudxz中user相关的action
 */
import {
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    LOGOUT
} from "../constant";

const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        value: data,
    };
}

const RegisterSuccess = (data) => {
    return {
        type: REGISTER_SUCCESS,
        value: data
    };
}


const logout = () => {
    return {
        type: LOGOUT,
    };
}

export { loginSuccess, RegisterSuccess, logout }