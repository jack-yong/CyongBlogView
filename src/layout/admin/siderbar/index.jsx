/*
 * @Author: cyong
 * @Date: 2022-03-30 19:10:14
 * @LastEditors: cyong
 * @LastEditTime: 2022-07-21 18:51:52
 * @FilePath: \view\src\layout\admin\siderbar\index.jsx
 * @Description: 管理端侧边栏控件
 */
import React from 'react'
import { withRouter } from 'react-router-dom'
import { Menu } from 'antd'
// import menu from './menu'
import menu from './menus';
import { getMenuOpenKeys } from '@/utils/index';
// const SubMenu = Menu.SubMenu


const Siberbar = (props) => {
    // 菜单渲染
    // function renderMenu(list) {
    //     const renderRoute = item => {
    //         if (item.hidden) return null
    //         if (item.children) {
    //             return (
    //                 <SubMenu
    //                     key={item.path}
    //                     title={
    //                         <span>

    //                             {item.name}
    //                         </span>
    //                     }
    //                     icon={item.icon}>
    //                     {item.children.map(r => renderRoute(r))}
    //                 </SubMenu>
    //             )
    //         } else {
    //             return (
    //                 item.name && (
    //                     <Menu.Item key={item.path} icon={item.icon}>
    //                         <NavLink to={item.path}>

    //                             <span>{item.name}</span>
    //                         </NavLink>
    //                     </Menu.Item>
    //                 )
    //             )
    //         }
    //     }
    //     return list.map(l => renderRoute(l))
    // }
    const target = getMenuOpenKeys(menu).find(d => d.pathname === props.selectedKeys[0]);
    const openKeys = target ? [target.openKey] : [];
    // const menuClick = (e) => {
    //     console.log('click ', e);
    // }
    return (
        <Menu
            defaultOpenKeys={openKeys}
            // defaultSelectedKeys={props.selectedKeys}
            selectedKeys={props.selectedKeys}
            mode='inline'
            // onClick={menuClick}
            style={{ height: '100%', borderRight: 0 }}
            items={menu}>
            {/* {renderMenu(menu)} */}
        </Menu>
    )
}

export default withRouter(Siberbar)