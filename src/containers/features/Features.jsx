import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
 
{
  title: 'WHY US ?',
  text: 'Traditional approaches to solving business problems are often very manual, and therefore can be expensive, time-consuming and error prone. However, advances in artificial intelligence (AI) and deep-learning technologies have made it possible to develop automated and more intelligent systems that reduce costs and improve operations.'

}
,
{
  title:'NOT TO MENTION',
  text:'We provide customized AI solution to businesses.Instead of developing these technologies in-house, simplifying how they are applied along with image data, numerical data and analytics would help businesses solve everyday problems. We are helping business to automate everyday processes like automatic attendance and student/employee behaviours in school management system, automatic defect identification and classification at inspection stage in manufacturing processes, attendance and behavior analysis of patients and employees in hospital and HR management system, smart surveillance and security analysis in community management system etc.'
},
{
  title:'GETTING EXCITED ABOUT PRODUCTS',
  text:'Your Journey to AI.We help you to identify the key areas where AI can add value for your business. We build AI model for your business and customize as per your business needs. At ISNARTECH we believe in building collaborative partnership with our clients based on trust and belief systems.'
}

];




const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">

      We have an amazing team who works relentlessly and are always excited about the future

</h1>
      {/* <p>Why should you choose us ?</p> */}
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}

    

    </div>
  </div>
);

export default Features;
