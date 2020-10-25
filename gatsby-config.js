const config = require("./src/config")

module.exports = {
  siteMetadata: {
    title: "Yimeng's blog",
    description:
      "A simple blog built with Gatsby, React, MDX and GraphQL, this blog is created for recording every wonderful moment in my son YIMENG's grown-up.",
    url: "",
    image: "/yimeng.jpeg",
    twitterUsername: "@jiazhenghao",
    author: "Zhenghao Jia",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto mono`, `muli\:400,400i,700,700i`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
  ],
}
