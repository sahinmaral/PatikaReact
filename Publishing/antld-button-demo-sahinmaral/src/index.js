import React from 'react'
import styles from './styles.module.css'


export const Button = (props) => {
  switch (props.type) {
    case 'primary':
      return <button {...props} className={`${styles.btnPrimary} ${styles.btn}`}>{props.text}</button>

    case 'dashed':
      return <button {...props} className={`${styles.btnDashed} ${styles.btn}`}>{props.text}</button>

    case 'text':
      return <button {...props} className={`${styles.btnText} ${styles.btn}`}>{props.text}</button>

    case 'link':
      return <button {...props} className={`${styles.btnLink} ${styles.btn}`}><a href={props.href} className={`${styles.link}`}>{props.text}</a></button>

    default:
      return <button {...props} className={styles.btn}>{props.text}</button>
  }
}

