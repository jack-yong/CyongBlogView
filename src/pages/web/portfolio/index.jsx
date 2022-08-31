import React, { useState, useEffect } from 'react';
import { Spin, message } from 'antd';
import axios from '@/utils/axios';
import url from '@/utils/url';
import styles from './index.module.less';

const Portfolio = (props) => {

    const [portfolioData, setPortfolioData] = useState();
    const [loading, setLoading] = useState(true);


    function fetchData() {
        axios.get(url.portfolioall).then(res => {
            const { status, data } = res;
            if (status === 0 || status === '0') {
                setLoading(false)
                setPortfolioData(data);
            }
            else {
                message.error('错误码' + status + ':' + res.message);
            }
        }).catch(error => {
            console.log('portfolio fetch error', error);
        })
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className={styles.portfolio}>
            <Spin spinning={loading}>
                <div className={styles.list}>
                    {
                        portfolioData && portfolioData.map((item) => (
                            <div key={item.id} className={styles.card}>
                                <a href={item.portfoliourl} target="_blank" rel="noreferrer">
                                    <div className={styles.title}>
                                        {item.portfoliotitle}
                                    </div>
                                    <br></br>
                                    <div className={styles.desc}>
                                        {item.portfolioContent}
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </Spin>

        </div>
    )
}

export default Portfolio;