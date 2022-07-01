import React, { useState } from 'react'
import styles from './index.module.less'
import AddModal from '@/components/AddModal'
import { Input, Button } from 'antd'
const { Search } = Input;

const SearchBar = (props) => {
    const { searchService, addService, title, modalConfData, setVisible, visible } = props

    const [seardata, setSearData] = useState('')


    //控制文本框的布局
    const FormItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 }
        }
    }

    return (
        <div className={styles.head}>
            <Search className={styles.input} placeholder={'请输入需要搜索的内容'} defaultValue={seardata} onSearch={searchService} enterButton onChange={e => setSearData(e.target.value)} />
            <Button type="primary" onClick={() => setVisible(true)} >新增</Button>
            <AddModal visible={visible} title={title} modalConfData={modalConfData} modalStyle={FormItemLayout} addService={addService} onCancelModal={() => setVisible(false)} />
        </div>
    )
}

export default SearchBar;