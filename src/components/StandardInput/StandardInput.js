import { useState } from "react";
import styles from "./styles.module.css";

const StandardInput = ({ value, setter, placeholder, width, labelTransition = true }) => {
    const [focusClass, setFocusClass] = useState('');
    const [invisibleClass, setInvisibleClass] = useState('');

    const onFocus = () => {
        if (labelTransition){
            setFocusClass(' focused');
        }
    }

    const onBlur = evt => {
        let v = evt.target.value;

        if (labelTransition){
            if (v == '') setFocusClass('');
            if (v !== '') setFocusClass('focused');
        }
        
        if (!labelTransition){
            if (v == '') setInvisibleClass('');
            if (v !== '') setInvisibleClass('hide');
        }
    };

    const onChange = evt => {
        let v = evt.target.value;

        // save the value
        setter(v);

        if (!labelTransition){
            if (v == '') setInvisibleClass('');
            if (v !== '') setInvisibleClass('hide');
        }
    }

    return (
        <div 
            className={`
                ${styles.si_outline} 
                ${focusClass && styles.focused || ''} 
                ${invisibleClass && styles.hide || ''}`
            } 
            style={{ width: width || '100%' }}
        >
            <input 
                type="text" 
                id="standard-input" 
                className={styles.si_input}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyUp={onChange}
                value={value} 
            />
            <label 
                className={styles.si_label}
                htmlFor="standard-input"
                onFocus={onFocus}
                onBlur={onBlur}
            >
                {placeholder}
            </label>
        </div>
    );
}

export default StandardInput;