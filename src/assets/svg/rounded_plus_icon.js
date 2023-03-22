import React from "react";

const RoundedPlusIcon = ({ width = 41, height = 41, x = 0, y = 0, clickHandler = () => {} }) => {
  return (    
    <svg x={x} y={y} width={width} height={height} viewBox="0 0 41 41" shapeRendering="geometricPrecision" textRendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg">
        <g onClick={clickHandler}>
          <ellipse rx="20.5" ry="20.5" transform="translate(20.5 20.5)" fill="#dbebfa" strokeWidth="0" />
          <g transform="translate(-.000005 0)" fill="#000000" opacity="0.69">
              <rect width="2.146836" height="21.925133" rx="0" ry="0" transform="translate(19.426582 9.537434)" fillOpacity="0.5" stroke-width="0" />
              <rect width="2.146836" height="21.925133" rx="0" ry="0" transform="matrix(-.003613 0.999993-.999993-.003613 31.466373 19.466193)" fillOpacity="0.5" strokeWidth="0" />
          </g>
        </g>
    </svg>
  );
}

export default RoundedPlusIcon;