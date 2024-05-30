import "../../fonts/fonts.css";

import doubleQuote from "../../assets/double-quote.svg"

import Page from '../Page/Page'
import Testimonial from '../Testimonial/Testimonial'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import  Hero from '../Hero/Hero'
import  Logos from '../Logos/Logos'
import Features from '../Features/Features'
import  Video from '../Video/Video'
import Pricing from '../Pricing/Pricing'
import FAQ from '../FAQ/FAQ'
import  Accordion from '../Accordion/Accordion'
import CTA from '../CTA/CTA'
import Footer from '../Footer/Footer'


const App = () => {
    
  return (
    <Page >
    <Header>
        <Navigation />
        <Hero />
    </Header>
    <Logos />
    <Testimonial>
      <h5 className="h5 testimonial__heading">
      he real-time synchronization and AI-powered organization have made
          our workflow more efficient than ever.
      </h5>
      <div className="testimonial__author-section">
        <p className="text-reg testimonial__author">
        Sarah Johnson
        </p>
        <p className="text-reg testimonial__organization">
        TechSavvy Solutions
        </p>
      </div>
      <img src={doubleQuote} alt="double Quote" className="testimonial__quotes" />
    </Testimonial>

    <Features />

    <Testimonial>
      <h5 className="h5 testimonial__heading">
      he real-time synchronization and AI-powered organization have made
          our workflow more efficient than ever.
      </h5>
      <div className="testimonial__author-section">
        <p className="text-reg testimonial__author">
        Sarah Johnson
        </p>
        <p className="text-reg testimonial__organization">
        TechSavvy Solutions
        </p>
      </div>
      <img src={doubleQuote} alt="double Quote" className="testimonial__quotes" />
    </Testimonial>

    <Video />

    <Testimonial>
    <h5 className="h5 testimonial__heading">
      he real-time synchronization and AI-powered organization have made
          our workflow more efficient than ever.
      </h5>
      <div className="testimonial__author-section">
        <p className="text-reg testimonial__author">
        Sarah Johnson
        </p>
        <p className="text-reg testimonial__organization">
        TechSavvy Solutions
        </p>
      </div>
      <img src={doubleQuote} alt="double Quote" className="testimonial__quotes" />
    </Testimonial>
    <Pricing />
    <Testimonial></Testimonial>
    <FAQ>
        <Accordion />
    </FAQ>
    <Testimonial></Testimonial>
    <CTA/>
    <Footer />

</Page>
  )
}

export default App;