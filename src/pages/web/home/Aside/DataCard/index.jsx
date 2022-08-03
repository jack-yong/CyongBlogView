import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Card from '@/components/Card';
import axios from '@/utils/axios';
import url from '@/utils/url';
import { useHistory } from 'react-router-dom';
import styles from './index.module.less';



const DataCard = (props) => {
    const [ACTData, setACTData] = useState();
    const arrLink = ['/search', '/category', '/tags',]
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        axios.get(url.ACTData).then(res => {
            const { status, data } = res;
            if (status === 0 || status === '0') {
                setLoading(false);
                setACTData(data);
            }
            else {
                console.log('DataCard get data error!');
            }
        })
            .catch(error => {
                console.log('DataCard get data hanppend error', error);
            })
    }, [])
    return (
        <Card className={styles.card} loading={loading}>
            {
                ACTData &&
                ACTData.map((item, index) => (

                    <div className={styles.showitem} key={index} onClick={(e) => { history.push(arrLink[index]) }}>
                        <div className={styles.title}>
                            {item.title}
                        </div>
                        <div className={styles.content}>
                            {item.Num}
                        </div>
                    </div>

                ))
            }
        </Card>
    )
}

export default withRouter(DataCard)