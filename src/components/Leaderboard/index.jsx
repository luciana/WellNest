import React, {useState} from 'react'
import styles from './leaderboard.module.scss'

import avatarImage from '../../assets/images/avatar.svg'

const Leaderboard = () => {
    const [expanded, setExpanded] = useState(false)
    
    const handleExpand = () => setExpanded(!expanded)

    return (
        <div className={styles.Leaderboard}>
            <div className={styles.Heading} onClick={handleExpand}>
                Leaderboard
            </div>
            <div className={styles.Body} style={{display: expanded ? 'block' : 'none'}}>
                <div className={styles.Level}>
                    <div className={styles.Icon}>
                        <img src={avatarImage} alt="User 1" />
                    </div>
                    <div className={styles.Stats}>
                        <div className={styles.User}>
                            <div className={styles.Name}>User 1</div>
                            <div className={styles.Points}>7539pts</div>
                        </div>
                        <div className={styles.Progress}>
                            <div className={styles.Bar} style={{background: 'linear-gradient(90deg, #78BCFE 50%, #E8E8E8 50%)'}} />
                            <div className={styles.Level}>Level 402</div>
                        </div>
                    </div>
                </div>
                <div className={styles.Level}>
                    <div className={styles.Icon}>
                        <img src={avatarImage} alt="User 1" />
                    </div>
                    <div className={styles.Stats}>
                        <div className={styles.User}>
                            <div className={styles.Name}>User 1</div>
                            <div className={styles.Points}>7539pts</div>
                        </div>
                        <div className={styles.Progress}>
                            <div className={styles.Bar} style={{background: 'linear-gradient(90deg, #78BCFE 50%, #E8E8E8 50%)'}}  />
                            <div className={styles.Level}>Level 402</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leaderboard
