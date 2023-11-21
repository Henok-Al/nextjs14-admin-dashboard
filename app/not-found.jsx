// pages/404.js
import React from "react";
import styles from "./ui/custom404/custom404.module.css";

const Custom404 = () => {
  return (
    <div className={styles.errorContainer}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
    </div>
  );
};

export default Custom404;
