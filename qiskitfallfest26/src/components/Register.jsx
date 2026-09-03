import './Register.css'
import eventImg from '../assets/event_img.png' // adjust path to wherever you place the asset

// Swap this with your actual Google Form link
const REGISTER_FORM_URL = 'https://forms.gle/your-form-id-here'

const PERKS = [
  {
    label: 'Workshop materials included',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="6" />
        <path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5" />
      </svg>
    ),
  },
  {
    label: 'Quantum hardware access',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 11 14 11 22 21 10 13 10 13 2" />
      </svg>
    ),
  },
  {
    label: 'Networking opportunities',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

function Register({ data }) {
  return (
    <section id="register" className="register">
      <div className="container register-inner">
        <div className="register-content">
          <p className="section-eyebrow register-eyebrow">{data.eyebrow}</p>
          <h2 className="register-heading">{data.heading}</h2>
          <p className="register-subtext">{data.subtext}</p>

          <div className="register-card">
            <p className="register-price">{data.price || 'Free'}</p>
            <p className="register-price-note">
              {data.priceNote || 'Open to all students and professionals'}
            </p>

            <ul className="register-perks">
              {PERKS.map((perk) => (
                <li key={perk.label}>
                  <span className="register-perk-icon">{perk.icon}</span>
                  {perk.label}
                </li>
              ))}
            </ul>

        
             <a href={REGISTER_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary register-btn">
  Register Now
</a>
          </div>
        </div>

        <div className="register-media">
          <img src={eventImg} alt="Qiskit Fall Fest event graphic" />
        </div>
      </div>
    </section>
  )
}

export default Register