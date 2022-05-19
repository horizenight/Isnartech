import React from 'react';
import Sponsors from './Sponsors';

import './SponsorsFeatures.css';




const row1 = [
    {
      id: 1,
      name: "CEERI Pillani",
      type: "Sponsors",
      shortDescription: "Eveyone should participate",
      description: "",
      from: "2023-01-01T00:00:00.000Z",
      to: "2023-01-01T00:00:00.000Z",
      venue: "google meet",
      registrationUrl: "#",
      image: "https://i.ibb.co/hK4w03Z/download.png",
      pdf: "",
      updatedAt: "",
      username: "isnartech",
    },
    {
      id: 2,
      name: "DPS",
      type: "Sponsors",
      shortDescription: "Sponsors",
      description: "",
      registrationUrl: "#",
      image: "https://i.ibb.co/Ky1PcPZ/dps.jpg",
      pdf: "",
      updatedAt: "",
      username: "isnartech",
    },

  ];
const row2 = [
    {
      id: 1,
      name: "NITs",
      type: "Sponsors",
      
      shortDescription: "Sponsors",
      description: "",
      from: "2023-01-01T00:00:00.000Z",
      to: "2023-01-01T00:00:00.000Z",
      venue: "google meet",
      registrationUrl: "#",
      image: "https://i.ibb.co/F8bBXDZ/download-1.png",
      pdf: "",
      updatedAt: "",
      username: "isnartech",
    },
    {
      id: 1,
      name: "UP Government",
      type: "Sponsors",
      
      shortDescription: "Sponsors",
      description: "",
      from: "2023-01-01T00:00:00.000Z",
      to: "2023-01-01T00:00:00.000Z",
      venue: "google meet",
      registrationUrl: "#",
      image: "https://i.ibb.co/SnQMDwG/download-2.png",
      pdf: "",
      updatedAt: "",
      username: "isnartech",
    },

  ];

const SponsorsFeatures = () => {
  return (
    <div className="gpt3__features_sponsors section__padding" id="features">
     <div className="gpt3__features-heading_sponsors">
      <h1 className="gradient__text">
      Sponsors</h1>
      {/* <p>Why should you choose us ?</p> */}
    </div>
    <div className="gpt3__features-container_sponsors">
     

     {row1?.map((event) => {
         return <Sponsors event={event} key={event.id} />;
       })}

   </div>
    <div className="gpt3__features-container_sponsors">
     

     {row2?.map((event) => {
         return <Sponsors event={event} key={event.id} />;
       })}

   </div>
   
    
  </div>)
}

export default SponsorsFeatures