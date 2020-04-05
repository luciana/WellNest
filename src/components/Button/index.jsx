import React from 'react'
import styles from './button.module.scss'

const Button = ({children, invert, blue}) => (
    <div className={`${invert ? styles.Invert : styles.Button} ${blue && styles.Blue}`}>
        {children}
    </div>
)

export default Button
