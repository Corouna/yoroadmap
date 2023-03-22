import React from "react";

const LeftChevronLogo = ({ width = 8, height = 12, fill = "#45464F" }) => {
  return (    
    <svg width={width} height={height} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.70504 1.41L6.29504 0L0.295044 6L6.29504 12L7.70504 10.59L3.12504 6L7.70504 1.41Z" fill={fill} />
    </svg>
  );
}

export default LeftChevronLogo;