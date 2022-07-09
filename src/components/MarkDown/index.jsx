import React, { useEffect } from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { useState } from 'react';
import 'highlight.js/styles/atom-one-light.css';
import styles from './index.module.less';
import { Input } from 'antd'

const { TextArea } = Input;

const MarkDown = (props) => {
    const { content, setContent } = props;

    const [htmldata, setHtmlData] = useState('')
    hljs.configure({
        // classPrefix: 'hljs-',
        languages: ['CSS', 'HTML', 'JavaScript', 'TypeScript', 'Markdown']
    });

    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: code => hljs.highlightAuto(code).value,
        gfm: true, // 默认为true。 允许 Git Hub标准的markdown.
        tables: true, // 允许支持表格语法（该选项要求 gfm 为true）
        breaks: true, // 默认为false。 允许回车换行。该选项要求 gfm 为true。
        // smartLists: true, // 使用比原生markdown更时髦的列表
    })

    useEffect(() => {
        let htmlcode = marked(content);
        setHtmlData(htmlcode);
    }, [content])

    return (
        <div className={styles.makedarea}>


            <TextArea className={styles.edit} onChange={(e) => { setContent(e.target.value) }} value={content} placeholder="编辑内容" />



            <div className={styles.showarea} dangerouslySetInnerHTML={{ __html: htmldata }}></div>
        </div>
    )
}

export default MarkDown