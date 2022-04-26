import React from 'react'
import { Navbar } from '../components'
import AboutProduct from '../components/Product/AboutProducts'
import CountryCTA from '../components/Product/CountryCta'
import CountryPerks from '../components/Product/CountryPerks'
import HeroSchoolManagement from '../components/Product/HeroSchoolManagement'

const SchoolManagement = () => {

  
  return (
    <>
    <Navbar/>

    <HeroSchoolManagement name="School Management"
      Background="https://images.unsplash.com/photo-1485848395967-65dff62dc35b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvc3BpdGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    />

<AboutProduct
                country="School Management"
                description="New Zealand is one of the world's most stable and well-governed countries, making it an appealing destination for investment, business, and family life. The country is consistently ranked in the top ten in terms of investor protection, business startup, and ease of doing business."
                capital="Wellington"
                languages="English"
               
                symbol="https://images.unsplash.com/photo-1599725427295-6ed79ff8dbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8MTE1MzEyNDN8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                currency="New Zealand Dollar"
                climate="14 ℃ to 19 ℃"
            />

<CountryPerks
                name="School Management System"
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
                punchline="Learn More School Management System "
                photo="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                cta1="Get in Touch"
                url="/immigration-call"
            />
    </>
  )
}

export default SchoolManagement