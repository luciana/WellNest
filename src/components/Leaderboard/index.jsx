import React, {useState, useEffect} from 'react'
import styles from './leaderboard.module.scss'

import avatarImage from '../../assets/images/avatar.svg'

const data = [
    {
        name: 'User 1',
        points: 0,
    },
    {
        name: 'User 2',
        points: 0,
    },
    {
        name: 'User 3',
        points: 0,
    }
]

const Leaderboard = () => {
    const [expanded, setExpanded] = useState(false)
    const [users, setUsers] = useState(data)
    
    const handleExpand = () => setExpanded(!expanded)

    const getPoints = () => {
        const newUsers = users.map(({name, points: oldPoints}) => ({name, points: Math.floor(Math.random() * 100)}))
        newUsers.sort((a, b) => a.points - b.points)
        setUsers(newUsers)
    }

    useEffect(() => {
        setInterval(getPoints, 2000)
    }, [])

    return (
        <div className={styles.Leaderboard}>
            <div className={styles.Heading} onClick={handleExpand}>
                Leaderboard
            </div>
            <div className={styles.Body} style={{display: expanded ? 'block' : 'none'}}>
                {users.map(({name, points}) => (
                    <div className={styles.Level}>
                        <div className={styles.Icon}>
                            <img src={avatarImage} alt="User 1" />
                        </div>
                        <div className={styles.Stats}>
                            <div className={styles.User}>
                                <div className={styles.Name}>{name}</div>
                                <div className={styles.Points}>{points}pts</div>
                            </div>
                            <div className={styles.Progress}>
                                {/* <div className={styles.Bar} style={{background: `linear-gradient(90deg, #78BCFE ${(points/100)*100}%, #E8E8E8 ${(points/10000)*100}%)`}} /> */}
                                <div className={styles.BarAbs}><div className={styles.Line} style={{width: `${(points/100)*100}%`}} /></div>
                                <div className={styles.Level}>Level 1</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Leaderboard
