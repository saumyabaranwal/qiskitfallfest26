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
  )
}

export default Highlights
