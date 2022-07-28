import React from 'react';

// import PostCard from './PostCard';
// import Card from '@/components/Card';
// import Card from '@/components/Card';
import { List, Space, Divider, Tag } from 'antd';
import MyPagination from '@/components/MyPagination';
import url from '@/utils/url';
import useFetchList from '@/hooks/useFetchList';
import { LikeOutlined, MessageOutlined, EyeOutlined, FieldTimeOutlined, TagsOutlined, FolderOutlined } from '@ant-design/icons';
import styles from './index.module.less';
import { BlogImage } from '@/config';


const Section = (props) => {

    // const [artiList, setArtiList] = useState();
    const { dataList, loading, pagination } = useFetchList({ requestUrl: url.articlepostshow });

    // const  renderitemList=(item)=>{

    // }

    const IconText = ({ icon, text }) => (
        <Space >
            {React.createElement(icon)}
            {text}
        </Space>
    );

    const renderDesc = (createtime, category, taglist) => {
        return (
            <div className={styles.descshow}>
                <div className={styles.descshowitem}>
                    <FieldTimeOutlined className={styles.itemicon} />
                    {createtime}
                </div>
                <Divider type="vertical" />
                <div className={styles.descshowitem}>
                    <FolderOutlined className={styles.itemicon} />
                    <Tag key={category.categoryId} color="blue">
                        {category.categoryName}
                    </Tag>
                </div>
                <Divider type="vertical" />
                <div className={styles.descshowitem}>
                    <TagsOutlined className={styles.itemicon} />
                    {

                        taglist.map(item => (
                            <Tag color={item.tagColor}
                                key={item.tagId}
                                style={{ marginLeft: '2px' }}>{item.tagName}
                            </Tag>
                        ))
                    }

                </div>
            </div>
        )
    }

    const renderitemList = (item) => (
        // <Card loading={loading} className={styles.itemcard}>
        <div className={styles.listitem}>
            <List.Item
                key={item.id}
                // className={styles.listitem}
                actions={[
                    <IconText icon={EyeOutlined} text={item.views} key="start" />,
                    <IconText icon={LikeOutlined} text={item.likes} key="likes" />,
                    <IconText icon={MessageOutlined} text="2" key="message" />,
                ]}
                extra={

                    <img
                        width={260}
                        // height={150}

                        // styles={{ width: '250px', }}
                        style={{ paddingTop: '32px' }}
                        alt="logo"
                        src={item.coverimage ? item.coverimage : BlogImage}
                    />
                }
            >

                <List.Item.Meta
                    // avatar={<Avatar src={item.avatar} />}
                    title={<span className={styles.itemtitle}>{item.title}</span>}
                    description={renderDesc(item.createtime, item.category, item.tags)}
                />
                <p className={styles.content}>
                    {item.blogContent.replace(/<a(.*?)>(.*?)<\/a>/g, '$2').replace(/[# |**|`|>]/g, '')}
                </p>

            </List.Item>
        </div>

        // </Card>
    )

    return (

        <section
            className={styles.section}
        >
            {/* {
                dataList && dataList.map(item => (
                    // <PostCard data={item} loading={loading} key={item.id} />
                    <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{...pagination}}
                    dataSource={dataList}
                    renderItem={renderitemList}/>
                ))
            } */}
            {
                dataList &&
                <List
                    itemLayout="vertical"
                    loading={loading}
                    size="large"
                    dataSource={dataList}
                    renderItem={renderitemList} />
            }

            <MyPagination {...pagination} />
        </section>
    )
}

export default Section;