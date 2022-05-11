
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
import SurveillanceSystem from './pages/SurveillanceSystem'
import IntelligentAgricultureManagementSystem from './pages/IntelligentAgricultureManagementSystem'
import AutoDefectDetection from './pages/AutoDefectDetection'
import InstallationPage from './pages/InstallationPage'
import MaintainancePage from './pages/MaintainancePage'
import CustomerSupport from './pages/CustomerSupport'
import HospitalMangementSystem from './pages/HospitalManagementSystem'
import AutonomousDrivingTech from './pages/AutonomousDrivingTech'
import DropDownState from './components/Context/DropDownState'


function App() {
  

  return (
    <div className='App'>

<DropDownState>


     <Switch>
       <Route exact path='/'>
       <MainPage/>
       </Route>
       
       <Route exact path='/contact'>
       <ContactUs/>
       </Route>


      {/* Services */}

       <Route exact path='/School-Digitalization-System'>
      <EducationalInstituteDigitalisation/>
       </Route>

       <Route exact path='/agricultral-management'>
       <IntelligentAgricultureManagementSystem/>
       </Route>

       <Route exact path='/Automated-Defect-Inspection'>
       <AutoDefectDetection/>
       </Route>


      <Route exact path = '/Hospital-Management-System'>
    <HospitalMangementSystem/>
      </Route>

      <Route exact path = '/Autonomous-driving-technology'>
    <AutonomousDrivingTech/>
      </Route>

       {/* Products */}
       <Route exact path='/surveillance-system'>
       <SurveillanceSystem/>
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

    
  
       </DropDownState>
      
    </div>
  )
}

export default App
