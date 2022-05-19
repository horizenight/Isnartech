import React from 'react'

import './header.css'

import Slider from '../../components/Slider/Slider'



const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
      <h1 className="gradient__text"> AI based solution for Business  </h1>
      <p> ISNARTECH is a leading AI based solution provider for business.Our team works with clients by understanding their business processes, mapping them out, design custom solutions customized to fit the specific needs of each client, and optimizing them for greater productivity and accuracy.</p>
      
      {/* <div className="gpt3__header-content__people">
        <img src={people} alt="subscribers" />
        <p>
        1,600+ people have used our serivces
        </p>
      </div> */}
      
      </div>
      <div className='gpt3__header-image slider'>
      <Slider/>
        {/* <img src={ai2} alt="ai" /> */}
      </div>
    </div>
  )
}

export default Header