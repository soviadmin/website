/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require(`path`)
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "SOVI",
    author: "Katie & Khe",
    description: "SOVI's Website",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `oog`,
        path: `${__dirname}/src/assets/images/oog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `equipment`,
        path: `${__dirname}/src/assets/images/equipment`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icon`,
        path: `${__dirname}/src/assets/images/icon`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logo`,
        path: `${__dirname}/src/assets/images/logo`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `map`,
        path: `${__dirname}/src/assets/images/map`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `svg`,
        path: `${__dirname}/src/svg`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mardown-content`,
        path: `${__dirname}/src/markdown-content`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-bb",
        short_name: "starter",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "minimal-ui",
        icon: "src/assets/images/logo/icon.png", // This path is relative to the root of the site. #663399
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`,
  ],
}
