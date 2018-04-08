import React from 'react'
import Link from 'gatsby-link'
import './index.scss'
import profilePhoto from '../images/profile-photo.jpg'
import uclalogo from '../images/ucla/logo-ucla.png'
import xprizelogo from '../images/xpf/logo-xprize.png'
import activelamplogo from '../images/activelamp/logo-activelamp.svg'
import uclahome from '../images/ucla/ucla-home.jpg'
import uclaservices from '../images/ucla/ucla-services.jpg'
import uclagettingstarted from '../images/ucla/ucla-getting-started.jpg'
import uclabol from '../images/ucla/ucla-bol-homepage.jpg'
import xpfhome from '../images/xpf/xpf-home.jpg'
import xpflunar from '../images/xpf/xpf-lunar.jpg'
import xpfprizes from '../images/xpf/xpf-prizes.jpg'
import xpfnews from '../images/xpf/xpf-news.jpg'
import alhome from '../images/activelamp/al-home.jpg'
import alblog1 from '../images/activelamp/al-blog-1.jpg'
import alblog2 from '../images/activelamp/al-blog-2.jpg'
import alblog3 from '../images/activelamp/al-blog-3.jpg'
import resume from '../images/westmanjonathanresume.pdf'

const IndexPage = () => (
  <div>
    <div className="container">
      <div id="about">
        <div className="profile-photo">
          <img src={profilePhoto} alt="Profile Photo of Jonathan Westman" />
        </div>
        <h2>Hi, <br/> I'm Jonathan, <br /> web developer</h2>
        <p>Front-end Developer | Drupal | Angular JS | Android</p>
      </div>
    </div>
    <div id="projects">
      <div className="section">
        <h3>Projects</h3>
      </div>
      <div className="container">
        <div className="project">
          <div className="project-logo">
            <img src={activelamplogo} alt="ActiveLAMP Logo" />
          </div>
          <div className="project-description">
            <h4>ActiveLAMP</h4>
            <p>Working with ActiveLAMP I have had the opportunity to work with enterprise level clients as well as internal projects. I have participated in daily standup meetings as well as regular sprint planning sessions using the Agile Scrum Methodology. I wrote multiple blog posts and a video tutorial. I have had the opporturnity to use multiple front-end technologies and have been exposed to backend technololgies as well as project automation. </p>
          </div>
        </div>
        
        <div className="project ucla">
          <div className="project-logo">
            <img  src={uclalogo} alt="UCLA Logo" />
          </div>
          <div className="project-description">
            <h4>UCLA IT Services and Related Sites</h4>
            <p>I worked as part of the ActiveLAMP team on the creation of the Drupal theme and site structure that is used on multiple sites within the UCLA network of sites. I have played an active role in managing the code before it is release to their staging envirinment. Tagging the releases for deployment and writing the release notes that are provided to the client. I also led the team creating a secondary theme that can be implemented into the same site using the Pattern Lab atomic design system.</p>
          </div>
        </div>

        <div className="project">
          <div className="project-logo">
            <img src={xprizelogo} alt="XPRIZE Logo" />
          </div>
          <div className="project-description">
            <h4>XPRIZE</h4>
            <p>I worked as part of the ActiveLAMP team on the creation of the Drupal site and theme. Using the designs provided from another team we came up with the information structure and developed the site that was able to manage content for multiple domains. We implemnted other front-end technologies as well as third-party serveces into the Drupal site as necessary.</p>
          </div>
        </div>
      </div>
    </div>
    
    <div id="contact">
      <div className="section">
        <h3>Contact Information</h3>
      </div>
      <div className="container">
        <div className="contact">
          <p>E-mail: <a target="_blank" href="mailto:jonathan@westmaninteractive.com">jonathan@westmaninteractive.com</a></p>
          <p>Linkedin: <a target="_blank" href="https://www.linkedin.com/in/jonathan-westman-a1489a12/">Jonathan Westman</a></p>
          <p>Github: <a target="_blank" href="https://github.com/jonathanwestman">jonathanwestman</a></p>
          <p>Résumé: <a target="_blank" href={resume}>Résumé PDF</a></p>
        </div>
      </div>
    </div>


  </div>
)

export default IndexPage
