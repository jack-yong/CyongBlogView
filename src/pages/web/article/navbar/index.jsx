import React from 'react';
// import MarkNav from 'markdown-navbar';

import styles from './index.module.less';
// import 'markdown-navbar/dist/navbar.css';


const Navbar = (props) => {
    const { content } = props;
    return (
        <>
            {/* <MarkNav
                className={styles.navBar}
                source={content}
                headingTopOffset={10}
                ordered={false}
                updateHashAuto={false}
            // onNavItemClick={() => setNavShow?.(false)}
            /> */}
        </>
    )
}

export default Navbar;