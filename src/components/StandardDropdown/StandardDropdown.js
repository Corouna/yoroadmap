import { useState } from "react";
import { StandardCheckbox } from "./../";
import { TickLogo } from "./../../assets/svg";
import styles from "./styles.module.css";

const StandardDropdown = ({ 
    label = "Label here", 
    color = "white", 
    multi = false, 
    open = false, 
    openSetter = () => {},
    menu,
    value,
    valueSetter = () => {}
}) => {
    // For collecting checkboxes
    const [checkboxValues, setCheckboxValues] = useState([]);

    const buttonColor = `btn_${color}`;

    // For multi = false
    const setterValue = (v) => valueSetter(v);

    // For multi = true. Set setter on the checkbox
    const checkerValue = (e) => {
        const v = e.target.value;
        
        // for unchecking 
        if (checkboxValues.includes(v)){
            let newArr = checkboxValues.filter(el => el !== v);
            valueSetter(newArr);
            setCheckboxValues(newArr);
        }

        // For checking
        if (!checkboxValues.includes(v)){
            let newArr = [ ...checkboxValues, v ];
            valueSetter(newArr);
            setCheckboxValues(newArr);
        }
    }


    const menuGenerator = () => {
        return (
            <ul className={`${styles.dropdown_menu} ${open && styles.show}`} aria-labelledby="standard-dropdown">
                {
                    menu.type === 'standard' && 
                    (
                        (menu.options).map( o =>  
                            <li key={`sorter_${o.id}`} className={styles.dropdown_list}>
                                <a className={styles.dropdown_item} href="#" onClick={() => setterValue(o.value)} >{`${o.label}`}</a>
                                {
                                    value === o.value &&
                                    <div className={styles.dropdown_tick}>
                                        <TickLogo width="12" height="8" fill="#0050E2" />
                                    </div>
                                }
                            </li>
                        )
                    )
                }
                {
                    menu.type === 'simple' && 
                    (
                        (menu.options).map( o =>  
                            <li key={`sorter_${o.id}`} className={styles.dropdown_list}>
                                <a className={styles.dropdown_item} href="#" onClick={() => setterValue(o.value)} >{`Sort by ${o.label}`}</a>
                                {
                                    value === o.value &&
                                    <div className={styles.dropdown_tick}>
                                        <TickLogo width="12" height="8" fill="#0050E2" />
                                    </div>
                                }
                            </li>
                        )
                    )
                }
                {
                    menu.type === 'group' && 
                    (
                        (menu.options).map( o =>  
                            <li key={`group_${o.id}`} className={styles.group_list}>
                                <div className={styles.group_container}>
                                    <div className={styles.group_label}>{o.group}</div>
                                    <ul>
                                        {
                                            o.options.map( c => (
                                                <li key={`filter_${c.id}`} className={styles.group_dropdown_list}>
                                                    <div className={styles.group_checker}>
                                                        <StandardCheckbox 
                                                            setter={checkerValue} 
                                                            value={c.label} 
                                                            tick={checkboxValues.includes(c.label)} 
                                                        />
                                                    </div>
                                                    <a className={styles.dropdown_item} href="#" onClick={() => checkerValue(c.value)} >{`Sort by ${c.label}`}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </li>
                        )
                    )
                }
            </ul>
        );
    }
    
    return (
        <div className={styles.dropdown}>
            <button
                className={`${styles.btn} ${styles[buttonColor]} ${styles.dropdown_toggle}`}
                type="button"
                id="standard-dropdown"
                data-toggle="dropdown"
                aria-expanded="false"
                onClick={() => openSetter()}
            >
                {label}
            </button>
            {menuGenerator()}
        </div>
    )
}

export default StandardDropdown;