import React from 'react'
import styles from './search.module.scss'

import searchIcon from '../../assets/images/icons/search.png'

const Search = () => (
    <div className={styles.Search}>
        <input type="text" className={styles.Input} placeholder="Search" />
        <div className={styles.Icon}>
            <img src={searchIcon} alt="Search" />
        </div>
    </div>
)

export default Search
