import React from 'react'
import { Modal } from 'antd'
const AddModal = (props) => {
    const { isVisible, addsubmit, Cancel } = props

    return (
        <Modal title="新增类型" visible={isVisible} onOk={addsubmit} onCancel={Cancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    )
}

export default AddModal