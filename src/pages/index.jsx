import React, { useEffect, useState, useRef } from 'react'
import { Helmet } from 'react-helmet'
import SideNav from '../components/SideNav'
import Button from '../components/Button'
import '../assets/styles/style.scss'

import avatarImage from '../assets/images/avatar.svg'
import heroImage from '../assets/images/hero.jpg'


import Search from '../components/Search'
import Thumbnail from '../components/Thumbnail'
import thumbnailImage from '../assets/images/thumbnails/thumb1.png'

const Index = () => {
	return (
		<>
			<Helmet>
				<title>WellNest</title>
			</Helmet>
			<SideNav avatar={avatarImage} />
			{/* <Search /> */}
			<div className="landing">
				<div className="content is-hidden-mobile">
					<h1>Happy, Healthy &<br />Inspired.</h1>
					<div className="buttons are-medium">
						<div className="button is-primary"><Button>LogIn</Button></div>
						<div className="button is-primary is-outlined"><Button invert>Create Account</Button></div>
					</div>
					<p>You are never alone. Happy, healthy,<br /> connected Wellness with WellNest.</p>
				</div>
				<div className="hero section content is-hidden-desktop is-hidden-tablet">
					<h1>Happy, Healthy &<br />Inspired.</h1>
					<img className="image" src={heroImage}></img>
					<div className="buttons are-small">
						<button className="button is-primary">LogIn</button>
						<button className="button is-primary is-outlined">Create Account</button>
					</div>
					<p>You are never alone. Happy, healthy,<br /> connected Wellness with WellNest.</p>
				</div>
			</div>
			<div className="video-grid">
				<div class="level">
					<div class=" buttons are-small" >
						<button className="button is-info">Open Cam</button>
						<button className="button is-info">Open Mic</button>
						<button className="button is-info is-outlined">Join Room</button>
						<button className="button is-info is-outlined">Hang Up</button>
					</div>
				</div>
				<div className="tile is-ancestor is-12">
					<div className="thumbnail tile"><Thumbnail image={heroImage} /></div>
					<div className="thumbnail tile"><Thumbnail image={heroImage} /></div>
					<div className="thumbnail tile"><Thumbnail image={heroImage} /></div>
					<div className="thumbnail tile"><Thumbnail image={heroImage} /></div>
					<div className="thumbnail tile"><Thumbnail image={heroImage} /></div>
					<div className="thumbnail tile"><Thumbnail image={heroImage} /></div>

				</div>
			</div>
		</>
	)
}

export default Index
