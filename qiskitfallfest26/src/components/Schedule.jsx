import { useEffect, useRef, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import roadImg from '../assets/road-timeline.png'
import './Schedule.css'

const DAY_MARKERS = [
  { x: 14, y: 58 },
  { x: 50.2, y: 39 },
  { x: 71.6, y: 53 },
  { x: 89.4, y: 58 },
]

function DayModal({ day, onClose }) {
  useEffect(() => {
    if (!day) return // <-- guard: don't touch body scroll when nothing's open

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [day, onClose])

  if (!day) return null

  return createPortal(
    <div className="schedule-modal-overlay" onClick={onClose}>
      <div
        className="schedule-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`${day.label} schedule`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="schedule-modal-head">
          <span className="schedule-modal-title">
            {day.label} · {day.date}
            {day.theme && <span className="schedule-modal-theme">{day.theme}</span>}
          </span>
          <button
            type="button"
            className="schedule-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <ul className="schedule-modal-sessions">
          {day.sessions.map((s) => (
            <li key={s.time + s.title} className="schedule-modal-session">
              <span className="schedule-modal-time">{s.time}</span>
              <span className="schedule-modal-session-title">{s.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.body
  )
}

function Schedule({ data }) {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [openDay, setOpenDay] = useState(null)

  const days = data.days || []

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const closeModal = useCallback(() => setOpenDay(null), [])
  const activeDay = days.find((d) => d.id === openDay) || null

  return (
    <section id="schedule" className="schedule" ref={sectionRef}>
      <div className="container">
        <div className="schedule-header">
          <p className="section-eyebrow">{data.eyebrow}</p>
          <h2 className="section-heading">{data.heading}</h2>
          <p className="schedule-tagline">Click on a day to view the full schedule</p>
        </div>
      </div>

      <div className="road-scroll">
        <div className="road-wrap">
          <img src={roadImg} alt="Event schedule road illustration" className="road-img" />

          {days.map((day, i) => {
            const pos = DAY_MARKERS[i]
            if (!pos) return null

            return (
              <div
                key={day.id}
                className={`road-day ${visible ? 'road-day-visible' : ''}`}
                style={{ left: `${pos.x}%`, top: `${pos.y}%`, transitionDelay: `${i * 120}ms` }}
              >
                <button
                  type="button"
                  className="road-day-badge"
                  onClick={() => setOpenDay(day.id)}
                  aria-haspopup="dialog"
                  aria-expanded={openDay === day.id}
                >
                  <span className="road-day-label">{day.label}</span>
                  {day.theme && <span className="road-day-theme">{day.theme}</span>}
                </button>
              </div>
            )
          })}
        </div>
      </div>

      <p className="road-scroll-hint">← Swipe to see the full timeline →</p>

      <DayModal day={activeDay} onClose={closeModal} />
    </section>
  )
}

export default Schedule