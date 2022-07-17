import React, { useState, useEffect } from 'react';
import styles from './index.module.less';
import { useSelector } from 'react-redux'
import { categoryFilter, tagFilter } from '@/utils/index'
import { message, Divider } from 'antd';
import DynamicForm from '@/components/DynamicForm';
import MarkDown from '@/components/MarkDown';
import axios from '@/utils/axios';
import url from '@/utils/url'
const ArticleEdit = (props) => {
    const store = useSelector(state => ({
        tagList: state.tag,
        categoryList: state.category,
        userId: state.user.userId,

    }))
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState(store.tagList ? tagFilter(store.tagList) : []);
    const [category, setCategorys] = useState(store.categoryList ? categoryFilter(store.categoryList) : []);
    const [selectTags, setSelectTags] = useState();
    const [selectCategory, setSelectCategory] = useState('');
    // const [myconfigData, setConfigData] = useState();
    const articleId = parseInt(props.match.params.id);

    const configData = [
        {
            name: 'title',
            type: 'input',
            label: '文章标题',
            width: '17vw',
            placeholder: '请输入文章标题',
        },
        {
            name: 'categoryid',
            type: 'select',
            label: '文章类别',
            placeholder: '请选择文章类别',
            width: '10vw',
            list: category,
        },
        {
            name: 'tags',
            type: 'multipleSelect',
            label: '文章标签',
            placeholder: '请选择文章标签',
            width: '17vw',
            list: tags,
        },
        {
            name: 'status',
            type: 'select',
            label: '文章状态',
            placeholder: '请选择文章状态',
            width: '5vw',
            list: [
                {
                    key: '0',
                    value: '0',
                    title: '草稿'
                },
                {
                    key: '1',
                    value: '1',
                    title: '发布'
                }
            ],
        },
    ]

    useEffect(() => {
        const taglist = tagFilter(store.tagList);
        const categorylist = categoryFilter(store.categoryList);
        // console.log(taglist, categorylist, "ssssssssssssssssssss");
        setCategorys(categorylist);
        setTags(taglist);
        // console.log(tags, category, "333333333333333333333333333")
        // console.log(configData, "configDataconfigData");
        // configData[1].list = category;
        // configData[2].list = tags;

        // setConfigData(configData)
        // console.log(myconfigData, "configDataconfigData");
    }, [store.categoryList, store.tagList])


    useEffect(() => {

        if (articleId) {
        }

    }, [props.match.params])

    const addmodify = (params) => {
        params["content"] = content;
        params["coverImage"] = '';
        // console.log(JSON.stringify(params["tags"]), 'tagstags');
        params["tags"] = JSON.stringify(params["tags"]);
        console.log(params, "paramsparams");
        setContent("");
        axios.post(url.articleadd, params).then(res => {
            const { status } = res;
            if (status === 0 || status === '0') {
                message.success('添加成功!');
            }
            else {
                message.error('错误码' + status + ':' + res.message);
            }
        }).catch(error => {
            console.log('articleadd error', error);
        })

    }

    return (
        <div className={styles.page}>
            <div className={styles.title}>
                {
                    configData &&
                    <DynamicForm
                        configData={configData}
                        buttonName={articleId ? "修改" : "添加"}
                        addOrModifyService={addmodify}
                        inline={true}
                    />
                }


            </div>
            <Divider orientation="left">文章内容</Divider>
            <MarkDown content={content} setContent={setContent} />
        </div>
    )
}

export default ArticleEdit