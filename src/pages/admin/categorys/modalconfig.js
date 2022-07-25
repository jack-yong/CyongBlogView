const modalconfig = [
    {
        name: 'categoryimage',
        type: 'photoUpload',
        label: '类别图片',
    },
    {
        name: 'cateName',
        type: 'input',
        label: '类别名称',
        placeholder: '请输入类别名',
        rules: [{ required: true, message: 'Please input your catename!' }]
    },

]
export default modalconfig