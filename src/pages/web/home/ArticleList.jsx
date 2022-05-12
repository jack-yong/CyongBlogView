/*
 * @Author: cyong
 * @Date: 2022-03-30 16:22:26
 * @LastEditors: cyong
 * @LastEditTime: 2022-04-06 20:46:07
 * @FilePath: \view\src\pages\web\home\ArticleList.jsx
 * @Description: 文章列表的组件
 */

import React from 'react'
import { useHistory } from 'react-router-dom'
// components
// import { Divider } from 'antd'
// import SvgIcon from '../../../components/Avatar'

const ArticleList = (props) => {
    // const history = useHistory()
    const { list } = props
    return (
        <ul className='recent-posts'>
            {/* {
                list.map(item => {
                    <li key={""} className="recent-post-item">

                    </li>
                })
            } */}
        </ul>

    )
}

export default ArticleList
