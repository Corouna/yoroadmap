import React from "react";
import styles from "./styles.module.css";

const StandardButton = ({ 
    clickHandler = () => {}, 
    label = 'Button Label', 
    color = 'white', 
    width = '100%', 
    height = 40,
    fontSize = 14,
    padding = `0.375rem 1.5rem`,
    onHoverHandler = () => {},
    onHoverLeaveHandler = () => {},
    id = 'standard-button' 
}) => {
    const buttonColor = `btn_${color}`;
    
    return (
        <button 
            id={id}
            type="button" 
            className={`${styles.btn} ${styles[buttonColor]}`} 
            onClick={() => clickHandler()}
            style={{ width, height, fontSize, padding }}
            onMouseOver={() => onHoverHandler('hover')}
            onMouseLeave={() => onHoverLeaveHandler('unhover')}
        >
            {label}
        </button>
    );
}

export default StandardButton;