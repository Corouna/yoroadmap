import React from "react";
import { MockHeader } from ".";
import styles from "./styles.module.css";

const MockHeaderOnly = props => {
    return (
        <div className={styles.map_container}>
            <svg id="svg-sample" width="1128" height="60" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <MockHeader x="0" y="0" />
                </g>
            </svg>
        </div>
    );
}

export default MockHeaderOnly;
;