/*
 * @Author: cyong
 * @Date: 2022-01-03 17:43:48
 * @LastEditors: cyong
 * @LastEditTime: 2022-03-20 13:17:42
 * @FilePath: \view\src\layout\web\header\right\component\Userinfo.jsx
 * @Description:  header组件中右边的Userinfo子组件
 */

import React, { useState } from 'react'


//引入组件
import { Button, Dropdown, Menu, message } from 'antd'
import LoginModal from './loginModal';
import RegisterModal from './RegisterModal';
import AppAvatar from '../../../../../components/Avatar'

//redux
import { useSelector, useDispatch } from 'react-redux';

//引入退出登录的aciton
import { logout, loginSuccess, RegisterSuccess } from '../../../../../redux/actions/useraction'

//进行http请求
import axios from '../../../../../utils/axios'

//后端url地址
import url from '../../../../../utils/url'



const Userinfo = (props) => {

    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.user);
    const [loginvisible, setloginVisible] = useState(false);
    const [registervisible, setregisterVisible] = useState(false);
    const { userNickname, userAvatarimgurl } = userInfo

    const MenuOverLay = (
        <Menu>
            <Menu.Item>
                <span className='user-logout' onClick={e => dispatch(logout())}>
                    退出登录
                </span>
            </Menu.Item>
        </Menu>
    )

    /**
     * @author: cyong
     * @description: 登录的相应函数
     * @param {*}
     * @return {*}
     */
    const loginonSubmit = (param) => {
        axios.post(url.userlogin, param).then(res => {
            const { status, data } = res;
            // console.log(data);
            if (status === 0 || status === '0') {
                dispatch(loginSuccess(data))
                // console.log(userInfo);
                message.success(`登录成功, 欢迎您 ${data.userNickname}`)
                setloginVisible(false)
            }
            else {
                message.error('错误码' + status + ':' + res.message)
            }

            return res
        })
    }

    /**
     * @author: cyong
     * @description: 注册对应的函数
     * @param {*}
     * @return {*}
     */
    const registeronSubmit = (param) => {
        // console.log(param);
        axios.post(url.userregister, param).then(res => {
            const { status, data } = res;
            if (status === 0 || status === '0') {
                dispatch((RegisterSuccess(data)))
                message.success('注册成功!!!')
                setregisterVisible(false)
            }
            else {
                message.error('错误码' + status + ':' + res.message)
            }
        })

    }

    return (
        <div className='header-button'>
            {userNickname !== '' ? (
                <Dropdown placement='bottomCenter' overlay={MenuOverLay} trigger={['click', 'hover']}>
                    <div style={{ height: 55 }}>
                        <AppAvatar username={userNickname} avatarurl={userAvatarimgurl} />
                    </div>
                </Dropdown>
            ) : (
                <>
                    <Button
                        ghost
                        type='primary'
                        size='small'
                        style={{ marginRight: 20 }}
                        key="login"
                        onClick={e => setloginVisible(true)}
                    >
                        登录
                    </Button>
                    <Button ghost type='danger' size='small' key="register" onClick={e => setregisterVisible(true)} >
                        注册
                    </Button>
                    <LoginModal type={'登录'} visible={loginvisible} onCancelModal={(e) => setloginVisible(false)} onSubmit={loginonSubmit} />
                    <RegisterModal type={'注册'} visible={registervisible} onCancelModal={(e) => setregisterVisible(false)}
                        onSubmit={registeronSubmit}
                    />
                </>
            )
            }

        </div>

    )
}

export default Userinfo
