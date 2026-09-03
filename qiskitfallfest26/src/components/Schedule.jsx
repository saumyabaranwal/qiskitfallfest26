import { useEffect, useRef, useState } from 'react'
import roadImg from '../assets/road-timeline.png'
import './Schedule.css'

// Positions read off the actual artwork (percentages of image width/height).
// "ring" = the little marker ring already drawn on the road in the image.
// "label" = where our text should sit relative to that ring, since some
// markers (statue, ship) have artwork sitting above the ring already.
const MARKERS = [
  { x: 14.0, labelY: 58, side: 'above', custom: false },
  { x: 33.7, labelY: 34, side: 'above', custom: false },
  { x: 50.2, labelY: 39, side: 'below', custom: false },
  { x: 65.0, labelY: 35, side: 'above', custom: true, baseY: 60.7, ringY: 45.7 },
  { x: 71.6, labelY: 53, side: 'above', custom: false },
  { x: 89.4, labelY: 64, side: 'below', custom: false },
]

function Schedule({ data }) {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  const slots = data.slots || []

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

  return (
    <section id="schedule" className="schedule" ref={sectionRef}>
      <div className="container">
        <div className="schedule-header">
          <p className="section-eyebrow">{data.eyebrow}</p>
          <h2 className="section-heading">{data.heading}</h2>
        </div>
      </div>

      <div className="road-scroll">
        <div className="road-wrap">
          <img src={roadImg} alt="Event schedule road illustration" className="road-img" />

          {slots.map((slot, i) => {
            const marker = MARKERS[i]
            if (!marker) return null

            return (
              <div key={slot.time}>
                {marker.custom && (
                  <div
                    className="road-pin"
                    style={{ left: `${marker.x}%`, top: `${marker.ringY}%` }}
                  >
                    <span
                      className="road-pin-stick"
                      style={{ height: `${(marker.baseY - marker.ringY) * 7.24}px` }}
                    />
                    <span className="road-pin-ring" />
                  </div>
                )}

                <div
                  className={`road-label road-label-${marker.side} ${visible ? 'road-label-visible' : ''}`}
                  style={{
                    left: `${marker.x}%`,
                    top: `${marker.labelY}%`,
                    transitionDelay: `${i * 120}ms`,
                    animationDelay: `${i * 280}ms`,
                  }}
                >
                  <span className="road-time">{slot.time}</span>
                  <span className="road-title">{slot.title}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <p className="road-scroll-hint">← Swipe to see the full timeline →</p>
    </section>
  )
}

export default Schedule