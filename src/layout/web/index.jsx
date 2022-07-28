/*
 * @Author: cyong
 * @Date: 2021-12-19 20:15:54
 * @LastEditors: cyong
 * @LastEditTime: 2022-07-28 19:41:34
 * @FilePath: \view\src\layout\web\index.jsx
 * @Description: 博客网站的主页面
 */

import React from 'react';
import { Layout, BackTop, Button } from 'antd';

//引入自定义组件
import Header from './header';
import Content from './content';
// import PmRibbon from 'pm-ribbon'
import styles from './index.module.less';

const { Footer } = Layout;


const Layouts = (props) => {
    return (
        <>

            <Layout className={styles.appContainer} >

                <Header />
                {/* <PmRibbon clickChangeDom={document} ribbonWidth="60" drawSite={[700, 500]} canClickChange="false" /> */}
                <Content {...props} className={styles.appContent} />
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    cyongBlog主页面 <Button type="link">github</Button>
                </Footer>
                <BackTop>
                    <div className={styles.bcakTop}>UP</div>
                </BackTop>

            </Layout>

        </>

    )
}

export default Layouts
