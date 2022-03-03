/*
 * @Author: cyong
 * @Date: 2022-01-03 17:43:48
 * @LastEditors: cyong
 * @LastEditTime: 2022-03-03 18:47:23
 * @FilePath: \view\src\pages\layout\web\header\right\component\Userinfo.jsx
 * @Description:  header组件中右边的Userinfo子组件
 */

import React, { useState } from 'react'


//引入组件
import { Button, Dropdown, Menu } from 'antd'
import LoginModal from './loginModal';
import RegisterModal from './registerModal';
import AppAvatar from '../../../../../../components/Avatar'

//redux
import { useSelector, useDispatch } from 'react-redux';

//引入退出登录的aciton
import { logout } from '../../../../../../redux/actions/useraction'

const Userinfo = (props) => {
    const [loginvisible, setloginVisible] = useState(false);
    const [registervisible, setregisterVisible] = useState(false);
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.user);
    const { username, avatarurl } = userInfo

    const MenuOverLay = (
        <Menu>
            <Menu.Item>
                <span className='user-logout' onClick={e => dispatch(logout())}>
                    退出登录
                </span>
            </Menu.Item>
        </Menu>
    )

    //登录的相应函数
    const loginonSubmit = () => {

    }

    const registeronSubmit = () => {

    }


    return (
        <div className='header-button'>

            {username ? (
                <Dropdown placement='bottomCenter' overlay={MenuOverLay} trigger={['click', 'hover']}>
                    <div style={{ height: 55 }}>
                        <AppAvatar userInfo={userInfo} avatarurl={avatarurl} />
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
                    <RegisterModal type={'注册'} visible={registervisible} onCancelModal={(e) => setregisterVisible(false)} onSubmit={registeronSubmit} />
                </>
            )
            }

        </div>

    )
}

export default Userinfo
