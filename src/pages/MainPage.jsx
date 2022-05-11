import './MainPage.css'

import {Cta, Navbar, Brand} from '../components'
import { Blog, Features, Footer, Header, WhatGPT3 } from '../containers'

import React, { useState } from 'react'

const MainPage = () => {



  return (
    <>
        <div className="gradient__bg ">
        <Navbar/>
        <Header/>

        
      </div>
      
      {/* <Brand/> */}
      <WhatGPT3/>
      <Features />
      {/* <Possibility/> */}
      <Cta/>
      {/* <Blog/> */}
      <Footer/>
    </>
  )
}

export default MainPage