import React from 'react'
import Card from '../../Ui/Card/Card'
import classes from  './brand.css'


import {ai3,iot,planetEarth} from './imports'



const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        {/* <img src={ai3} alt="artificial"/> */}
        <Card image={ai3} title={'Artificial intelligence'} text={'Artificial Intelligence Systems for daily usages'}/>
      </div>
      <div>
        {/* <img src={ai3} alt="artificial"/> */}
        <Card image={iot} title={'IOT Devices'} text={'Our next series of products is for smart cities .'}/>
      </div>
      <div>
        {/* <img src={ai3} alt="artificial"/> */}
        <Card image={planetEarth} title={'Enviornment Cleaning Devices'} text={'Natural Plant liquid & wall mounting Deodorizing automizers are available.'}/>
      </div>
     
    </div>
  )
}

export default Brand