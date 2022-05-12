import React, { useState } from 'react'
import { Input, Button, message } from 'antd'
import RegularTable from '@/components/RegularTable'
import axios from '@/utils/axios'
import styles from './index.module.less'
import AddModal from './addModal'
import url from '@/utils/url'

import mycolumns from './catecolumns'

const { Search } = Input;

const Categorys = (props) => {

    const [data, setData] = useState([])
    const [cateName, setCateName] = useState('')
    const [isVisible, setisVisible] = useState(false)


    const cateSearch = () => {
        let ncate = cateName.replace(/\s+/g, "");
        if (ncate === '') {
            message.error('类型名不能为空！')
        }
        else {
            axios.post(url.categorysearch, { 'cateName': cateName }).then(res => {
                const { status, data } = res;
                if (status === 0 || status === '0') {
                    setData(data)
                }
                else {
                    message.error('错误码' + status + ':' + res.message)
                }
            })
        }
    }

    const cateAdd = () => {

    }

    return (
        <>
            <div className={styles.main}>
                <div className={styles.head}>
                    <Search className={styles.input} placeholder="类别名称" onSearch={cateSearch} enterButton onChange={e => setCateName(e.target.value)} />
                    <Button type="primary" onClick={() => setisVisible(true)} >新增</Button>
                </div>
                <RegularTable columns={mycolumns} data={data} />
                <AddModal isVisible={isVisible} addsubmit={cateAdd} Cancel={() => setisVisible(false)} />
            </div>
        </>
    )




}

export default Categorys