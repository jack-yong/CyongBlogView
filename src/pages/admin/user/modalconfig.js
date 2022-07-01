import { isTel } from '@/utils'
const modalconfig = [
    {
        name: 'username',
        type: 'input',
        label: '用户名',
        placeholder: '请输入用户名',
        rules: [
            {
                required: true,
                message: 'Please input your username!'
            },
            {
                // 下面是组件的验证函数
                validator: (_, value) =>
                    value.replace(/\s+/g, "") ? Promise.resolve() : Promise.reject(new Error('username should not only have blank')),
            }
        ]
    },
    {
        name: 'password',
        type: 'input',
        label: '密码',
        placeholder: '请输入密码',
        rules: [{ required: true, message: 'Please input your password!' }]
    },
    {
        name: 'repassword',
        type: 'input',
        label: '确认密码',
        placeholder: '请再次输入密码',
        rules: [
            {
                required: true, message: 'Please input your password again!'
            },
            ({ getFieldValue }) => ({
                validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }

                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
            }),
        ]
    },
    {
        name: 'email',
        type: 'input',
        label: '邮箱',
        placeholder: '请输入邮箱',
        rules: [{
            required: true, message: 'Please input your email in right way!',
        }, {
            type: 'email',
        },
        ]
    },
    {
        name: 'phone',
        type: 'input',
        label: '手机号',
        placeholder: '请输入手机号',
        rules: [{
            required: true, message: 'Please input your phone number!',
        }, {
            // 下面是组件的验证函数
            validator: (_, value) =>
                isTel(value) ? Promise.resolve() : Promise.reject(new Error('Please input your phone in right way!')),
        },
        ]
    }
]

export default modalconfig