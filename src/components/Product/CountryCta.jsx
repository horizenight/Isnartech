import React from 'react'

import './CountryCTA.css';

function CountryCTA({punchline, cta, url, photo}) {
    return (
        <div className="country__cta" id="country__cta">
            <div className="country__cta__container">
                <div className="country__cta__title">
                    {punchline}
                </div>
                <a
                    to={url}
                    style={{textDecoration: 'none'}}
                    target="_blank"
                >
                    <button 
                        className="country__cta__button"
                    >
                        {cta}
                    </button>
                </a>
            </div>
            <img
                className="country__background"
                src={photo}
                alt="country background"
            />          
        </div>
    )
}

export default CountryCTA