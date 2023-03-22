import React from "react";
import { MockEventA, MockEventB, MockEventC, MockEventD, MockEventE } from ".";
import styles from "./styles.module.css";

const MockMapOnly = props => {
    return (
        <div className={styles.map_container}>
            <svg id="svg-sample" width="1128" height="1500" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <MockEventA x="8" y="0" />
                </g>
                <g>
                    <MockEventB x="8" y="280" />
                </g>
                <g>
                    <MockEventC x="8" y="562" />
                </g>
                <g>
                    <MockEventD x="8" y="862" />
                </g>
                <g>
                    <MockEventE x="8" y="1142" />
                </g>
            </svg>
        </div>
    );
}

export default MockMapOnly;