
import React from 'react'
import './card.css'

const Card = props => (
    <div className="Card">
        <div className="gpt3__card-ui-title">
        <div/>
        <h1>{props.title}</h1>
        </div>
        <div>
        <img src={props.image} />

        </div>
        <div className="gpt3__card-ui-text">
        <p>
            {props.text}
        </p>
        </div>
       
    </div>
)
export default Card
