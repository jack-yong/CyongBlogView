import { Modal } from 'antd'
import DynamicForm from '@/components/DynamicForm'



const index = (props) => {
    const { visible, title, modalConfData, modalStyle, modalItemStyle, addService, onCancelModal } = props;
    return (
        <Modal
            title={title}
            visible={visible}
            onCancel={onCancelModal}
            footer={null}
        >
            <DynamicForm
                configData={modalConfData}
                formStyle={modalStyle}//form样式
                formItemStyle={modalItemStyle}//formitem样式
                addOrModifyService={addService}
                buttonName='添加'
            />

        </Modal>
    )
}

export default index