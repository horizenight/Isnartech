import React from 'react'
import classes from  './article.css'



const Article = ({imgUrl,title,data}) => {
  return (
    <div className="gpt3__blog-container_article" id='application'>
      <div className="gpt3__blog-container_article-image">
        <img
          src = {imgUrl} alt='blog'
        />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <h3>{title}</h3>
          <p>{data}</p>
        </div>
        <p>Know More About It!</p>

      </div>
    </div>
    
  )
}

export default Article