import React from "react"
import Layout from "../components/layout"

const WorkJournal = () => {
  return (
    // TODO: Programatically update these. Probably use gatsby source filesystem. AllMarkDownRemark inside a certain folder.
    <Layout>
      <h1>Work Journal</h1>
      <p>Documenting what I do and learn. Updated daily/weekly.</p>

      <h4>August 23 2020</h4>
      <ul>
        <li>Mostly just worked on developing this website.</li>
        <li>Read Range.</li>
      </ul>

      <h4>August 22 2020</h4>
      <ul>
        <li>Reviewed the <a href="https://www.gatsbyjs.com/tutorial/">Gatsby Tutorial</a></li>
        <li>
          Learned about The Open Graph Protocol: Essentially metadata tags that
          control how URLs are displayed when shared on social media. E.g
          controlling the title, image, and description.
        </li>
        <li>Learned how to use Lighthouse and React Helmet</li>
      </ul>
    </Layout>
  )
}

export default WorkJournal
