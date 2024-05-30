import React from 'react'
import "./Features.css"
import { features } from  "../../utils/constants"

const Features = () => {
  return (
    <section className="features">
      <div className="features__heading-container">
        <h2 className="h2 features__heading">
        Discover the Power of{" "}
          <span className="h2 features__text-gradient">SmartNotes</span>
          </h2>
          <p className="text-reg features__subheading">
          SmartNotes is packed with innovative features designed to
          revolutionize the way you take notes, collaborate with others, and
          stay organized.
          </p>
      </div>
      <div className="features__feature-container">
        {
          features.map((featureOject, index) => {
            return <div className={`feature ${featureOject.gridArea}`} key={index}>
                  <img 
                  src={featureOject.image} 
                  alt={featureOject.heading} 
                  className="feature__icon" />

                  <p 
                  className='text-large feature__heading'>{featureOject.heading}</p>
                  <p 
                  className="text-reg feature__description">{featureOject.description}</p>
            </div>
          })
        }

      </div>
      <div className="feature__overlay-gradient"></div>
    </section>
  )
}

export default Features