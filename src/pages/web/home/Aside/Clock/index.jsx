import React, { useState, useEffect } from 'react';
import Clock from 'react-clock';
import Card from '@/components/Card';
import 'react-clock/dist/Clock.less';
import styles from './index.module.less';


const MyClock = (props) => {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <Card className={styles.card}>

            <h3 className={styles.title}>Current Time:</h3>
            <Clock value={value} className={styles.clock} />

        </Card>

    )
}

export default MyClock