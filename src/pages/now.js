import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const NowPage = ({ data }) => {
  const latestNowPost = data.now.edges[0].node
  return (
    <Layout>
      <SEO title="Now" description="Now Page" />
      <h1>Now</h1>
      <p>
        What I'm currently up to. Last Update: {latestNowPost.frontmatter.date}.
      </p>
      <div dangerouslySetInnerHTML={{ __html: latestNowPost.html }}></div>
    </Layout>
  )
}

export const query = graphql`
  query {
    now: allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "Now" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default NowPage
