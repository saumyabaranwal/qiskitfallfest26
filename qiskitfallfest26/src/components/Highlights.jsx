import { FlaskConical, Mic, Laptop, UsersRound } from 'lucide-react'
import './Highlights.css'

const icons = {
  'flask-conical': FlaskConical,
  mic: Mic,
  laptop: Laptop,
  'users-round': UsersRound,
}

function Highlights({ data }) {
  return (
    <section className="highlights">
      <div className="container">
        <p className="section-eyebrow">{data.eyebrow}</p>
        <h2 className="section-heading">{data.heading}</h2>

        <div className="highlights-grid">
          {data.items.map((item) => {
            const Icon = icons[item.icon]
            return (
              <div className="highlight-card" key={item.title}>
                <div className="highlight-icon">
                  <Icon size={26} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Highlights
