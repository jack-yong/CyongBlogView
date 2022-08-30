import React, { useEffect } from 'react';
import { Spin } from 'antd'
import axios from '@/utils/axios';
import url from '@/utils/url';
import styles from './index.module.less';
import { useState } from 'react';

const Link = (props) => {

    const [loading, setLoading] = useState(true);
    const [linkData, setLinkData] = useState();

    useEffect(() => {
        axios.get(url.linkall).then(res => {
            const { status, data } = res;
            if (status === '0' || status === 0) {
                setLinkData(buildKinds(data));
                setLoading(false);
            }
        })
    }, []);


    function buildKinds(originData) {
        const kindsObj = [{ name: '友链', item: [] }, { name: '推荐', item: [] }, { name: '小工具', item: [] }];
        originData.forEach(element => {
            if (element.linktype === 0) {
                kindsObj[0].item.push(element);
            }
            if (element.linktype === 1) {
                kindsObj[1].item.push(element);
            }
            if (element.linktype === 2) {
                kindsObj[2].item.push(element);
            }
        })

        return kindsObj;
    }


    function ListItem(props) {
        const { item } = props;
        const ListArr = item.map((element, idx) => {
            return <div className={styles.linkitem} key={idx}>
                <a href={element.linkurl} rel="noreferrer" target={'_blank'} className={styles.linkto}>
                    <div className={styles.left}>
                        <img src={element.linkimg} alt='' className={styles.avatar}></img>
                    </div>
                    <div className={styles.right}>
                        <span className={styles.title}>{element.linktitle}</span>
                        <span className={styles.desc}>{element.linkdesc}</span>
                    </div>
                </a>
            </div>
        })

        return ListArr;

    }

    return (
        <div className={styles.link}>
            <Spin spinning={loading}>
                <div className={styles.allKinds}>
                    {
                        linkData && linkData.map((item, idx) => (
                            <div className={styles.linkcontent} key={idx}>
                                <div className={styles.linktitle}>
                                    {
                                        item.name
                                    }
                                </div>
                                <div className={styles.linkList}>
                                    <ListItem item={item.item} />
                                </div>
                            </div>

                        ))
                    }
                </div>
            </Spin>
        </div>
    )
}

export default Link;