import React from 'react'
import { Card, Spin } from 'antd';
import { NavLink as Link } from 'react-router-dom'
import styles from './index.module.less'


const DisBoard = (props) => {
    const { boardata, DBloading } = props;



    const buildData = (mydata) => {
        let rdata = [];
        let articleObj = { name: '文章相关', data: [] };
        let userObj = { name: '用户相关', data: [] };
        let otherObj = { name: '其他', data: [] };
        if (Array.isArray(mydata) && mydata.length !== 0) {
            mydata.map(item => {
                const { name, Num } = item;
                let obj = {};
                switch (name) {
                    case 'article':
                        obj.name = '文章数量';
                        obj.num = Num;
                        obj.key = '/admin/article/manager';
                        articleObj.data.push(obj);
                        break;
                    case 'tag':
                        obj.name = '标签数量';
                        obj.num = Num;
                        obj.key = '/admin/tags';
                        articleObj.data.push(obj);
                        break;
                    case 'category':
                        obj.name = '分类数量';
                        obj.num = Num;
                        obj.key = '/admin/categorys';
                        articleObj.data.push(obj);
                        break;
                    case 'LMR':
                        obj.name = '留言数量';
                        obj.num = Num;
                        obj.key = '/admin/messages';
                        userObj.data.push(obj);
                        break;
                    case 'comment':
                        obj.name = '评论数量';
                        obj.num = Num;
                        obj.key = '/admin/messages';
                        userObj.data.push(obj);
                        break;
                    case 'user':
                        obj.name = '用户数量';
                        obj.num = Num;
                        obj.key = '/admin/user';
                        userObj.data.push(obj);
                        break;
                    case 'link':
                        obj.name = '友链数量';
                        obj.num = Num;
                        obj.key = '/admin/links';
                        userObj.data.push(obj);
                        break;
                    case 'portfolio':
                        obj.name = '作品数量';
                        obj.num = Num;
                        obj.key = '/admin/portfolio';
                        otherObj.data.push(obj);
                        break;
                    case 'DL':
                        obj.name = '开发日志数量';
                        obj.num = Num;
                        obj.key = '/admin/log';
                        otherObj.data.push(obj);
                        break;
                    case 'DS':
                        obj.name = '说说数量';
                        obj.num = Num;
                        obj.key = '/admin/pushpins';
                        otherObj.data.push(obj);
                        break;
                    default:
                        break;
                }
            })
            rdata.push(articleObj);
            rdata.push(userObj);
            rdata.push(otherObj);

        }
        return rdata;
    }


    return (
        <Spin spinning={DBloading}>
            <div className={styles.board}>
                {
                    boardata && buildData(boardata).map((item) => {
                        return (
                            <Card key={item.name} style={{ borderRadius: '5px', boxShadow: '0 2px 8px #f0f1f2' }}  >
                                <div key={item.name} className={styles.boxlist} >
                                    <div className={styles.title} >
                                        <span className={styles.line}></span>
                                        <span>{item.name}</span>
                                    </div>
                                    <div className={styles.info}>
                                        {

                                            item.data.map((value) => {
                                                return (
                                                    <Link to={value.key} key={value.name}>
                                                        <div className={styles.infolist} >
                                                            <p className={styles.title3}>{value.name}</p>
                                                            <p className={styles.datanum}>{value.num}</p>
                                                        </div>
                                                    </Link>
                                                )

                                            })
                                        }
                                    </div>
                                </div>

                            </Card>
                        )
                    })
                }
            </div>
        </Spin>


    )
}

export default DisBoard;
