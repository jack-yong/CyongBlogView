import React, { useEffect, useRef } from 'react'
import { Form, Input, Select, Button, message } from 'antd'

const DynamicForm = (props) => {
    const { configData, initialData, formStyle, formItemStyle, buttonName, addOrModifyService } = props;
    const submitRef = useRef(false);
    const [form] = Form.useForm();

    useEffect(() => {
        if (form) {
            form.resetFields();
        }
    }, [initialData, form])

    //点击提交按钮,防止在限定时间内进行重复提交的操作
    const onClickSubmit = async () => {
        try {
            if (submitRef.current) { //防抖
                return;
            }
            submitRef.current = true;
            let fields = null;
            try {
                fields = await form.validateFields();
            } catch (err) {
                return;
            }
            console.log("fields", fields);
            await addOrModifyService(fields);
            // setRefresh((val) => val + 1); //刷新页面
            form.resetFields();
            // message.success(`${buttonName}成功`);
        }
        catch (err) {
            console.log(err, 'err');
            message.error(`${err?.message}`);
        }
        finally {
            setTimeout(() => {
                submitRef.current = false;
            }, 300);
        }

    };

    const createFormItem = () => {
        const formItemList = [];
        configData.forEach((item) => {
            const { name, type, label, placeholder, list, rules, disabled = false } = item;
            switch (type) {
                case 'input':
                    const inputItem = <Form.Item  {...formItemStyle} key={name} name={name} label={label} rules={rules}>
                        <Input disabled={disabled} placeholder={placeholder} />
                    </Form.Item>
                    formItemList.push(inputItem);
                    break;
                case 'select':
                    const selectItem = <Form.Item {...formItemStyle} key={name} name={name} label={label} rules={rules}>
                        <Select
                            disabled={disabled}
                            placeholder={placeholder}>
                            {
                                list?.map((item) => <Select.Option key={item.key} value={item.value}>{item.title}</Select.Option>)
                            }
                        </Select>
                    </Form.Item>
                    formItemList.push(selectItem);
                    break;
                default:

            }

        })

        const submitButton = <Form.Item wrapperCol={{ offset: 10, span: 16 }} key={'addbutton'}>  <Button style={{ marginRight: "72px" }} type="primary" onClick={onClickSubmit} >{buttonName}</Button>  </Form.Item>
        formItemList.push(submitButton);
        return formItemList;

    }


    return (
        <>
            <Form
                {...formStyle}
                form={form}
                initialValues={initialData}
            >
                {createFormItem()}

            </Form>
        </>
    )
}

export default DynamicForm