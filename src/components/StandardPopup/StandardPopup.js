import React from "react";
import styles from "./styles.module.css";

const posCollection = {
    'list menu': { top: -12, right: -125 },
    'avatar': { top: 80, right: -90 },
    'settings': { top: 80, right: -90 },
    'info': { top: 30, right: -250 }
}

const StandardPopup = ({ content, open, origin = "top left", target = 'list menu' }) => {
    return (
        <div
            id="standard-popup"
            className={`${styles.popup_menu} ${open ? styles.shown : ''}`}
            style={{ transformOrigin: origin, ...posCollection[target] }}
        >
            {typeof content === 'function' ? content() : content }
        </div>
    )
}

export default StandardPopup;