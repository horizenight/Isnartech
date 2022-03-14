import React from 'react';
import './feature.css';


const ai = 'https://isnartech.com/images/up1.png'


const Feature = ({ title, text ,image,imageAlt }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
   { image && <div className="gpt3__features-container__feature-img">
      <img src={image} alt={imageAlt} />
    </div>}
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;