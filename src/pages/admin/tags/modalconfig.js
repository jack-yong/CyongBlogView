const modalconfig = [
    {
        name: 'tagName',
        type: 'input',
        label: '标签名称',
        placeholder: '请输入标签名',
        rules: [{ required: true, message: 'Please input your tagname!' }]
    },
    {
        name: 'tagColor',
        type: 'colorInput',
        label: '标签颜色',
        placeholder: '请选择标签颜色',
        rules: [{ required: true, message: 'Please input your tagColor!' }]
    },

]
export default modalconfig