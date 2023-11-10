import React from 'react'
import styles from "./pagination.module.css"

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button  className={styles.button} disabled>Previous</button>
      <button  className={styles.button}>next</button>
    </div>
  )
}

export default Pagination
