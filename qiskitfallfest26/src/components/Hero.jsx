import './Hero.css'

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
            <a href="#register" className="btn btn-primary">Register Now</a>
            <a href="#about" className="btn btn-outline">Learn More</a>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-seal">
            <div className="hero-seal-ring">
              <span className="hero-seal-year">2026</span>
              <span className="hero-seal-title">QISKIT</span>
              <span className="hero-seal-title">FALL FEST</span>
              <span className="hero-seal-year">2026</span>
            </div>
            <div className="hero-seal-stand" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
