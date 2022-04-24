


import React from 'react'
import { Navbar } from '../components'
import AboutProduct from '../components/Product/AboutProducts'
import CountryCTA from '../components/Product/CountryCta'
import CountryPerks from '../components/Product/CountryPerks'
import HeroSchoolManagement from '../components/Product/HeroSchoolManagement'
import { Footer } from '../containers'

const AutoDefectDetection = () => {
  return (
    <>
    <Navbar/>

    <HeroSchoolManagement name="Automated Defect Inspection"
      Background="https://images.unsplash.com/photo-1585896452718-89b5b66a5a6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVmZWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    />

<AboutProduct
                country="Automated Defect Inspection"
                description="ISNARTECH Automated Defect Inspection is based on deep learning and AI technology, capable of detecting many defects in real time with a missing rate of less than 0.1%. It is also capable to inspect defects from a wide range of products such as PCB boards and other electronic manufacturing industries, medical reports such as X-ray and NMR scanning. Additionally, it is adaptable and scalable to meet the changing needs of our customers"
                capital="Wellington"
                languages="English"
               
                symbol="https://images.unsplash.com/photo-1596496181961-4326beb30551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hY2hpbmUlMjBkZWZlY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                currency="New Zealand Dollar"
                climate="14 ℃ to 19 ℃"
            />

<CountryPerks
                name=" Auto Defect Detection"
                a1="Intelligent system for automatic identification and classification of defects"
                a2="ISNARTECH Automated Defect Classifier is trained on thousands of images, resulting in the automatic identification and classification of detected defects with less than 0.1% of missing rateand real time feedback alarm for new kinds of defects"
                a3="https://img.icons8.com/cotton/344/market--v2.png"

                b1="Save time and money"
                b2="A single machine can perform the same work as 50 to 100 human workers, saving companies 40 to 80% of their costs. "
                b3="https://img.icons8.com/cotton/344/market--v2.png"

                c1="Improve product quality"
                c2="ISNARTECH deep learning-based Automated Defect Classifier can detect defects the same quality of defects as 100 workers helping improve the production process greatly."
                c3="https://img.icons8.com/cotton/344/market--v2.png"

                d1="Reduce warranty costs"
                d2="Our missing rate is below 0.1%, so generally it’s impossible for any rules to be made out of less than 0. by increasing efficiency, companies will be able to produce higher quality units and reduce the instances of defects. This means that customers will have fewer warranty claims, ultimately improving a company’s bottom line"
                d3="https://img.icons8.com/cotton/344/market--v2.png"
                
                e1="Low cost & Less human intervention"
                e2="Not only will the company save money, but the workers will also have time to focus on other tasks to aid efficiency"
                e3="https://img.icons8.com/cotton/344/market--v2.png"

                f1="Intelligent system for automatic feedback "
                f2="The system automatically analyzes all inspection data, compares with previous inspection, detects the missing defect, and generates automatic feedback on the detected issues"
                f3="https://img.icons8.com/cotton/344/market--v2.png"
                
                />

<CountryCTA
                punchline="What are you waiting for, cut your cost, reduce inspection time, improve product quality and efficiency up to 800%?"
                photo="https://images.unsplash.com/photo-1580584126903-c17d41830450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFjaGluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                cta1="Get in Touch"
                url="/"
            />

            <Footer show={false}/>
    </>
  )
}

export default AutoDefectDetection





