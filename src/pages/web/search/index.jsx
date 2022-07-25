import React from 'react';
import styles from './index.module.less';
import { Modal, Button } from 'antd';

const Search = (props) => {
    const { visiable } = props;
    return (
        <>
            <Modal title="Basic Modal" visible={true} >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}

export default Search;