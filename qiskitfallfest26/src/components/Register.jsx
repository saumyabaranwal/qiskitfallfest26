import './Register.css'
import eventImg from '../assets/event_img.png'

const REGISTER_FORM_URL = 'https://forms.gle/your-form-id-here'

const perkIcons = {
  flask: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 3v6l-5 9a2 2 0 0 0 1.75 3h12.5A2 2 0 0 0 20 18l-5-9V3" /><path d="M8 3h8M8 13h8" /></svg>),
  bolt: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 11 14 11 22 21 10 13 10 13 2" /></svg>),
  users: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>),
}

function Register({ data }) {
  return (
    <section id="register" className="register">
      <div className="container register-inner">
        <div className="register-content">
          <p className="section-eyebrow register-eyebrow">{data.eyebrow}</p>
          <h2 className="register-heading">{data.heading}</h2>
          <p className="register-subtext">{data.subtext}</p>
          <div className="register-card">
            <p className="register-price">{data.price || 'Registration'}</p>
            <p className="register-price-note">{data.priceNote || '23rd–26th October 2026 · Hybrid Event'}</p>
            <ul className="register-perks">
              {(data.perks || []).map((perk) => (
                <li key={perk.label}>
                  <span className="register-perk-icon">{perkIcons[perk.icon]}</span>
                  {perk.label}
                </li>
              ))}
            </ul>
            <a href={REGISTER_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary register-btn">Register Now</a>
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
