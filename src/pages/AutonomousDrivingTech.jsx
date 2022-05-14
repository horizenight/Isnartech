


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


const AutonomousDrivingTech = () => {

  
  return (
    <>
    <Navbar/>

    <HeroSchoolManagement name="Autonomous driving technology (ADAS)"
      Background="https://images.unsplash.com/photo-1610608485978-485fce6e8da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    />

<AboutProduct
                features={ADASfeatures}
                country="Autonomous driving technology (ADAS)"
                description="Human error is directly or indirectly basic cause of almost all vehicle accidents.These accidents can be reduced and avoided with Advanced Driver Assistance Systems (ADAS). The role of ADAS is to give warning signal to the driver and people sitting in the car. The ADAS warnings are highly useful reducing the number of car and other vehicle accidents."
              show = {true}
               ListTitle="Essential safety-critical ADAS applications include:"
                symbol="https://images.unsplash.com/photo-1597218394013-3f59781ce720?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRyaXZpbmclMjB0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
These lifesaving systems are key to ensuring the success of ADAS applications, incorporating the latest interface standards and running multiple vision-based algorithms to support real-time multimedia, vision co-processing, and sensor fusion subsystems.
</h3>



<CountryCTA
                punchline="
Need more information
"
                photo="https://images.unsplash.com/photo-1568789092014-f16cd15e04d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGRyaXZpbmclMjB0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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

export default AutonomousDrivingTech

