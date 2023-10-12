import Faq from "../components/Faq"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Getstarted from "../components/Getstarted"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Pricing from "../components/Pricing"
import Secondaryfeatures from "../components/SecondaryFeatures"
import Testimonials from "../components/Testimonials"

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Features />
                <Secondaryfeatures />
                <Getstarted />
                <Testimonials />
                <Pricing />
                <Faq />
            </main>
            <Footer />
        </>
    )
}

export default Home