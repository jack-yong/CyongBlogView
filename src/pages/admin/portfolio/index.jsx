import React, { useEffect, useState } from 'react';
import { Button, Divider, Modal, message } from 'antd';
import axios from '@/utils/axios';
import url from '@/utils/url';
import PortList from './portList';
import DynamicForm from '@/components/DynamicForm';
import ModifyDrawer from '@/components/ModifyDrawer';
import { drawerStyle, drawerItemStyle } from '@/config'

const Portfolio = () => {


    const [portData, setPortData] = useState();
    const [visible, setVisible] = useState(false);
    const [modifyStatus, setModifyStatus] = useState(false);
    const [drawerData, setDrawerData] = useState();
    const modalconfig = [
        {
            name: 'portfoliotitle',
            type: 'input',
            label: '作品标题',
            rules: [{ required: true, message: 'Please input your portfolio title!' }]
        },
        {
            name: 'portfolioimage',
            type: 'input',
            label: '作品图片',
        },
        {
            name: 'portfoliourl',
            type: 'input',
            label: '作品地址',
            rules: [{ required: true, message: 'Please input your portfolio url!' }]

        },
        {
            name: 'portfolioContent',
            type: 'textarea',
            label: '作品内容',
            placeholder: '请输入作品描述',
            rules: [{ required: true, message: 'Please input your Portfolio content!' }]
        },
    ]

    const portfolioAdd = (params) => {
        axios.post(url.portfolioadd, params).then(res => {
            const { status } = res;
            if (status === 0 || status === '0') {
                message.success('添加成功!');
                fetchData();
            }
            else {
                message.error('错误码' + status + ':' + res.message);
            }
            setVisible(false);
        }).catch(error => {
            console.log('pushpinsadd error', error);
        })
    }


    function fetchData() {
        axios.get(url.portfolioall).then(res => {
            const { status, data } = res;
            if (status === 0 || status === '0') {
                setPortData(data);
            }
            else {
                message.error('错误码' + status + ':' + res.message);
            }
        }).catch(error => {
            console.log('portfolio fetch error', error);
        })
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <Button type='primary' onClick={() => setVisible(true)} >添加作品</Button>
            <Divider />
            <PortList portData={portData} modifyService={modifyButton} />

            <ModifyDrawer
                title={'开发日志修改'}
                buttonName={'修改'}
                visible={modifyStatus}
                onClose={onCloseDrawer}
                drawerConfData={modalconfig}
                drawerData={drawerData}
                drawerStyle={drawerStyle}
                drawerItemStyle={drawerItemStyle}
                setDrawerVisible={setModifyStatus}
                ModifyService={() => {
                    console.log('modify drawer');
                }}
            />
            <Modal
                title='添加作品'
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={null}
            >
                <DynamicForm
                    configData={modalconfig}
                    addOrModifyService={portfolioAdd}
                    buttonName='添加'
                />
            </Modal>
        </div>
    )


    //关闭当前抽屉
    function onCloseDrawer() {
        setDrawerData(undefined); //关闭抽屉清空数据
        setModifyStatus(false);
    }

    function modifyButton(record) {
        setDrawerData(record);
        setModifyStatus(true);
    }
}

export default Portfolio;