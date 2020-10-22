/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
*/
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "SOVI - ",
    author: 'Katie & Khe',
    description: "SOVI's Website",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-bb',
        short_name: 'starter',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'minimal-ui',
        icon: 'src/assets/images/web-icon.png', // This path is relative to the root of the site. #663399
      },
    },
    `gatsby-plugin-offline`,
  ],
}
