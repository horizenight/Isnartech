import React from 'react'
import './CountryPerks.css';


function CountryPerks({name, a1, a2, a3, b1, b2, b3, c1, c2, c3, d1, d2, d3, e1, e2, e3, f1, f2, f3}) {
    return (
        <div className="country__perks" id="country__perks">
            <div className="section__title__dark">
                Enjoy the perks of {name}
            </div>
            <div className="perks__row">
                <PerkPoint 
                    icon={a3}
                    title={a1}
                    description={a2}
                />
                <PerkPoint 
                    icon={b3}
                    title={b1}
                    description={b2}
                />
                <PerkPoint 
                    icon={c3}
                    title={c1}
                    description={c2}
                />
            </div>
            <div className="perks__row">
                <PerkPoint 
                    icon={d3}
                    title={d1}
                    description={d2}
                />
                <PerkPoint 
                    icon={e3}
                    title={e1}
                    description={e2}
                />
                <PerkPoint 
                    icon={f3}
                    title={f1}
                    description={f2}
                />
            </div>        
        </div>
    )
}

function PerkPoint({title, description, icon}) {
    return (
        <div className="perks__group">
            <img
                className="benefit__icon"
                src={icon}
                alt={title}
            />
            <div className="benefit__title">
                {title}
            </div>
            <div className="benefit__description">
                {description}
            </div>
        </div>
    )
}

export default CountryPerks
