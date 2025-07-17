import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Landing Page</title>
        <meta property="og:title" content="Landing Page" />
      </Helmet>
      <div className="home-section-separator1"></div>
      <div className="home-container2"></div>
      <div className="home-section-separator2"></div>
      <div className="home-section-separator3"></div>
      <div className="home-section-separator4"></div>
      <img
        alt="image"
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        className="home-image"
      />
      <h1 className="home-text1">xxxx xxxx</h1>
      <span className="home-text2">xxxx xxxx</span>
    </div>
  )
}

export default Home
