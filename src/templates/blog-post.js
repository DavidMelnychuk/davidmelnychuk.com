import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <article>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <section dangerouslySetInnerHTML={{ __html: post.html }}></section>
        <hr></hr>
        <footer style={{ marginBottom: "1em" }}>
          Have comments, suggestions, or just want to say hello?{" "}
          <Link to="/contact">Contact me.</Link>
        </footer>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      html
    }
  }
`

export default Blog
