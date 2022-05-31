import React from 'react'

import NestedList from '../../Ui/Card/NestedLists';
import SimpleList from '../../Ui/Card/SimpleList';
import UiList from '../../Ui/Card/uiList';
import './AboutProduct.css';

function AboutProduct({country, description , flag,symbol,image= true,toggle=false,ListTitle,simpleListToggle=false,features,Uilisttoggle=false}) {


   
    return (
        <div className='about__country' id="about__country">
           {/* {image &&  <div className = "about__country--title">
                    About {country} &nbsp;&nbsp;&nbsp; <img src={flag} alt=""/>
            </div>} */}
            <div className="about__country--container">
               {image &&  <img className="about__country--symbol" src={symbol} alt="malta" />}
            
            <div className="about__country--right">
                <span className="country__description">
                    {description}
                    
                    
                </span>
                {image && <span className="country__description">
                   {toggle && <NestedList />}
                   
                    {  simpleListToggle && <SimpleList ListTitle={ListTitle} features={
                        features
                        
                    } />}
                    
                   {Uilisttoggle &&
                    <UiList/>
                   }
                       

                    
                </span>}
                    </div>
                    <span/>
                
                </div>
                    
                      
            </div>
           
            
            
        
    )
}

export default AboutProduct
