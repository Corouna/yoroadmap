import React from "react";
import styles from "./styles.module.css";

const SpinnerLogo = ({ width = 50, height = 50 }) => {
  return (    
    <svg className={styles.svg_spinner} viewBox="0 0 50 50">
        <circle className={styles.svg_spinner_path} cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
    </svg>
  );
}

export default SpinnerLogo;