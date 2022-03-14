import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
 
{
  title: '12 YEARS OF EXPERIENCE',
  text: 'The company is founded by Shiv Kumar who has an experience of 12 years in developing new technology in semiconductor domain (Memory, Protection, ASICs, IoTs, AI, etc.) He holds a Master of Technology from IITK.'

}
,
{
  title:'QUALIFIED EXPERTS',
  text:'All the products are developed by the experts from China and India.'
},
{
  title:'BEST CUSTOMER SERVICES',
  text:'We give 24x7 service to our customers include maintainance , repairing and installation at the site.'
}

];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Why should you choose us ?</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
