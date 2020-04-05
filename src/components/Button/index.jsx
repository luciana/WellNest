import React from 'react'
import styles from './button.module.scss'

const Button = ({children, invert}) => (
    <div className={invert ? styles.Invert : styles.Button}>
        {children}
    </div>
)

export default Button
