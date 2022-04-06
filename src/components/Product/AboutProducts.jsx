import React from 'react'
import './AboutProduct.css';

function AboutProduct({country, description, capital, languages, flag, currency, climate, symbol}) {
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

/*<div className="about__country--container">
                <div className="country__flag">
                        <img src={flag} alt="malta" />
                </div>
                <div className="about__country--right">
                    <div className = "country__description">
                        {description}
                    </div>
                
                    <div className="city__details">
                        <div className="capital">
                            Capital
                        </div>
                        <div className="city__name">
                            {capital}
                        </div>
                        </div>
                        <div className="language__details">
                            <div className="language__spoken">
                                Language(s) Spoken
                            </div>
                            <div className="language__name">
                                {languages}
                            </div>
                        </div>
                        <div className="currency__details">
                            <div className="currency__details--title">
                                Currency
                            </div>
                            <div className="currency__details--subtitle">
                                {currency}
                            </div>
                        </div>
                        <div className="climate__details">
                            <div className="climate__details--title">
                                Climate
                            </div>
                            <div className="climate__details--subtitle">
                                {climate}
                            </div>
                        </div>
                </div>
            </div>*/