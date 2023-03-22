import { useState } from "react";
import styles from "./styles.module.css";

const mockButtons = ['Weekly', 'Monthly', 'Daily'];

const StandardGroupButton = props => {
    const [active, setActive] = useState('weekly');

    const onToggleThis = type => {
        console.log('You are toggling for button ', type);
        setActive(type);
    }

    return (
        <div className={styles.bg_container} role="group" aria-label="Standard Button Group">
            {
                mockButtons.map(v => 
                    <button 
                        type="button" 
                        className={`${styles.btn} ${styles.btn_white} ${active === v.toLowerCase() ? styles.active : ''}`} 
                        onClick={() => onToggleThis(v.toLowerCase())}
                    >
                        {v}
                    </button>
                )
            }
        </div>
    );
};

export default StandardGroupButton;