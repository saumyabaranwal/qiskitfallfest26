import { Atom } from 'lucide-react'
import './Hero.css'
import heroImg from '../assets/hero_img.png'

function Hero({ data }) {
  return (
    <section className="hero">
      <div className="container hero-inner">

        <div className="hero-content">
          <h1 className="hero-title">
            Qiskit
            <br />
            Fall Fest 2026
          </h1>

          <p className="hero-tagline">{data.tagline}</p>

          <p className="hero-desc">{data.heroDescription}</p>

          <div className="hero-actions">
            <a href="#register" className="btn btn-primary">
              Register Now
            </a>

            <a href="#about" className="btn btn-outline">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-image">
          <Atom className="hero-atom" size={42} />
          <img src={heroImg} alt="Qiskit Fall Fest 2026" />
        </div>

      </div>
    </section>
  )
}

export default Hero