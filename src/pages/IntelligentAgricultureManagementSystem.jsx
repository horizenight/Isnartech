
import React from 'react'
import { Navbar } from '../components'
import AboutProduct from '../components/Product/AboutProducts'
import CountryCTA from '../components/Product/CountryCta'
import CountryPerks from '../components/Product/CountryPerks'
import HeroSchoolManagement from '../components/Product/HeroSchoolManagement'
import { Footer } from '../containers'
import Card from '../Ui/Card/Card'
import NestedList from '../Ui/Card/NestedLists'

import './AgricultureList.css'


const IntelligentAgricultureManagementSystem = () => {
  return (
    <>
    <Navbar/>

    <HeroSchoolManagement name="Intelligent Agriculture Management System" Background="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>

<AboutProduct
                country="IAMS"
                description="We are trying to introduce AI technology in the agriculture sector. We are developing a solution based on AI technology to detect the disease and suggest the treatment for it after disease classification."
           
               
                symbol="https://images.unsplash.com/photo-1559884743-74a57598c6c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFncmljdWx0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
     
            
            toggle = {true}
            />






<CountryCTA
                punchline="Learn More IAMS"
                photo="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFncmljdWx0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                cta1="Get in Touch"
                url1="/contact"
            />

            

<Footer show = {false}/>
          
    </>
  )
}

export default IntelligentAgricultureManagementSystem

