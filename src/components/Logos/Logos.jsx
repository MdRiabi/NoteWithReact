import React from 'react'
import { logos } from '../../utils/constants'
import './Logos.css'

const Logos = () => {
  return (
    <section className="logos">
      <div className="logos__slide">
        {
          logos.map((logo, index) => (
            <img src={logo} alt="logo" key={index} className="logo" />
          ))
        }
         {
          logos.map((logo, index) => (
            <img src={logo} alt="logo" key={index} className="logo" />
          ))
        }
      </div>
      <div className="logos__overlay logos__overlay_left"></div>
      <div className="logos__overlay logos__overlay_right"></div>
    </section>
  )
}

export default Logos