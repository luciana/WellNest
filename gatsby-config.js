require('dotenv').config({
	path: '.env.development',
})

module.exports = {
	siteMetadata: {
		title: 'Gatsby Template',
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Gatsby Template',
				short_name: 'Gatsby Template',
				start_url: '/',
				background_color: '#F6F6F6',
				theme_color: '#366897',
				display: 'standalone',
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
	],
}
