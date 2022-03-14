import React from 'react'
import { Article } from '../../components'

import './blog.css'
import { blog01, blog02, blog03, blog04, blog05 } from './imports';


const Blog = () => {
  return (
    <div className='gpt3__blog section__padding'>
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
      A lot is happening, <br />Check out our best services
      </h1>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article  imgUrl={blog01} title="Hotels" data="" />
        </div>
        <div className="gpt3__blog-container_groupB">
        <Article  imgUrl={blog02} title="Airport" data="" />
        <Article  imgUrl={blog03} title="Public Toilets" data="" />
        <Article  imgUrl={blog04} title="Restraunts" data="World" />
        <Article  imgUrl={blog05} title="Paper Mill" data="" />
        </div>

      </div>
    </div></div>
  )
}

export default Blog