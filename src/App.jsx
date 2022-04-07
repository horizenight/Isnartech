
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'

// import {Cta, Navbar, Brand} from './components'
// import { Blog, Features, Footer, Header, WhatGPT3 } from './containers'
import MainPage from './pages/MainPage'
import CameraIntegration from './pages/CameraIntegration'
import SchoolManagement from './pages/SchoolMangement'
import BioSensor from './pages/BioSensor'
import ContactUs from './pages/ContactUs'
import EducationalInstituteDigitalisation from './pages/EducationalInstituteDigitalisation'
import SmartTrafficManagement from './pages/SmartTrafficManagement'
import IntelligentAgricultureManagementSystem from './pages/IntelligentAgricultureManagementSystem'
import AutoDefectDetection from './pages/AutoDefectDetection'
import InstallationPage from './pages/InstallationPage'
import MaintainancePage from './pages/MaintainancePage'
import CustomerSupport from './pages/CustomerSupport'

function App() {
  

  return (
    <div className='App'>


     <Switch>
       <Route exact path='/'>
       <MainPage/>
       </Route>
       <Route exact path='/contact'>
       <ContactUs/>
       </Route>


      {/* Services */}

       <Route exact path='/educational-institute-digitalistation'>
     <EducationalInstituteDigitalisation/>
       </Route>

       <Route exact path='/agricultral-management'>
       <IntelligentAgricultureManagementSystem/>
       </Route>

       <Route exact path='/defect-detection'>
       <AutoDefectDetection/>
       </Route>




       {/* Products */}
       <Route exact path='/smart-traffic-management'>
       <SmartTrafficManagement/>
       </Route>

     

       <Route exact path='/school'>
       <SchoolManagement/>
       </Route>


{/* Iot Devices */}
       <Route exact path='/camera-integration'>
       <CameraIntegration/>
       </Route>
       <Route exact path='/bio-sensor'>
       <BioSensor/>
       </Route>
     </Switch>
      

      {/* Services & support  */}
      <Route exact path='/installation'>
      <InstallationPage/>
       </Route>
      <Route exact path='/maintenance'>
      <MaintainancePage/>
       </Route>
      <Route exact path='/customer-support'>
      <CustomerSupport/>
       </Route>

    
  
     
      
    </div>
  )
}

export default App
