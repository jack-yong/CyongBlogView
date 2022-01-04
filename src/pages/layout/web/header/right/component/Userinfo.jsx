/*
 * @Author: cyong
 * @Date: 2022-01-03 17:43:48
 * @LastEditors: cyong
 * @LastEditTime: 2022-01-04 19:25:17
 * @FilePath: \view\src\pages\layout\web\header\right\component\Userinfo.jsx
 * @Description:  header组件中右边的Userinfo子组件
 */

import React, { useState } from 'react'
import { Button } from 'antd'
import LoginModal from './loginModal';
import RegisterModal from './registerModal';

const Userinfo = () => {
    const [loginvisible, setloginVisible] = useState(false)
    const [registervisible, setregisterVisible] = useState(false)
    const loginonSubmit = () => {

    }
    const registeronSubmit = () => {

    }


    return (
        <div className='header-button'>
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
            <RegisterModal type={'注册'} visible={registervisible} onCancelModal={(e) => setregisterVisible(false)} onSubmit={registeronSubmit} />

        </div>

    )
}

export default Userinfo
