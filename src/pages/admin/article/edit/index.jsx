import React, { useState, useEffect } from 'react';
import styles from './index.module.less';
import { message, button, Form, Input, Select } from 'antd';


const ArticleEdit = (props) => {

    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState([]);
    const [category, setCategorys] = useState([]);
    const [selectTags, setSelectTags] = useState([]);
    const [selectCategory, setSelectCategory] = useState('');
    const articleId = parseInt(props.match.params.id);

    const configData = [
        {
            name: 'title',
            type: 'input',
            label: '文章标题',
            placeholder: '请输入文章标题',
        },
        {
            name: 'category',
            type: 'select',
            label: '文章类别',
            placeholder: '请选择文章类别',
            list: [

            ]
        },
        {
            name: 'tags',
            type: 'multipleSelect',
            label: '文章标签',
            placeholder: '请选择文章标签',
            list: [

            ]
        },
    ]

    useEffect(() => {
        console.log(props.match.params.id)


    }, [props.match.params])

    return (
        <div className={styles.page}>
            <div className={styles.title}>


            </div>


        </div>
    )
}

export default ArticleEdit