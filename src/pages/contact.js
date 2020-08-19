import React from "react"

import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>
        Have a question, comment, or just want to say hello? Reach out and let's
        talk! I look forward to hearing from you. 
      </p>
      <div>
        <h3>Send an email</h3>
        <p>
          <a href="mailto:hello@davidmelnychuk.com">hello@davidmelnychuk.com</a>
        </p>
      </div>

      <div>
        <h3> Find me online</h3>
      </div>
      <ul>
        <li>
          <strong>Github</strong>:{" "}
          <a href="https://github.com/DavidMelnychuk">David Melnychuk</a>
        </li>
        <li>
          <strong>LinkedIn</strong>:{" "}
          <a href="https://www.linkedin.com/in/david-melnychuk/">
            {" "}
            David Melnychuk
          </a>
        </li>
        <li>
          <strong>Twitter</strong>:{" "}
          <a href="https://twitter.com/david_melnychuk">
            {" "}
            David Melnychuk
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export default ContactPage
