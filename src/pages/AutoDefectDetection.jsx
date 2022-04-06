


import React from 'react'
import { Navbar } from '../components'
import AboutProduct from '../components/Product/AboutProducts'
import CountryCTA from '../components/Product/CountryCta'
import CountryPerks from '../components/Product/CountryPerks'
import HeroSchoolManagement from '../components/Product/HeroSchoolManagement'

const AutoDefectDetection = () => {
  return (
    <>
    <Navbar/>

    <HeroSchoolManagement name=" Auto Defect Detection"
      Background="https://images.unsplash.com/photo-1585896452718-89b5b66a5a6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVmZWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    />

<AboutProduct
                country=" Auto Defect Detection"
                description="Measure the behaviour and performance of the student as analysed by our system while also keeping eye on their activities"
                capital="Wellington"
                languages="English"
               
                symbol="https://images.unsplash.com/photo-1596496181961-4326beb30551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hY2hpbmUlMjBkZWZlY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                currency="New Zealand Dollar"
                climate="14 ℃ to 19 ℃"
            />

<CountryPerks
                name=" Auto Defect Detection"
                a1="Live monitoring"
                a2="Keep an eye on all the activities"
                a3="https://img.icons8.com/cotton/344/market--v2.png"
                b1="Batch Processing"
                b2="Fast and Efficient "
                b3="https://img.icons8.com/cotton/344/market--v2.png"
                c1="Proudcts quality improve"
                c2="Proper maintaince of products record"
                c3="https://img.icons8.com/cotton/344/market--v2.png"
                d1="High Efficiency and accuracy "
                d2="Not only students but help teacher performance also"
                d3="https://img.icons8.com/cotton/344/market--v2.png"
                e1="Low cost & Less human intervention"
                e2="Fully Automated"
                e3="https://img.icons8.com/cotton/344/market--v2.png"
                f1="Capture defects only"
                f2="Any defect with size >=0.1um, depend on inspection tool"
                f3="https://img.icons8.com/cotton/344/market--v2.png"
                
                />

<CountryCTA
                punchline="Learn More  Auto Defect Detection "
                photo="https://images.unsplash.com/photo-1580584126903-c17d41830450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFjaGluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                cta="Get in Touch"
                url="/immigration-call"
            />
    </>
  )
}

export default AutoDefectDetection





