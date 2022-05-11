import React from 'react'
import { Link } from 'react-router-dom'
import logo4 from '../../../assets/logo4.png'
import './footer.css'

const Footer = ({show} ) => {
  return (
    <div className="gpt3__footer section__padding" id='contactUs'>
  { show && <div className="gpt3__footer-heading">
      <h1 className="gradient__text">
      We have an amazing team who works relentlessly and are always excited about the future
      </h1>
      <p>We have a team of amazing people who work relentlessly to build an awesome platform that solves real problems. We are very excited about the future and are looking forward to a long-lasting journey with all our clients.</p>
    </div>
    
    }
    {
      show && 
    <div className="gpt3__footer-btn">
      <p>Contact Us Now !</p>
    </div>
    }



    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
      <Link to="/">

      <img src={logo4} alt="logo" />
      </Link>
      <p>D-302, Tower D, Sector-102
Gurgaon, India.</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
       <a href="">
        <h4>Social Media</h4>
       </a>
      <Link to="/contact">

        <h4>Contact</h4>
      </Link>
      </div>
      <div className="gpt3__footer-links_div">
      <a href="/#whpt3">

        <h4>Company</h4>
      </a>
        <h4>Terms & Conditions</h4>
        <h4>Privacy Policy</h4>
    
       
      </div>
      <div className="gpt3__footer-links_div">
      <Link to="/contact">

        <h4>Get in touch</h4>
      </Link>
        <h4>D-302, Tower D, Sector-102
Gurgaon, India.</h4>
        <h4>+91 6284071956(To be updated)</h4>
        <h4>+91 7710455357(To be updated)</h4>
        <h4>enquiries@isnartech.com</h4>
      </div>
    </div>
    <div className="gpt3__footer-copyright">
      <p>© 2022 Isnartech. All rights reserved.</p>
    </div>

    </div>
  )
}

export default Footer