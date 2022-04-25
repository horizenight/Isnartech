


import React from 'react'
import { Navbar } from '../components'
import AboutProduct from '../components/Product/AboutProducts'
import CountryCTA from '../components/Product/CountryCta'
import CountryPerks from '../components/Product/CountryPerks'
import HeroSchoolManagement from '../components/Product/HeroSchoolManagement'
import { Footer } from '../containers'

const HospitalManagementSystem = () => {
  return (
    <>
    <Navbar/>

    <HeroSchoolManagement name="Hospital Management System "
      Background="https://images.unsplash.com/photo-1485848395967-65dff62dc35b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvc3BpdGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    />

<AboutProduct
                country="Hospital Management System"
                description="ISNARTECH School Digitalization System is a comprehensive solution that helps schools transform their operations and improve student outcomes. The system automates attendance, behavior analysis, performance analysis, and exam fraud reduction to help schools improve efficiency and reduce student dropout. Additionally, the ID card scan-based student registration and admission process streamlines school operations and provides a centralized database for school information. The system's deep learning and AI-based technology provides accurate and actionable insights to help schools make informed decisions."
              show = {true}
               
                symbol="https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvc3BpdGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                climate="14 ℃ to 19 ℃"
            />

<CountryPerks
                name="Hospital Management System"
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
                punchline="
Need more information
"
                photo="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcGl0YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
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

export default HospitalManagementSystem

