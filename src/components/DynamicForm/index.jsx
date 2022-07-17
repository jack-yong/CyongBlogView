import React, { useEffect, useRef } from 'react';
import { Form, Input, Select, Button, message, Tag, DatePicker } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;

const DynamicForm = (props) => {
    const { configData, initialData, formStyle, formItemStyle, buttonName, addOrModifyService, inline } = props;
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
            if (buttonName !== '搜索') {
                form.resetFields();
            }
            // form.resetFields();
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

    //图标渲染的函数
    const tagRender = (props) => {
        const { value, label, closable, onClose, key } = props;
        // console.log(props, "propspropsprops");
        const onPreventMouseDown = (event) => {
            event.preventDefault();
            event.stopPropagation();
        };
        return (
            <Tag
                color={value}
                key={key}
                onMouseDown={onPreventMouseDown}
                closable={closable}
                onClose={onClose}
                style={{
                    marginRight: 3,
                }}
            >
                {label}
            </Tag>
        );
    }

    const createFormItem = () => {
        const formItemList = [];
        // console.log(configData, "configDataconfigDataconfigData111");
        configData.forEach((item) => {
            const { name, type, label, placeholder, list, rules, width, disabled = false, defaultValue } = item;
            switch (type) {
                case 'input':
                    const inputItem = <Form.Item  {...formItemStyle} key={name} name={name} label={label} rules={rules}>
                        <Input disabled={disabled} style={{ width }} placeholder={placeholder} />
                    </Form.Item>
                    formItemList.push(inputItem);
                    break;
                case 'select':
                    const selectItem = <Form.Item {...formItemStyle} key={name} name={name} label={label} rules={rules}>
                        <Select
                            disabled={disabled}
                            style={{ width }}
                            allowClear
                            showSearch
                            placeholder={placeholder}
                            filterOption={(input, option) => option.children.includes(input)}
                            filterSort={(optionA, optionB) =>
                                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                            }
                        >

                            {
                                list?.map((item) => <Select.Option key={item.key} value={item.value}>{item.title}</Select.Option>)
                            }
                        </Select>
                    </Form.Item>
                    formItemList.push(selectItem);
                    break;
                case 'multipleSelect':
                    const multipleSelectItem = <Form.Item {...formItemStyle} key={name} name={name} label={label} rules={rules} >
                        <Select
                            mode="multiple"
                            placeholder={placeholder}
                            showArrow
                            style={{ width }}
                            tagRender={tagRender}
                            options={list}
                            labelInValue={true}
                            optionFilterProp="label"
                        >

                        </Select>

                    </Form.Item>
                    formItemList.push(multipleSelectItem);
                    break;
                case 'photoUpload':
                    const photoUploadItem = <Form.Item {...formItemStyle} key={name} name={name} label={label} rules={rules}>

                    </Form.Item>
                    break;
                case 'datePicker':
                    const datePickerItem = <Form.Item {...formItemStyle} key={name} name={name} label={label} rules={rules}>
                        <RangePicker
                            ranges={{
                                Today: [moment(), moment()],
                                'This Month': [moment().startOf('month'), moment().endOf('month')],
                            }}
                        />
                    </Form.Item>
                    formItemList.push(datePickerItem);
                    break;
                default:

            }

        })

        const submitButton = <Form.Item wrapperCol={{ offset: 10, span: 16 }} key={'addbutton'}>  <Button style={{ marginRight: "72px" }} type="primary" onClick={onClickSubmit} >{buttonName}</Button>  </Form.Item>
        const resetButton = <Form.Item key={'delbutton'} > <Button type="primary" ghost onClick={() => { form.resetFields() }} >清空筛选项</Button></Form.Item >
        formItemList.push(submitButton);
        if (buttonName === '搜索') {
            formItemList.push(resetButton);
        }
        return formItemList;

    }


    return (
        <>
            <Form
                layout={inline ? 'inline' : 'horizontal'}
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