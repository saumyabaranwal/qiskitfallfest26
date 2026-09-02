import './Schedule.css'

function Schedule({ data }) {
  return (
    <section id="schedule" className="schedule">
      <div className="container schedule-inner">
        <div className="schedule-text">
          <p className="section-eyebrow">{data.eyebrow}</p>
          <h2 className="section-heading">{data.heading}</h2>

          <div className="timeline">
            {data.days.map((day, i) => (
              <div className="timeline-day" key={day.label}>
                <div className="timeline-marker">
                  <span className="timeline-badge">{day.label}</span>
                  <span className="timeline-date">{day.date}</span>
                  {i < data.days.length - 1 && <span className="timeline-line" />}
                </div>
                <ul className="timeline-events">
                  {day.events.map((event) => (
                    <li key={event.title}>
                      <span className="timeline-time">{event.time}</span>
                      <span className="timeline-title">{event.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <a href="#" className="btn btn-primary schedule-cta">View Full Schedule</a>
        </div>

        <div className="schedule-art">
          <div className="schedule-card">
            <div className="qubit-row"><span>q0</span><div className="qubit-line" /></div>
            <div className="qubit-row"><span>q1</span><div className="qubit-line" /></div>
            <div className="qubit-row"><span>q2</span><div className="qubit-line" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule
