import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import React from 'react';

const MyUpload = (props) => (

    <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture"
        maxCount={1}
    >
        <Button icon={<UploadOutlined />}>上传图片</Button>
    </Upload>
);

export default MyUpload;