import React from "react";

import { Feature } from "../../components/index";

import "./whatGpt3.css";

import iot from '../../../assets/images.jpg'
import ai from '../../../assets/blog02.png'

const WhatGPT3 = () => {


  return (
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="Who are We?"
          text="We’re a team of experts with decades of experience in analytics, machine learning, business process design and development. At ISNARTECH using machine learning, image processing computer vision, deep learning and artificial intelligence-based technologies we saw an opportunity to solve everyday business problems for our clients. Our team works with clients by understanding their business processes, mapping them out, design custom solutions customized to fit the specific needs of each client, and optimizing them for greater productivity. We are deeply focused on helping organizations in education sectors, healthcare, community security, and willing to expand our client base in manufacturing, automotive, retails, consumer goods, electronics, agriculture and more.

"

          image = {null}
          imageAlt={null}
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
        We are harnessing the power of AI to automate the laborious, repetitive tasks that sap precious time and resources from your business.
        </h1>
        {/* <p><a >
        Getting Excited To...
        </a></p> */}
      </div>
      <div className="gpt3__whatgpt3-container">
       
        <Feature
          title="Artificial Intelligence"
          text="Our next series of products is API coding. We develop API based on different technology."
          image = {ai}
          imageAlt={'Ai Devices'}

        />
        
        <Feature
          title="IOT Devices"
          text="Our next series of products is for smart cities and smart industries. They are based on Internet Of Things technology. Smart electric and water meter are the first we are going to add."
          image = {iot}
          imageAlt={'Iot Devices'}
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
