import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import EventDetails from './components/EventDetails'
import Schedule from './components/Schedule'
import Workshops from './components/Workshops'
import Register from './components/Register'
import Footer from './components/Footer'
import eventData from './data/eventData.json'

function App() {
  return (
    <>
      <Navbar data={eventData} />
      <Hero data={eventData} />
      <About data={eventData.about} highlightsData={eventData.highlights} />
      <EventDetails data={eventData.eventDetails} />
      <Schedule data={eventData.schedule} />
      <Workshops data={eventData.workshops} />
      <Register data={eventData.register} />
      <Footer data={eventData.footer}/>
    </>
  )
}

export default App
