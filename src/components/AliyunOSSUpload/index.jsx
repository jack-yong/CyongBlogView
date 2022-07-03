import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, message, Upload } from 'antd';

const AliyunOSSUpload = ({ value, onChange }) => {
    return (
        <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
    )
}

export default AliyunOSSUpload 