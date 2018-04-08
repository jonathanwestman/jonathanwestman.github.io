import React from 'react'
import Link from 'gatsby-link'
import './header.scss'

const Header = () => (
  <div className="header">
    <div className="header-inner">
      <div className="branding">
        <h1 className="logo">
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Jonathan Westman
          </Link>
        </h1>
      </div>
      <div className="navigation">
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="#about">About</Link></li>
          <li><Link to="#projects">Projects</Link></li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  </div>
)

export default Header
