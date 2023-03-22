import React from "react";
import { MockHeader, MockEventA, MockEventB, MockEventC, MockEventD, MockEventE } from ".";
import styles from "./styles.module.css";

const MockRoadmap = props => {
    return (
        <div className={styles.map_container}>
            <svg id="svg-sample" width="1128" height="1500" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <MockHeader x="0" y="0" />
                </g>
                <g>
                    <MockEventA x="0" y="60" />
                </g>
                <g>
                    <MockEventB x="0" y="342" />
                </g>
                <g>
                    <MockEventC x="0" y="624" />
                </g>
                <g>
                    <MockEventD x="0" y="906" />
                </g>
                <g>
                    <MockEventE x="0" y="1188" />
                </g>
            </svg>
        </div>
    );
}

export default MockRoadmap;