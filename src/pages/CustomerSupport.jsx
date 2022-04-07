import React from 'react'
import { Navbar } from '../components'
import AboutProduct from '../components/Product/AboutProducts'
import CountryCTA from '../components/Product/CountryCta'
import CountryPerks from '../components/Product/CountryPerks'
import HeroSchoolManagement from '../components/Product/HeroSchoolManagement'

const CustomerSupport= () => {
  return (
    <>
    <Navbar/>

    <HeroSchoolManagement name="Customer Support"
        Background="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        cta = {false}
    />

<AboutProduct
                country="Customer Support"
                description="24/7 Customer support to provide solution to all your needs"
                // capital="Wellington"
                // languages="English"
               
                symbol="https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                currency="New Zealand Dollar"
                climate="14 ℃ to 19 ℃"
            />



<CountryCTA
                punchline="Contact for Services"
                photo="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                cta="Get in Touch"
                url="/immigration-call"
            />
    </>
  )
}

export default CustomerSupport





