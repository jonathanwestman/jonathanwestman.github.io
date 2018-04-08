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
            <p>Working with ActiveLAMP I have had the opportunity to work with enterprise 
              level clients, such as those listed below, as well as internal projects - such 
              as a slack integration, the company website, and a niche CRM - managed with the 
              Agile Scrum methodology. I wrote multiple blog posts, documentation, and video 
              tutorials, which include client tutorials and walkthroughs. I have worked with 
              multiple front-end technologies, such as Drupal, AngularJS, Mustache, Twig, 
              and CSS preprocessors. I have been exposed to backend technologies, such as Node, 
              Socket.io, Seneca, and REST APIs. I have also used and setup project automation 
              using Jenkins, TravisCI, Composer, Drupal CLI, and other CLI services.</p>
          </div>
        </div>
        
        <div className="project ucla">
          <div className="project-logo">
            <img  src={uclalogo} alt="UCLA Logo" />
          </div>
          <div className="project-description">
            <h4>UCLA IT Services</h4>
            <p>Under ActiveLAMP, I led a team to create Drupal themes and implemented the site 
              architecture that is used on multiple sites within the UCLA network. I played an 
              active role in managing the code before it is released to their staging 
              environment - tagged the releases for deployment and wrote the release notes that 
              were provided to the client. One of the themes was created using Pattern Lab, 
              which implements the atomic design system and mustache templates to integrate 
              dynamically with Drupal.</p>
          </div>
        </div>

        <div className="project">
          <div className="project-logo">
            <img src={xprizelogo} alt="XPRIZE Logo" />
          </div>
          <div className="project-description">
            <h4>XPRIZE</h4>
            <p>As part of the ActiveLAMP team, using designs provided by a third party vendor, we 
              created a Drupal site and theme. We designed the information structure and developed 
              a platform that allowed them to manage content for multiple domains. We implemented 
              front-end technologies as well as third-party services into the Drupal site as 
              necessary, including MailChimp, Google Tag Manager, Facebook OpenGraph, PollDaddy, 
              and AngularJS.</p>
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
