import React from 'react'
import styles from './thumbnail.module.scss'

import playIcon from '../../assets/images/icons/play.png'

const Thumbnail = ({image}) => (
    <div className={styles.Thumbnail}>
        <img src={image} alt="Preview Stream" />
        <img src={playIcon} className={styles.Play} alt="Play Stream" />
    </div>
)

export default Thumbnail
