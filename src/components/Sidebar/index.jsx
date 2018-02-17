import React from 'react'
import Link from 'gatsby-link'

const Sidebar = () => (
  <div className="dc-sidebar">
    <h1>MY NAME IS</h1>
    <h1>
      <Link to="/">
        DANIEL CARIS
      </Link>
    </h1>

    <ul className="dc-sidebar-nav">
      <li>
        <Link to="/blog">
          Blog
        </Link>
      </li>
      <li>
        <Link to="/work">
          Portfolio
        </Link>
      </li>
      <li>
        <Link to="/about">
          About
        </Link>
      </li>
    </ul>

    <ul className="dc-sidebar-social text-center">
      <li>
        <Link to="http://www.twitter.com/dcaris">
          <i className="fa fa-twitter"></i>
        </Link>
      </li>
      <li>
        <Link to="http://www.github.com/dcaris">
          <i className="fa fa-github"></i>
        </Link>
      </li>
      <li>
        <Link to="http://www.instagram.com/dcaris">
          <i className="fa fa-instagram"></i>
        </Link>
      </li>
      <li>
        <Link to="https://www.linkedin.com/in/daniel-caris-1501b122/">
          <i className="fa fa-linkedin"></i>
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <i className="fa fa-envelope"></i>
        </Link>
      </li>
    </ul>
  </div>
)

export default Sidebar