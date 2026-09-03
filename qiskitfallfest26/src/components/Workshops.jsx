import './Workshops.css'

const difficultyColors = {
  Beginner: '#7cc576',
  Intermediate: '#e2724a',
  Advanced: '#e2574a',
  'All Levels': '#8ea9c9',
}

function Workshops({ data }) {
  return (
    <section id="workshops" className="workshops">
      <div className="container">
        <p className="section-eyebrow">{data.eyebrow}</p>
        <h2 className="section-heading">{data.heading}</h2>

        <div className="workshops-grid">
          {data.items.map((item, i) => {
            const color = difficultyColors[item.difficulty] || 'var(--color-accent)'
            return (
              <div
                key={item.title + i}
                className="workshop-card"
                style={{ '--diff-color': color }}
              >
                <span className="workshop-difficulty">{item.difficulty}</span>
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
