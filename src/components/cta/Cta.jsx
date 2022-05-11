import React from 'react'
import { Link } from 'react-router-dom'
import classes from  './cta.css'

const Cta = () => {
  return (
    <div className='gpt3__cta'>
      <div className="gpt3__cta-content">
     
        <h3>Contact us & start exploring the endless possiblities.</h3>
      </div>
      <div className="gpt3__cta-btn">
      <Link to="/contact">

      <button type='button'>Contact Us Now!</button>
      </Link>
      </div>

      
    </div>
  )
}

export default Cta