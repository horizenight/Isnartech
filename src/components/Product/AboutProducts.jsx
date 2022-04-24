import React from 'react'
import NestedList from '../../Ui/Card/NestedLists';
import './AboutProduct.css';

function AboutProduct({country, description , flag,symbol}) {
    return (
        <div className='about__country' id="about__country">
            <div className = "about__country--title">
                    About {country} &nbsp;&nbsp;&nbsp; <img src={flag} alt=""/>
            </div>
            <div className="about__country--container">
                <img className="about__country--symbol" src={symbol} alt="malta" />
            
                <div className="about__country--right">
                    <span className="country__description">
                        {description}
                        
                    </span>
                    </div>
                    <span/>
                
                </div>
                      
            </div>
           
            
            
        
    )
}

export default AboutProduct
