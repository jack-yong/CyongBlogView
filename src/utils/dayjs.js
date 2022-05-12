/*
 * @Author: cyong
 * @Date: 2022-04-05 18:33:44
 * @LastEditors: cyong
 * @LastEditTime: 2022-04-05 18:33:45
 * @FilePath: \view\src\utils\dayjs.js
 * @Description: 日期处理的函数
 */

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export default dayjs
