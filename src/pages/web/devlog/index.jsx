import React, { useEffect, useState } from 'react';
import { Timeline, Tag } from 'antd';
import axios from '@/utils/axios';
import url from '@/utils/url';
import styles from './index.module.less';
import {
    RedoOutlined,
    CheckOutlined,
    BugOutlined,
    RocketOutlined,
    TagsOutlined
} from '@ant-design/icons'
const Devlog = (props) => {

    const [devlogData, setDevlogData] = useState();


    const switchIcon = (kind) => {
        let linkname = '';
        let color = '';
        let icon = '';
        switch (kind) {
            case 0: case '0':
                linkname = '添加新功能';
                color = 'success';
                icon = <CheckOutlined />;
                break;
            case 1: case '1':
                linkname = '修复bug';
                color = 'error';
                icon = <BugOutlined />;
                break;
            case 2: case '2':
                linkname = '项目重构';
                color = 'processing';
                icon = < RedoOutlined />;
                break;
            case 3: case '3':
                linkname = '性能优化';
                color = 'warning';
                icon = <RocketOutlined />;
                break;
            default:
                break;
        }
        return (
            <Tag icon={icon} color={color}>
                {linkname}
            </Tag>
        )
    }


    useEffect(() => {
        axios.get(url.devlogall).then(res => {
            const { status, data } = res;
            if (status === '0' || status === 0) {
                console.log(data);
                setDevlogData(data);
            }

        })
    }, [])

    return (
        <div className={styles.devlog} >
            <Timeline >
                {
                    devlogData && devlogData.map(item => (
                        <Timeline.Item style={{ fontSize: '30px' }} key={item.id}>
                            <div className={styles.dlitem} >

                                <div className={styles.title}>
                                    {item.devlogtitle}

                                </div>
                                <div className={styles.icon}>
                                    {


                                        switchIcon(item.devlogtype)
                                    }

                                </div>
                                <div className={styles.content} >
                                    {item.devlogcontent}
                                </div>
                                <div className={styles.time}>
                                    {item.devlogCreateTime}
                                </div>
                            </div>
                        </Timeline.Item>
                    ))
                }
            </Timeline>
        </div>
    )
}

export default Devlog