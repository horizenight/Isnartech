import React from 'react'
import { Link } from 'react-router-dom';

import './CountryCTA.css';

function CountryCTA({punchline, cta1,cta2,cta3, url1,url2,url3, photo,show}) {
    return (
        <div className="country__cta" id="country__cta">
            <div className="country__cta__container">
                <div className="country__cta__title">
                    {punchline}
                </div>
                <Link
                    to={url1}
                    style={{textDecoration: 'none'}}
                    target="_blank"
                >
                    <button 
                        className="country__cta__button"
                    >
                        {cta1}
                    </button>
                </Link>
                {show && <Link
                    to={url2}
                    style={{textDecoration: 'none'}}
                    target="_blank"
                >
                    <button 
                        className="country__cta__button"
                    >
                        {cta2}
                    </button>
                </Link>}
                {show && <Link
                    to={url3}
                    style={{textDecoration: 'none'}}
                    target="_blank"
                >
                    <button 
                        className="country__cta__button"
                    >
                        {cta3}
                    </button>
                </Link>}
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