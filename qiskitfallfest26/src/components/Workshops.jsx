import { Atom, GitBranch, Server, Database } from 'lucide-react'
import './Workshops.css'

const icons = {
  atom: Atom,
  'git-branch': GitBranch,
  server: Server,
  database: Database,
}

function Workshops({ data }) {
  return (
    <section id="workshops" className="workshops">
      <div className="container">
        <p className="section-eyebrow">{data.eyebrow}</p>
        <h2 className="section-heading">{data.heading}</h2>

        <div className="workshops-grid">
          {data.items.map((item) => {
            const Icon = icons[item.icon]
            return (
              <div className="workshop-card" key={item.title}>
                <div className="workshop-icon">
                  <Icon size={24} />
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

export default Workshops
