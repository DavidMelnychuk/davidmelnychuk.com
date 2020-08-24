import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" description="About Page" />
      <h1>About</h1>
      <p>
        Hi! I'm David Melnychuk, a fourth-year computing science student at SFU
        and an avid learner. I love software engineering and thinking about how
        to make things better. Outside of tech, I read, write, and hike the
        great outdoors.
      </p>

      <p>
        This website is a place for me to write and document everything I learn.
        I wanted to create a record of the things I've learned so I can better
        reflect on my past and measure my progress. It's basically a personal
        and open-sourced{" "}
        <a href="https://www.reddit.com/r/todayilearned/">Today I Learned.</a>
      </p>
      <p>
        You can read about what I'm currently doing <Link to="/now">here</Link>{" "}
        and view my work journal <Link to="/journal">here</Link>.
      </p>
    </Layout>
  )
}

export default AboutPage
