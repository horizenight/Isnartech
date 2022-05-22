import React from 'react'
import { Navbar } from '../components'
import AboutProduct from '../components/Product/AboutProducts'
import CountryCTA from '../components/Product/CountryCta'
import CountryPerks from '../components/Product/CountryPerks'
import HeroSchoolManagement from '../components/Product/HeroSchoolManagement'

const MaintainancePage = () => {
  return (
    <>
    <Navbar/>

    <HeroSchoolManagement name="Product Maintenance"
        Background="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        cta = {false}
    />

<AboutProduct
                country="Product Maintenance"
                description="Keep your product maintained at best level with our top class services"
                // capital="Wellington"
                // languages="English"
               
                symbol="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1haW50ZW5hbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                currency="New Zealand Dollar"
                climate="14 ℃ to 19 ℃"
            />



<CountryCTA
                punchline="Contact for Services"
                photo="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                cta1="Get in Touch"
                url1="/contact"
            />
    </>
  )
}

export default MaintainancePage





