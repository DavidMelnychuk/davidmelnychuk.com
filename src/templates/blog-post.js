import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Blog = ({data}) => {
  const post = data.markdownRemark
  return (
    <Layout>
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
    }
  }
`

export default Blog