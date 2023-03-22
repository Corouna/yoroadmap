import React from "react";

const RightChevronLogo = ({ width = 8, height = 12, fill = "#45464F" }) => {
  return (    
    <svg width={width} height={height} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.70504 0L0.295044 1.41L4.87504 6L0.295044 10.59L1.70504 12L7.70504 6L1.70504 0Z" fill={fill} />
    </svg>
  );
}

export default RightChevronLogo;