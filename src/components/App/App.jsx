import Page from '../Page'
import Testimonial from '../Testimonial'
import Header from '../Header'
import Navigation from '../Navigation'
import  Hero from '../Hero'
import  Logos from '../Logos'
import Features from '../Features'
import  Video from '../Video'
import Pricing from '../Pricing'
import FAQ from '../FAQ'
import  Accordion from '../Accordion'
import CTA from '../CTA'
import Footer from '../Footer'
function App() {
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
    );
}

export default App;