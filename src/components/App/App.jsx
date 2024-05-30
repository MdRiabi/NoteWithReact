import "../../fonts/fonts.css";

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
    <Testimonial></Testimonial>
    <Features />
    <Testimonial></Testimonial>
    <Video />
    <Testimonial></Testimonial>
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