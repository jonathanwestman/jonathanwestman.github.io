import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import favicon from '../favicon.ico'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './default.scss'
import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Jonathan Westman | Frontend Web Developer"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        { rel: 'shortcut icon', type:'image/ico', href: "https://jonathanwestman.github.io/static/favicon.230013d9.ico" }
      ]}
    />
  
    <Header />
    <div className="main">
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
