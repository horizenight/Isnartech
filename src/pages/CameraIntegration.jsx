
import React from 'react'
import { Navbar } from '../components'
import AboutProduct from '../components/Product/AboutProducts'
import CountryCTA from '../components/Product/CountryCta'
import CountryPerks from '../components/Product/CountryPerks'
import HeroSchoolManagement from '../components/Product/HeroSchoolManagement'
import { Footer } from '../containers'
import NestedList from '../Ui/Card/NestedLists'

import './AgricultureList.css'
import { ADASfeatures } from './ProductFeatures/ADAS'
import { Survillancefeatures } from './ProductFeatures/Surveillance'


const CameraIntegration = () => {

  
  return (
    <>
    <Navbar/>

    <HeroSchoolManagement name="Camera Integration"
      Background="https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VydmVpbGxhbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    />

<AboutProduct
                features={Survillancefeatures}
                country="Camera Integration"
                description="The tech-savvy generation usually requires smart technologies & apps which help them interact with the society smoothly.This is where Smart Surveillance & Society Security Management services steps in! A one-stop solution for a smart societies and public places. We are developing a smart solution to provide extra security in societies and other public places. This solution has capability to track people, vehicles and record unusual activities in database."
              show = {true}
               ListTitle="Essential safety-critical ADAS applications include:"
                symbol="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VydmVpbGxhbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                climate="14 ℃ to 19 ℃"

                simpleListToggle={true}

                
            />

<h3 style={{


    position:'relative',
    zIndex:'1',
    padding:'30px 100px 30px 400px ',
   
    width:'80%',

   
    
    
    fontFamily: 'GothicA1-Regular',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '18px',
    lineHeight: '22px',
    color: '#FFFFFF',
    
 
    
    

}}> 
*  Applicable in Societies, Malls, Offices, hospitals, Cinemas, Hotels, Oil/gas filling stations, Railway Stations, Airports, Toll gates
</h3>



<CountryCTA
                punchline="
                Contact us for pricing and detailed information
"
                photo="https://images.unsplash.com/photo-1584143257259-50212e2ab820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VydmVpbGxhbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60=format&fit=crop&w=500&q=60"
                cta1="Get in Touch"
                cta2="Enroll your school"
                cta3="register for workshop"
                // url1="/contact-us"
                // url2="/enroll-school"
                // url3="/register-for-workshop"
                url1="/"
                url2="/"
                url3="/"
              
            />
            <Footer show = {false}/>
    </>
  )
}

export default CameraIntegration



