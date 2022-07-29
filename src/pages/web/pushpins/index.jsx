import React, { useEffect } from 'react';
import axios from '@/utils/axios';
import url from '@/utils/url';
import styles from './index.module.less';
import { DISCUSS_AVATAR } from '@/config';
import { useState } from 'react';

const Pushpins = (porps) => {

    const [pushpinsData, setPushpinsData] = useState();

    useEffect(() => {
        axios.get(url.pushpinsall).then(res => {
            const { status, data } = res;
            if (status === '0' || status === 0) {
                console.log(data);
                setPushpinsData(data);
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={styles.pushpins}>
            <div className={styles.pushpinsList}>
                {
                    pushpinsData && pushpinsData.map(item => (
                        <div className={styles.item} key={item.id}>
                            <img src={DISCUSS_AVATAR} alt='' className={styles.avator} />
                            <div className={styles.content}>
                                {item.pushcontent}
                            </div>
                            <div className={styles.time}>
                                {item.pushtime}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Pushpins