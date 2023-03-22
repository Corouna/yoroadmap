import React from "react";

const DayLeftLine = ({ x = 0, y = 0, height = 0 }) => {
    return (    
        <svg width="137" height={height} x={x} y={y} viewBox={`0 0 137 ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={`M1 ${height}V0H-1V${height}H1Z`} fill="#CAC4D0" mask="url(#path-1-inside-1_1057_39962)" />
        </svg>
    );
}

export default DayLeftLine;