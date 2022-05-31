


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
import cardent from '../../assets/cardent.png'

const CarDamage = () => {

  
  return (
    <>
    <Navbar/>

    <HeroSchoolManagement name="AI Car Damage Detection & Recognition"
      Background={cardent}
    />
  <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
      <h1 className="gradient__text"> Before You Rent, Be Sure It’s Your Dent </h1>
      <p> When returning the rented vehicle, compare its condition to the state it was in upon rental and protect yourself against false claims and wrongful billing. Recording and saving the exact condition of vehicle before and after is your ‘insurance policy ’in all cases of immediate or future disputed.</p>
      
      {/* <div className="gpt3__header-content__people">
        <img src={people} alt="subscribers" />
        <p>
        1,600+ people have used our serivces
        </p>
      </div> */}
      
      </div>
      </div>
<AboutProduct
                features={ADASfeatures}
                country="Autonomous driving technology (ADAS)"
                description="Our AI damage detection model is set up to detect and recognise damages on car parts based on the standard vehicle inspection mechanism and can therefore accelerate the process of mandatory vehicle damage inspection. We train an AI model to detect damages on a more detailed level is in the pipeline. Furthermore, our damage detection & recognition model can add value to car rental & insurance agencies who can track damages before and after a lease by sending images of the vehicle through the model to compare output before and after the rental. This can lead to higher client satisfaction and improved fleet management. The damage detection & recognition methodology increases overall damage assessment accuracy and reduce the time and labour cost. Furthermore, it also eliminates the human bias.
"
              show = {true}
               ListTitle="
Who and how benefits from Car Damage Recognition
"
                symbol="https://images.unsplash.com/photo-1597218394013-3f59781ce720?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRyaXZpbmclMjB0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                climate="14 ℃ to 19 ℃"

                simpleListToggle={false}
                toggle = {false}
                Uilisttoggle={true}

                
            />



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
                url1="/contact"
                url2="/"
                url3="/"
              
            />
            <Footer show = {false}/>
    </>
  )
}

export default CarDamage

