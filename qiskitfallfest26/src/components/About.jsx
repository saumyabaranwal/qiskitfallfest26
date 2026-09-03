import Highlights from './Highlights'
import './About.css'

function About({ data, highlightsData }) {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <div className="about-text">
          <p className="section-eyebrow">{data.eyebrow}</p>
          <h2 className="section-heading">{data.heading}</h2>
          <p className="about-desc">{data.description}</p>
        </div>

        <Highlights data={highlightsData} />
      </div>
    </section>
  )
}

export default About
