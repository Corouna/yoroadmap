import React from "react";

const PlusLogo = ({ width = 20, height = 20, fill = "#000000" }) => {
  return (    
    <svg width={40} height={40} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17H10V12H5V10H10V5H12V10H17V12H12Z" fill={fill} />
    </svg>
  );
}

export default PlusLogo;

