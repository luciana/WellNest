import React from 'react'
import {Helmet} from 'react-helmet'
import SideNav from '../components/SideNav'
import Button from '../components/Button'
import '../assets/styles/style.scss'

import avatarImage from '../assets/images/avatar.svg'

const Index = () => {
	return (
	<>
		<Helmet>
			<title>WellNest</title>
		</Helmet>
		<SideNav avatar={avatarImage} />
		<div className="landing">
			<div className="content">
				<h1>Happy, Healthy &<br/>Inspired.</h1>
				<div className="buttons">
					<div className="button"><Button>LogIn</Button></div>
					<div className="button"><Button invert>Create Account</Button></div>
				</div>
				<p>You are never alone. Happy, healthy,<br/> connected Wellness with WellNest.</p>
			</div>
		</div>
	</>
	)
}

export default Index
