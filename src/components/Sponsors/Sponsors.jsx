import React from 'react';
import './Sponsors.scss';


const Sponsors = ({event}) => {
  console.log(event)
  return (
    <div className="lecture-card">
   
    <div className="card-contents">
      <div className="title">{event.name}</div>
    
      <div className="description">{event.description}</div>
      
    </div>
 
      <img src={event.image} alt="Event" />
   

  </div>
);
  
}

export default Sponsors