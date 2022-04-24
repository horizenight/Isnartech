import React from 'react'
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
      <img src={logo4} alt="logo" />
      <p>32D, Sunny Enclave, Sector 125, Mohali, Chandigarh, 140310, India.</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <h4>Overons</h4>
        <h4>Social Media</h4>
        <h4>Counters</h4>
        <h4>Contact</h4>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <h4>Terms & Conditions</h4>
        <h4>Privacy Policy</h4>
        <h4>Counters</h4>
        <h4>Contact</h4>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <h4>32D, Sunny Enclave, Sector 125, Mohali, Chandigarh, 140310, India.</h4>
        <h4>+91 6284071956</h4>
        <h4>+91 7710455357</h4>
        <h4>Email</h4>
      </div>
    </div>
    <div className="gpt3__footer-copyright">
      <p>© 2022 Isnartech. All rights reserved.</p>
    </div>

    </div>
  )
}

export default Footer