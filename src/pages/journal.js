import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import journalStyles from "./journal.module.scss"
import { graphql } from "gatsby"

const WorkJournal = ({ data }) => {
  return (
    <Layout>
      <SEO title="Learning Journal" description="Learning Journal" />
      <h1>Learning Journal</h1>
      <p>Documenting what I learn. Updated weekly.</p>
      <hr></hr>

      <ol className={journalStyles.entries}>
        {data.journals.edges.map(edge => {
          return (
            <li className={journalStyles.entry}>
              <h3>{edge.node.frontmatter.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: edge.node.html }}></p>
              <hr></hr>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export const query = graphql`
  query {
    journals: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "Journal" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
export default WorkJournal
