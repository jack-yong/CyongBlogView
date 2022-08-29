import React from 'react';
import styles from './index.module.less';
import { EditOutlined } from '@ant-design/icons';
const index = (props) => {
    const { portData, modifyService } = props;
    return (
        <div className={styles.list}>
            {
                portData && portData.map((item) => (
                    <div key={item.id} className={styles.card}>

                        <div className={styles.title}>
                            {item.portfoliotitle}
                        </div>
                        <br></br>
                        <div className={styles.desc}>
                            {item.portfolioContent}
                        </div>

                        <span className={styles.modify} onClick={() => modifyService(item)}>
                            <EditOutlined />
                        </span>
                    </div>
                ))
            }
        </div>
    )
}

export default index;