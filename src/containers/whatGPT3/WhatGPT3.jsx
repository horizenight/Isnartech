import React from "react";

import { Feature } from "../../components/index";

import "./whatGpt3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="Who are We?"
          text="The company is mainly focused on selling IoT based environmental cleaning products in order to keep outside breathing air clean. Air pollution, which is caused by human natural resources, is getting a bigger threat to the living beings of the world. A lot of technical research is on its way to reduce the pollutants of the air in order to make the air breathable."

          image = {null}
          imageAlt={null}
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Products</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature

          title="Environment Cleaning Devices"
          text="Lot of organization has taken key steps to monitor and control it but still it seems getting worst. Most of the devices available in the market are used as air freshener and they use chemically made liquid to fresh air. We have developed a unique product and a unique human friendly natural plant made liquid."

          image = {'https://isnartech.com/images/up.png'}
          imageAlt={'Environment Cleaning'}
        />

        <Feature
          title="IOT Devices"
          text="Our next series of products is for smart cities and smart industries. They are based on Internet Of Things technology. Smart electric and water meter are the first we are going to add."
          image = {'https://isnartech.com/images/up1.png'}
          imageAlt={'Iot Devices'}
        />
        <Feature
          title="Artificial Intelligence"
          text="Our next series of products is API coding. We develop API based on different technology."
          image = {'https://isnartech.com/images/apimg.jpg'}
          imageAlt={'Ai Devices'}

        />
      </div>
    </div>
  );
};

export default WhatGPT3;
