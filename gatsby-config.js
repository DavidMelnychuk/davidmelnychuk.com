module.exports = {
  siteMetadata: {
    title: "David Melnychuk",
    description: "Software developer and lifelong learner.",
    author: "David Melnychuk",
    siteUrl: "https://davidmelnychuk.com",
    social: {
      twitter: "@david_melnychuk",
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-156556504-1",
      },
    },
    "gatsby-plugin-manifest",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/content/blog-posts/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "journals",
        path: `${__dirname}/src/content/journals/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "now-page",
        path: `${__dirname}/src/content/now-page/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 650,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
