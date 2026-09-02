import { User, Code, Cpu, Users } from 'lucide-react'
import './About.css'

const icons = {
  user: User,
  code: Code,
  cpu: Cpu,
  users: Users,
}

function About({ data }) {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <div className="about-text">
          <p className="section-eyebrow">{data.eyebrow}</p>
          <h2 className="section-heading">{data.heading}</h2>
          <p className="about-desc">{data.description}</p>
        </div>

        <div className="about-points">
          {data.points.map((point, i) => {
            const Icon = icons[point.icon]
            return (
              <div className="about-point" key={point.text}>
                <div className="about-point-icon">
                  <Icon size={22} />
                </div>
                <p>{point.text}</p>
                {i < data.points.length - 1 && <span className="about-divider" />}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
