import React, { useEffect, useState } from 'react';
import { Divider, Switch } from 'antd';
import DisBoard from './displayBoard';
import styles from './index.module.less'
import Chart from '@/components/Chart';
import axios from '@/utils/axios';
import simulationdata from './simulationdata';
import url from '@/utils/url';
import useCanlder from './useCanlder';
import useEcharts from '@/hooks/useEcharts';

const AdminHome = (props) => {

  const [boarData, setBoarData] = useState();
  const [pieData, setPieData] = useState();
  const [canlderData, setCanlderData] = useState();
  const [loading, setLoading] = useState(true);
  const [pieLoading, setPieLoading] = useState(true);
  const [canlderloading, setCanlderLoading] = useState(true);
  const [type, setType] = useState('tag');

  const requestYear = new Date().getFullYear();
  const canlderoption = useCanlder({ canData: canlderData, year: requestYear });
  const pieChartOpt = useEcharts({ data: pieData })

  const switchOpt = (status) => {
    // console.log(status);
    setPieLoading(true)
    if (status) {

      setType('tag');
    } else {
      setType('category');
    }
  }



  useEffect(() => {

    axios.get(url.homepage).then(res => {
      const { status, data } = res;
      if (status === '0' || status === 0) {
        // console.log(data, 'datadata');
        // let rbuildData = buildData(data);
        // console.log(rbuildData, "buildDatabuildData");
        setBoarData(data);
        setLoading(false);
      }
    });
    axios.get(url.canlderdata, { params: { year: requestYear } }).then(res => {
      const { status, data } = res;
      if (status === '0' || status === 0) {
        setCanlderData(data);
        setCanlderLoading(false);
        // console.log(data, 'datadata');
        // console.log(rbuildData, "buildDatabuildData");
      }
    });
  }, []);

  useEffect(() => {
    axios.get(url.articltype, { params: { aType: type } }).then(res => {
      const { status, data } = res;
      if (status === '0' || status === 0) {
        setPieData(data);
        setPieLoading(false);
        // console.log(data, 'datadata');
        // console.log(rbuildData, "buildDatabuildData");
      }
    });

  }, [type])




  return (
    <>
      <div className={styles.home}>
        <Divider>数据展示</Divider>
        <DisBoard boardata={boarData} DBloading={loading} />
        <Divider>图表展示</Divider>
        <div className={styles.chartshow}>
          <div className={styles.chartbox}>
            <div className={styles.title}>
              <Switch defaultChecked checkedChildren="标签" unCheckedChildren="类别" style={{ marginLeft: "10px", marginTop: '5px' }} onChange={switchOpt} />
              <h2>📊文章数据</h2>
            </div>
            <Chart option={pieChartOpt} chartStyles={styles.pieStyle} loading={pieLoading} />
          </div>
          <div className={styles.chartbox}>
            <h2>✔提交记录</h2>
            <Chart option={canlderoption} chartStyles={styles.canlderStyle} loading={canlderloading} />
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminHome;
