import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import journalStyles from "./journal.module.scss"
import { graphql } from "gatsby"

const WorkJournal = ({ data }) => {
  return (
    <Layout>
      <SEO title="Work Journal" description="Work Journal" />
      <h1>Work Journal</h1>
      <p>Documenting what I do and learn. Updated daily/weekly.</p>
      <hr></hr>

      <ol className={journalStyles.entries}>
        {data.journals.edges.map(edge => {
          return (
            <li className={journalStyles.entry}>
              <h4>{edge.node.frontmatter.title}</h4>
              <p dangerouslySetInnerHTML={{ __html: edge.node.html }}></p>
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
