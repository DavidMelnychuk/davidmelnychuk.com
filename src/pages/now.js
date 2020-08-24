import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NowPage = () => {
  return (
    <Layout>
      <SEO title="Now" description="Now Page" />
      <h1>Now</h1>
      {/* TODO: Make last updated automatic with code, source this data programatically, and create a Now Archive */}
      <p>What I'm currently up to. Last Update: August 23 2020</p>
      <h2>Primary Focus</h2>
      <p>
        Reviewing full stack MERN fundamentals by working through{" "}
        <a href="https://fullstackopen.com/en"> Full Stack Open.</a>{" "}
      </p>
      <p>
        Trying to get better at competitive programming and algorithmic
        thinking. Right now, mostly doing practice problems from{" "}
        <a href="http://www.crackingthecodinginterview.com/">CTCI</a> and{" "}
        <a href="https://thedailybyte.dev/">The Daily Byte.</a> Trying to enter
        contests whenever I have the time.
      </p>
      <h2>Courses I'm Taking</h2>
      <ul>
        <li>
          <a href="https://fullstackopen.com/en">Full Stack Open</a>
          <p>
            A course that teaches modern full stack development with the MERN
            stack.
          </p>
        </li>
        <li>
          <a href="https://missing.csail.mit.edu/">The Missing Semester</a>
          <p>
            A short course from MIT that teaches tools commonly used in
            programming such as the shell, bash scripts, vim, etc.
          </p>
        </li>
      </ul>
      <h2>Books I'm Reading</h2>
      <ul>
        <li>
          <a href="https://www.goodreads.com/book/show/2714607-the-ascent-of-money">
            {" "}
            The Ascent of Money: A Financial History of the World
          </a>
        </li>
        <li>
          <a href="Range: Why Generalists Triumph in a Specialized World">
            Range: Why Generalists Triumph in a Specialized World
          </a>
        </li>
      </ul>
      <h2>Exercises I'm Doing</h2>
      <p>
        Since the lockdown started, I've mostly just been trying to walk
        everyday and run roughly twice a week. It's been great for my mental
        health, but doesn't do much for my physical strength. I miss lifting and
        going to the gym. It's starting to set in that things won't be back to
        normal for quite a long time. Probably going to have to pick (and
        actually stick with) a bodyweight routine so I don't completely atrophy.
      </p>
      <h2>Experiments I'm Trying</h2>
      <ul>
        <li>
          <p>
            {" "}
            Trying to meditate everyday for 5 minutes. I've meditated daily in
            the past but the habit didn't stick. Sometimes it's a struggle, but
            I swear it makes me feel calmer and more clear-minded afterwards.
            There's probably other benefits that I don't even notice or directly
            attribute to meditation.
          </p>
        </li>
        <li>
          This website. We'll see how long I can keep it up for. A few days in
          and I've noticed that trying to document EVERYTHING I learn is
          actually quite difficult. I'll try to focus on the main things and not
          just small tidbits or facts that I pick up day to day.
        </li>
      </ul>
    </Layout>
  )
}

export default NowPage
