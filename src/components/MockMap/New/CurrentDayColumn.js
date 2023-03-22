import React from "react";

const CurrentDayColumn = ({ x = 0, y = 0, height = 0, fill = "#0050E2" }) => {
    return (    
        <svg width="137" height={height} x={x} y={y} viewBox={`0 0 137 ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="136.571" height={height} transform="translate(0.285645)" fill={fill} fill-opacity="0.12" stroke={fill === "none" ? "#0050E2" : ""} strokeWidth={ fill === "none" ? "1" : "0" } />
        </svg>
    );
}

export default CurrentDayColumn;