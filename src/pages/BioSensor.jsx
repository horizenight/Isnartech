import React from 'react'
import { Navbar } from '../components'
import AboutProduct from '../components/Product/AboutProducts'
import CountryCTA from '../components/Product/CountryCta'
import CountryPerks from '../components/Product/CountryPerks'
import HeroSchoolManagement from '../components/Product/HeroSchoolManagement'

const BioSensor = () => {
  return (
    <>
    <Navbar/>

    <HeroSchoolManagement name="BioSensor"/>

<AboutProduct
                country="BioSensor"
                description="Will be Updated Soon "
                languages="English"
               
                symbol="https://images.unsplash.com/photo-1599725427295-6ed79ff8dbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8MTE1MzEyNDN8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                currency="New Zealand Dollar"
                climate="14 ℃ to 19 ℃"
            />

<CountryPerks
            
                name="H M S"
                a1="Digitalization of Hospital under one platform"
                a2="ISNARTECH Hospital Management System is a technology-driven hospital management solution that is designed to optimize the efficiency and productivity of your organization. A wide range of verticals and diverse needs of hospitals are planned with the application"
                a3="https://img.icons8.com/cotton/344/market--v2.png"

                b1="All your data under one umbrella"
                b2="ISNARTECH help in building smart cloud platform to provide a complete solution for managing your hospital under HMS. It’s a complete hospital running system, that captures records and practice patterns of doctors and patients and makes intelligent decisions based on that data. "
                b3="https://img.icons8.com/cotton/344/market--v2.png"

                c1="Your whole medical information at your fingertips"
                c2="ISNARTECH HMS is a complete solution for hospitals providing a wide range of medical records management that helps health care organizations to collect, manage and distribute documents securely. It helps you to gain an edge over your competitors by effortlessly managing all the documents from a single platform and taking business decisions based on data analytics"
                c3="https://img.icons8.com/cotton/344/market--v2.png"

                d1="Enhances healthcare delivery"
                d2="ISNARTECH HMS can spot medical trends in real time, give best-practices to doctors and patients, and enhance the quality of healthcare delivery"
                d3="https://img.icons8.com/cotton/344/market--v2.png"

                e1="Easy to use for everyone "
                e2="ISNARTECH HMS ha an intuitive user experience which is what makes it easy for non-technical users to use"
                e3="https://img.icons8.com/cotton/344/market--v2.png"

                f1="Full Security And confidentiality"
                f2="ISNARTECH keeps the data protected and tightly secured."
                f3="https://img.icons8.com/cotton/344/market--v2.png"
                
                />

<CountryCTA
                punchline="Learn More BioSensor System "
                photo="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                cta="Get in Touch"
                url="/immigration-call"
            />
    </>
  )
}

export default BioSensor