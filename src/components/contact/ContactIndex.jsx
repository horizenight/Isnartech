import React, { useRef } from 'react'
//  import './ContactIndex.scss'
import './Index.scss'

import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const ContactIndex = () => {

    const form = useRef()

    const sendEmail = (e) =>{
        e.preventDefault()

        emailjs
        .sendForm(
            'default_service',
            'template_wf8fk6u',
            form.current,
            'FA-6f_aorinoK2dYA'

        )
        .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            (err) => {
                alert('Failed to send the message, please try again')
            }
          )
    }




  return (
   <>
       <div className='container contact-page'>

        <div className="text-zone">
            <h1>
                Contact US ! 
            </h1>
            <p>
                
            </p>
            <div className='contact-form'>

                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li className="half">
                            <input type="text" name='name' placeholder="Name" required />
                        </li>
                        <li className="half">
                            <input type="email" name='email' placeholder="Email" required />
                        </li>
                    
                        <li>
                            <input type="text" placeholder='Mobile Number'
                            name="number" required />
                        </li>
                        <li>
                            <textarea placeholder='Message' name="message"  required></textarea>
                        </li>
                        <li>
                            <input type="submit"  className='flat-button' value="SEND"/>
                        </li>
                    </ul>
                </form>
            </div>

        </div>
        <div className="info-map">
            Isnartech
            <br/>
            India
            <br/>
            D-302, Tower D, Sector-102
            <br/>
            Gurgaon
            <br/>
            <span>enquiries@isnartech.com</span>
            
        </div>
        <div className="map-wrap">
        
        <MapContainer center={[28.500428324134088, 77.000118361377]} zoom={14}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[28.500428324134088, 77.000118361377]}>
              <Popup>Isnartech is here , come for discussion</Popup>
            </Marker>
          </MapContainer>
        </div>
       </div>
   </>
  )
}

export default ContactIndex