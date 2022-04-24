
import React from 'react'
import { Navbar } from '../components'
import AboutProduct from '../components/Product/AboutProducts'
import CountryCTA from '../components/Product/CountryCta'
import CountryPerks from '../components/Product/CountryPerks'
import HeroSchoolManagement from '../components/Product/HeroSchoolManagement'

const SurveillanceSystem = () => {
  return (
    <>
    <Navbar/>

    <HeroSchoolManagement name="Smart Surveillance &Society Security Management"/>

<AboutProduct
                country="Smart Traffic Management"
                description="The tech-savvy generation usually requires smart technologies & apps which help them interact with the society smoothly.This is where Smart Surveillance & Society Security Management services steps in! A one-stop solution for a smart societies and public places. We are developing a smart solution to provide extra security in societies and other public places. This solution has capability to track people, vehicles and record unusual activities in database."
                capital="Wellington"
                languages="English"
               
                symbol="https://images.unsplash.com/photo-1599725427295-6ed79ff8dbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8MTE1MzEyNDN8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                
            />

<CountryPerks
                name="Smart Traffic Management"
                a1="Quality Living"
                a2="High standards of living"
                a3="https://d34od1rbaqrsd3.cloudfront.net/icon_travel.svg"
                b1="Diverse People"
                b2="Multicultural population"
                b3="https://d34od1rbaqrsd3.cloudfront.net/icon_family.svg"
                c1="Less Population"
                c2="Low population density"
                c3="https://d34od1rbaqrsd3.cloudfront.net/icon_global.png"
                d1="Socio-economic Stability"
                d2="Political, social, and economic stability"
                d3="https://d34od1rbaqrsd3.cloudfront.net/icon_markets.svg"
                e1="Legal System"
                e2="Sound legal system based on English law"
                e3="https://d34od1rbaqrsd3.cloudfront.net/icon_education.svg"
                f1="Taxation"
                f2="Strong tax treaty network with a large number of counter parties"
                
                />

<CountryCTA
                punchline="Learn More Smart Traffic Management  "
                photo="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                cta="Get in Touch"
                url="/immigration-call"
            />
    </>
  )
}

export default SurveillanceSystem









