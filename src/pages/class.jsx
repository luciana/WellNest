import React from 'react'
import {Helmet} from 'react-helmet'
import SideNav from '../components/SideNav'
import Button from '../components/Button'
import '../assets/styles/style.scss'

import avatarImage from '../assets/images/avatar.svg'
import logoImage from '../assets/images/logo.png'
import textImage from '../assets/images/logo_text.png'
import Search from '../components/Search'
import Leaderboard from '../components/Leaderboard'

import iconHeart from '../assets/images/icons/heart-red.png'
import iconBookmark from '../assets/images/icons/bookmark.png'
import iconSend from '../assets/images/icons/send.png'

import thumbnailImage1 from '../assets/images/thumbnails/thumb1.png'
import thumbnailImage2 from '../assets/images/thumbnails/thumb2.png'
import thumbnailImage3 from '../assets/images/thumbnails/thumb3.png'
import thumbnailImage4 from '../assets/images/thumbnails/thumb4.png'
import thumbnailImage5 from '../assets/images/thumbnails/thumb5.png'
import thumbnailImage6 from '../assets/images/thumbnails/thumb6.png'
import thumbnailImage7 from '../assets/images/thumbnails/thumb7.png'

const Index = () => {
	return (
		<>
			<Helmet>
				<title>Classroom</title>
			</Helmet>
			<SideNav avatar={avatarImage} />
			<div className="class">
				<div className="header">
					<div className="logo">
						<img src={logoImage} alt="WellNest" />
						<img src={textImage} alt="WellNest" />
					</div>
					<div className="search">
						<Search />
					</div>
				</div>
				<div className="actions">
					<div className="actions-button">
						Open Cam
					</div>
					<div className="actions-button">
						Open Mic
					</div>
					<div className="actions-button inverted">
						Leave Room
					</div>
					<div className="actions-button inverted">
						Hang Up
					</div>
				</div>
				<div className="instructor">
					<div className="perks">
						<h1 className="title">Instructor <img src={iconHeart} alt="Instructor" /></h1>
						<span className="name">Jack Smith</span>
						<span className="class-number">Class 225 <img src={iconBookmark} alt="Bookmark" /></span>
						<span className="invite">Invite a friend <img src={iconSend} alt="Invite a friend" /></span>
					</div>
					<div className="video">
						<div className="video-container">
							<iframe
								src="https://www.youtube.com/embed/UBMk30rjy0o?autoplay=1&controls=0&mute=1&showinfo=0&autohide=1&disablekb=1&fs=0&modestbranding=1&rel=0"
								title="Workout Video"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								frameBorder="0"
								webkitallowfullscreen="true"
								mozallowfullscreen="true"
								allowFullScreen
							/>
						</div>
					</div>
				</div>
				<div className="atendees">
					<h1>Classmate Livefeed</h1>
					<div className="items">
						<div className="item">
							<img src={thumbnailImage1} alt="thumb 1" />
						</div>
						<div className="item">
							<img src={thumbnailImage2} alt="thumb 1" />
						</div>
						<div className="item">
							<img src={thumbnailImage3} alt="thumb 1" />
						</div>
						<div className="item">
							<img src={thumbnailImage4} alt="thumb 1" />
						</div>
						<div className="item">
							<img src={thumbnailImage5} alt="thumb 1" />
						</div>
						<div className="item">
							<img src={thumbnailImage6} alt="thumb 1" />
						</div>
					</div>
				</div>
			</div>
			<Leaderboard />
		</>
	)
}

export default Index
