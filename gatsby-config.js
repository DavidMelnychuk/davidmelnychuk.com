module.exports = {
    siteMetadata: {
        title: 'David Melnychuk',
        description: 'Software developer and lifelong learner.',
        author: 'David Melnychuk',
        siteUrl: 'https://davidmelnychuk.com'
    },
    plugins: [
        'gatsby-plugin-manifest',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `GatsbyJS`,
              short_name: `GatsbyJS`,
              start_url: `/`,
              background_color: `#f7f0eb`,
              theme_color: `#a2466c`,
              display: `standalone`,
              icon:'src/images/icon.png',
            },
          },
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
    ]
}