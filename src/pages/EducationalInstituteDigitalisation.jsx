


import React from 'react'
import { Navbar } from '../components'
import AboutProduct from '../components/Product/AboutProducts'
import CountryCTA from '../components/Product/CountryCta'
import CountryPerks from '../components/Product/CountryPerks'
import HeroSchoolManagement from '../components/Product/HeroSchoolManagement'
import { Footer } from '../containers'

const EducationalInstituteDigitalisation = () => {
  return (
    <>
    <Navbar/>

    <HeroSchoolManagement name="School Digitalization System "
      Background="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGVkdWNhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    />

<AboutProduct
                country="SDS"
                description="ISNARTECH SDS is a comprehensive solution that helps schools transform their operations and improve student outcomes. The system automates attendance, behavior analysis, performance analysis, and exam fraud reduction to help schools improve efficiency and reduce student dropout. Additionally, the ID card scan-based student registration and admission process streamlines school operations and provides a centralized database for school information. The system's deep learning and AI-based technology provides accurate and actionable insights to help schools make informed decisions."
              show = {true}
               
                symbol="https://images.unsplash.com/photo-1599725427295-6ed79ff8dbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8MTE1MzEyNDN8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                currency="New Zealand Dollar"
                climate="14 ℃ to 19 ℃"
            />

<CountryPerks
                name="Isnartech SDS"
                a1="Centralized Intelligent and Automated Digitalization System for Education"
                a2="As the world around us continues to become more digitally connected, our schools must be prepared to succeed in the 21st Century. "
                a3="https://img.icons8.com/cotton/344/market--v2.png"

                b1="Automatic Attendance Solution"
                b2="ISNAERTECH has solved the core problem of keeping attendance records in schools. It helps schools eliminate manual record keeping of attendance, improving efficiency and accuracy "
                b3="https://img.icons8.com/cotton/344/market--v2.png"

                c1="Improving the performance of Students"
                c2="ISNARTECH School Digitalization System provides a comprehensive view of student performance through detailed reports on attendance, behavior, and test results"
                c3="https://img.icons8.com/cotton/344/market--v2.png"

                d1="Improving the efficiency of Schools and School administration"
                d2="ISNARTECH School Digitalization System automates attendance tracking and classes management, empowers teachers and staff with real-time alerts and reports on student attendance and conduct, helps school administration to manage all data using a simple dashboard."
                d3="https://img.icons8.com/cotton/344/market--v2.png"

                e1="On-site for Schools"
                e2="ISNARTECH solution is also available in a cloud-based platform, which means that the if school need not invest in any hardware or software. We can also provide on-site implementation for schools to avoid any loss of valuable time."
                e3="https://img.icons8.com/cotton/344/market--v2.png"

                f1="Complete Digitalization"
                f2="Admission to out of school in full auto mode.
                ISNARTECH offers a comprehensive solution that helps schools transform their operations and improve outcomes"
                f3="https://img.icons8.com/cotton/344/market--v2.png"
                
                />

<CountryCTA
                punchline="Want to learn more?"
                photo="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                cta1="Get in Touch"
                cta2="Enroll your school"
                cta3="register for workshop"
                // url1="/contact-us"
                // url2="/enroll-school"
                // url3="/register-for-workshop"
                url1="/contact"
             
              
            />
            <Footer show = {false}/>
    </>
  )
}

export default EducationalInstituteDigitalisation

