import React from "react";

const CloseLogo = ({ width = 20, height = 20, fill = "#001F2A", clickHandler = () => {} }) => {
  return (    
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" onClick={clickHandler}>
        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill={fill} />
    </svg>
  );
}

export default CloseLogo;


