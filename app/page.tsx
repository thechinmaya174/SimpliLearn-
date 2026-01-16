// import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import EventDetails from './components/EventDetails'
import WhatWeExplore from './components/WhatWeExplore'
import Speakers from './components/Speakers'
import CurtainInsights from './components/CurtainInsights'
import EventAgenda from './components/EventAgenda'
// import RSVPForm from './components/RSVPForm'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <EventDetails />
      <WhatWeExplore />
      <Speakers />
      <CurtainInsights />
      <EventAgenda />
      {/* <RSVPForm /> */}
      <Footer />
    </>
  )
}
