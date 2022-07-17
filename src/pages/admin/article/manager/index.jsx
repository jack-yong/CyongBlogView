import React, { useState, useEffect } from 'react';
import DynamicForm from '@/components/DynamicForm';
import RegularTable from '@/components/RegularTable';
import { useSelector } from 'react-redux'
import { categoryFilter, tagFilter } from '@/utils/index'
import { message, Button, Divider, Tag } from 'antd';
import useAntdTable from '@/hooks/useAntdTable';
import axios from '@/utils/axios';
import url from '@/utils/url';
import styles from './index.module.less'

const ArticleManger = (props) => {
    const store = useSelector(state => ({
        tagList: state.tag,
        categoryList: state.category,
        userId: state.user.userId,

    }))
    const [tags, setTags] = useState(store.tagList ? tagFilter(store.tagList) : []);
    const [category, setCategorys] = useState(store.categoryList ? categoryFilter(store.categoryList) : []);
    const [queryParams, setQueryParams] = useState({});

    const { tableProps, updateList, onSearch } = useAntdTable({
        requestUrl: url.articlesearch,
        queryParams,
    })


    const configData = [
        {
            name: 'title',
            type: 'input',
            label: '文章标题',
            width: '10vw',
            placeholder: '标题',
        },
        {
            name: 'categoryid',
            type: 'select',
            label: '文章类别',
            placeholder: '类别',
            width: '6vw',
            list: category,
        },
        {
            name: 'tags',
            type: 'multipleSelect',
            label: '文章标签',
            placeholder: '标签',
            width: '17vw',
            list: tags,
        },
        {
            name: 'timeinterval',
            type: 'datePicker',
            label: '创建日期区间',
        },
    ]


    const mycolumns = [
        {
            title: '标题',
            width: 200,
            dataIndex: 'title',
            key: 'title',
            sorter: true,
        },
        {
            title: '链接',
            width: 200,
            dataIndex: 'suburl',
            key: 'suburl',
        },
        {
            title: '封面',
            width: 100,
            dataIndex: 'coverimage',
            key: 'coverimage',
        },
        {
            title: '类别',
            width: 100,
            dataIndex: 'category',
            key: 'category',
            render: (category) => {
                if (JSON.stringify(category) !== '{}' && Object.keys(category).length !== 0) {
                    return <Tag color="blue" key={category.categoryId}>{category.categoryName}</Tag>;
                }
                else {
                    return '';
                }
            },
        },
        {
            title: '标签',
            width: 150,
            dataIndex: 'tags',
            key: 'tags',
            render: (tags) => {
                if (JSON.stringify(tags) !== '[]' && tags.length !== 0) {
                    console.log(tags, 'tagsssss');
                    let tagList = []
                    tags.forEach(item => {
                        // console.log('tagssss');
                        console.log(item, 'itemssss');
                        tagList.push(<Tag color={item.tagColor} key={item.tagId} style={{ marginTop: '5px' }}>{item.tagName}</Tag>);
                    })
                    return <div >
                        {tagList}
                    </div>
                }
                else {
                    return '';
                }
            },
        },
        {
            title: '文章状态',
            width: 100,
            dataIndex: 'status',
            key: 'status',
            render: (text) => {
                if (text === '0' || text === 0) {
                    return '草稿';
                }
                else {
                    return '发布'
                }
            },
            filters: [
                {
                    text: '草稿',
                    value: 0,
                },
                {
                    text: '发布',
                    value: 1,
                },
            ],
        },
        {
            title: '阅读量',
            width: 100,
            dataIndex: 'views',
            key: 'views',
            sorter: true,
        },
        {
            title: '点赞量',
            width: 100,
            dataIndex: 'likes',
            key: 'likes',
            sorter: true,
        },
        {
            title: '评论状态',
            width: 100,
            dataIndex: 'enablecomment',
            key: 'enablecomment',
            render: (text) => {
                if (text === '0' || text === 0) {
                    return '允许评论';
                }
                else {
                    return '不允许评论'
                }
            },
            filters: [
                {
                    text: '允许评论',
                    value: 0,
                },
                {
                    text: '不允许评论',
                    value: 1,
                },
            ],
        },
        {
            title: '创建时间',
            width: 100,
            dataIndex: 'createtime',
            key: 'createtime',
        },
        {
            title: '更新时间',
            width: 100,
            dataIndex: 'updatetime',
            key: 'updatetime',
            sorter: true,
        },
        {
            title: '操作',
            key: 'operation',
            fixed: 'right',
            width: 200,
            render: () => <><Button type="primary" size="small" className={styles.button}>修改</Button><Button type="primary" size="small" danger className={styles.button}>删除</Button> </>,
        },
    ]

    useEffect(() => {
        const taglist = tagFilter(store.tagList);
        const categorylist = categoryFilter(store.categoryList);
        setCategorys(categorylist);
        setTags(taglist);
    }, [store.categoryList, store.tagList])

    const search = (params) => {
        if (params["timeinterval"] && params["timeinterval"].length > 0) {
            let timeinterval = params["timeinterval"][0].format('YYYY-MM-DD') + '&&' + params["timeinterval"][1].format('YYYY-MM-DD');
            params["timeinterval"] = timeinterval;

        }
        if (params["tags"] && params["tags"].length > 0) {
            let returnList = [];
            let tagList = params["tags"];
            tagList.forEach(item => {
                returnList.push(item.label);
            })
            params["tags"] = returnList.toString();
        }
        console.log(params, "searchsearch");
        setQueryParams(params);
        onSearch({ ...params });
    }

    return (
        <>
            {
                configData &&
                <DynamicForm
                    configData={configData}
                    buttonName={'搜索'}
                    addOrModifyService={search}
                    inline={true}
                />
            }
            <Divider />
            <RegularTable tableProps={tableProps} columns={mycolumns} isopt={true} align={true} />
        </>
    )
}

export default ArticleManger