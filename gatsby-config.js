/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: 'Simple Url Constructor',
    titleTemplate: '%s | Url Constructor',
    description: 'A helper page that constructs useful links based on user input',
    author: 'Fidz.Dev',
    url: 'https://fidz.dev', // No trailing slash allowed!
    image: '/app-banner.png', // Path to your image you placed in the 'static' folder
    twitterUsername: 'sohafidz',
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Simple URL Constructor`,
        short_name: `URL Constructor`,
        start_url: `/`,
        background_color: `#F7FAFC`,
        theme_color: `#2B6CB0`,
        display: `standalone`,
        icon: `static/app-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
