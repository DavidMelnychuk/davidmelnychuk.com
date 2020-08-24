import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" description="Blog Index" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <small>{edge.node.frontmatter.date}</small>
                <p
                dangerouslySetInnerHTML={{
                  __html: edge.node.frontmatter.description || null, 
                }}
              />
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogPage
