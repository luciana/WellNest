import React, {useState, useEffect} from 'react'
import {window} from 'browser-monads'
import styles from './sidenav.module.scss'

import calIcon from '../../assets/images/icons/cal.svg'
import timeIcon from '../../assets/images/icons/time.png'
import heartIcon from '../../assets/images/icons/heart.png'
import leaderIcon from '../../assets/images/icons/leader.png'
import favIcon from '../../assets/images/icons/fav.png'
import cogIcon from '../../assets/images/icons/cog.svg'
import logoutIcon from '../../assets/images/icons/logout.png'

import logoImage from '../../assets/images/logo.png'
import textImage from '../../assets/images/logo_text.png'

const items = [
    {
        title: 'Schedule',
        icon: calIcon
    },
    {
        title: 'Classroom',
        icon: timeIcon
    },
    {
        title: 'My Stats',
        icon: heartIcon
    },
    {
        title: 'Leaderboard',
        icon: leaderIcon
    },
    {
        title: 'Favourites',
        icon: favIcon
    },
    {
        title: 'Settings',
        icon: cogIcon
    },
]

const SideNav = ({avatar}) => {
    const [expanded, setExpanded] = useState(false)

    const handleExpand = (e) => {
        e.stopPropagation()
        setExpanded(true)
    }

    const handleHide = () => {
        setExpanded(false)
    }

    useEffect(() => {
        window.addEventListener('click', handleHide)
    }, [])

    return (
    <div className={expanded ? styles.Expanded : styles.SideNav}>
        <div className={styles.Top}>
            <img src={avatar} alt="Avatar" className={styles.Avatar} />
            <div className={styles.Logo}>
                <img src={logoImage} alt="WellNest" /><img src={textImage} alt="WellNest" />
            </div>
            <div className={styles.Nav}>
                {items.map(({title, icon}) => (
                    <div key={title} className={styles.Item}>
                        <div className={styles.Icon}>
                            <img src={icon} alt="Navigation Link" />
                        </div>
                        <div className={styles.Text}>{title}</div>
                    </div>
                ))}
            </div>
            </div>
        <div className={styles.Bottom}>
            <div role="button" className={styles.Button} onClick={handleExpand} />
            <div className={styles.Logout}>
                <div className={styles.Icon}>
                    <img src={logoutIcon} alt="Logout" />
                </div>
                <div className={styles.Text}>Log Out</div>
            </div>
        </div>
    </div>
)}

export default SideNav