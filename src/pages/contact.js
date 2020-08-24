import React from "react"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>
        Have a question, comment, or just want to say hello? Reach out and let's
        talk!
      </p>
        {/* TODO: Make contacts metadata tags */}
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
            <a href="https://www.linkedin.com/in/david-melnychuk/">LinkedIn</a>
          </strong>
        </li>
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
