import DynamicForm from '../DynamicForm';
import { Drawer } from 'antd';
// import { ExclamationCircleOutlined } from '@ant-design/icons';

const ModifyDrawer = (props) => {
    const { buttonName, title, visible, onClose, drawerConfData, drawerData, drawerStyle, drawerItemStyle, setDrawerVisible, ModifyService } = props;

    // const onClickClose = () => {
    //     Modal.confirm({
    //         title: '确认',
    //         content: '是否确认关闭改抽屉？（页面编辑数据将不会保存!）',
    //         icon: <ExclamationCircleOutlined />,
    //         onOk: () => {

    //         }
    //     });
    // };
    return (
        <Drawer
            title={title}
            visible={visible}
            onClose={onClose}
            width={"500px"}
            destroyOnClose={true}//关闭抽屉销毁内部元素
        >
            <DynamicForm
                buttonName={buttonName}
                configData={drawerConfData}//配置表单内容
                initialData={drawerData}//表单内容初始值
                formStyle={drawerStyle}//form样式
                formItemStyle={drawerItemStyle}//formitem样式
                setDrawerVisible={setDrawerVisible}
                visible={visible}
                addOrModifyService={ModifyService}
            />
        </Drawer >
    )
}

export default ModifyDrawer