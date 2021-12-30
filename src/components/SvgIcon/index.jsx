/*
 * @Author: cyong
 * @Date: 2021-12-21 21:11:55
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-30 10:24:15
 * @FilePath: \view\src\components\SvgIcon\index.jsx
 * @Description: 个人博客的图标svg组件
 */

import React  from 'react'
import PropTypes from 'prop-types'

const SvgIcon = props => {
    return (
    <svg className={`svg-icon ${props.className}`} aria-hidden='true' style={props.style}>
         <use xlinkHref={`#${props.type}`} />
    </svg>
    )
}

SvgIcon.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string
  }
  
  SvgIcon.defaultProps = {
    className: ''
  }

export default SvgIcon
