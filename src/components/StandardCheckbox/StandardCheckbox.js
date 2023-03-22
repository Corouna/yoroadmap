import React from "react";
import styles from "./styles.module.css";

const StandardCheckbox = ({ value, label = '', color = 'white', setter = () => {}, tick = false }) => {

    const onChangeCheckbox = e => setter(e);

    return (
        <div className={styles.scb_check}>
            <input 
                className={styles.scb_check_input} 
                type="checkbox" 
                value={value} 
                id="standard-checkbox" 
                onChange={onChangeCheckbox} 
                checked={tick}
            />
            { label && <label className={styles.scb_check_label} htmlFor="standard-checkbox">{label}</label> }
        </div>
    );
}

export default StandardCheckbox;