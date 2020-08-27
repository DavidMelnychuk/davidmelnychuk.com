import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" description="Contact Page" />
      <h1>Contact</h1>
      <p>
        Have a question, comment, or just want to say hello? Reach out and let's
        talk!
      </p>
      <div>
        <h3>Send an email</h3>
        <p>
          <a href="mailto:david@davidmelnychuk.com">david@davidmelnychuk.com</a>
        </p>
      </div>

      <div>
        <h3> Find me online</h3>
      </div>
      <ul>
        <li>
          <strong>
            <a href="https://github.com/DavidMelnychuk">Github</a>
          </strong>
        </li>
        <li>
          <strong>
            <a href="https://twitter.com/david_melnychuk">Twitter</a>
          </strong>
        </li>
      </ul>
    </Layout>
  )
}

export default ContactPage
