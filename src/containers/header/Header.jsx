import React from 'react'

import './header.css'
import people from '../../../assets/people.png'
import ai from '../../../assets/CeoNote.png'

const ai2 ="https://static.ynos.in/images/landing/occasions/raghu-rajagopal-testimonial-on-ynos.png"

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
      <h1 className="gradient__text"> An IoT based environmental cleaning products </h1>
      <p> To understand the full flow, one need to understand every aspect of requirement and hence we are moving forward to deliver services such as artificial intelligence for autonomous vehicles, basic problems, smart cities and many more !</p>
      <div className="gpt3__header-content__input">
        <input type='email' placeholder='Your Email Address'></input>
        <button type="button">Get Updates</button>
      </div>
      <div className="gpt3__header-content__people">
        <img src={people} alt="subscribers" />
        <p>
        1,600+ people have used our serivces
        </p>
      </div>
      
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header