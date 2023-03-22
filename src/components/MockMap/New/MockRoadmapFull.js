import React from "react";
import { MockEventA, MockEventB, MockEventC, CurrentDayColumn, MockHeader } from ".";
import styles from "./../styles.module.css";

const MockRoadmapFull = props => {
    const height = 1030;

    return (
        <div className={styles.map_container}>
            <svg id="svg-sample" width="1128" height={height} xmlns="http://www.w3.org/2000/svg">
                <g>
                    <MockHeader x="0" y="0" />
                </g>
                <g>
                    <CurrentDayColumn x="711" y="56" height={height} />
                </g>
                <g>
                    <MockEventA x="0" y="66" />
                </g>
                <g>
                    <MockEventB x="0" y="378" />
                </g>
                <g>
                    <MockEventC x="0" y="690" />
                </g>
            </svg>
        </div>
    );
}

export default MockRoadmapFull;