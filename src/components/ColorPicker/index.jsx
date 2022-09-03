import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import styles from './index.module.less';

const ColorPicker = (props) => {
    const [displayCP, setDisplayCP] = useState(false);
    const [color, setColor] = useState(props.value ? props.value : '#000');
    function colorPickerClose() {
        setDisplayCP(false);
    }

    function colorOnChange(color) {
        setColor(color.hex);
    }


    function colorClick() {
        setDisplayCP(!displayCP);
    }
    return (
        <>
            <div className={styles.swatch} onClick={colorClick}>
                <div className={styles.color} style={{ backgroundColor: `${color}` }} />
            </div>
            {
                displayCP && <div className={styles.popover} onClick={colorPickerClose}>
                    <div className={styles.cover} style={{ backgroundColor: `${color}` }}>
                        <SketchPicker color={color && color} onChange={colorOnChange} />
                    </div>
                </div>
            }
        </>

    )



}

export default ColorPicker;