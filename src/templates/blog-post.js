import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({data}) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
      excerpt
    }
  }
`

export default Blog