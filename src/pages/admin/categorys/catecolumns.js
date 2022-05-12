const columns = [
    {
        title: '类别id',
        width: 100,
        dataIndex: 'cateid',
        key: 'cateid',
    },
    {
        title: '类别名称',
        width: 100,
        dataIndex: 'catename',
        key: 'catename',
    },
    {
        title: '类别图片',
        width: 100,
        dataIndex: 'cateimgurl',
        key: 'cateimgurl',
    },
    {
        title: '状态',
        width: 100,
        dataIndex: 'catestatus',
        key: 'catestatus',
    },
    {
        title: '创建时间',
        width: 100,
        dataIndex: 'createtime',
        key: 'createtime',
    },

    {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: '',
    },
];

export default columns