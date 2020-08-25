import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import indexStyles from "./index.module.scss"

const IndexPage = ({ data }) => {
  //TODO: Refactor into React components.
  return (
    <Layout>
      <SEO title="Home" description="Home Page" />
      <section>
        <h1>
          Hey, I'm David{" "}
          <span role="image" aria-label="Wave Emoji">
            &#x1F44B;
          </span>
        </h1>
        <p>
          I'm a software developer and computer science student from Vancouver.
          <br />I write about and document everything I learn.
        </p>
      </section>
      <hr></hr>
      <section>
        <h2>Recent Articles</h2>
        <ol className={indexStyles.posts}>
          {data.articles.edges.map(edge => {
            return (
              <li className={indexStyles.post}>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h3>{edge.node.frontmatter.title}</h3>
                  <small>{edge.node.frontmatter.date}</small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: edge.node.frontmatter.description,
                    }}
                  />
                </Link>
              </li>
            )
          })}
        </ol>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    articles: allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "Blog" } } }
    ) {
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
    journals: allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "Journal" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default IndexPage
