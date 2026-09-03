import { useState, useEffect } from 'react'
import { Mail, MapPin } from 'lucide-react'
import logo from '../assets/logo.png'
import './Footer.css'

function useTypewriter(text, { typeSpeed = 80, deleteSpeed = 40, pauseAfterType = 1500, pauseAfterDelete = 500 } = {}) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let i = 0
    let timeoutId
    let mode = 'typing' // 'typing' | 'pausingAfterType' | 'deleting' | 'pausingAfterDelete'

    const tick = () => {
      if (mode === 'typing') {
        i += 1
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          mode = 'pausingAfterType'
          timeoutId = setTimeout(tick, pauseAfterType)
        } else {
          timeoutId = setTimeout(tick, typeSpeed)
        }
      } else if (mode === 'pausingAfterType') {
        mode = 'deleting'
        timeoutId = setTimeout(tick, deleteSpeed)
      } else if (mode === 'deleting') {
        i -= 1
        setDisplayed(text.slice(0, i))
        if (i <= 0) {
          mode = 'pausingAfterDelete'
          timeoutId = setTimeout(tick, pauseAfterDelete)
        } else {
          timeoutId = setTimeout(tick, deleteSpeed)
        }
      } else if (mode === 'pausingAfterDelete') {
        mode = 'typing'
        timeoutId = setTimeout(tick, typeSpeed)
      }
    }

    timeoutId = setTimeout(tick, typeSpeed)

    return () => clearTimeout(timeoutId)
  }, [text, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete])

  return displayed
}

function Footer({ data, eventName }) {
  const typed = useTypewriter(eventName, { typeSpeed: 90, pauseAfterType: 2000 })

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt={`${eventName} logo`} className="footer-logo" />
            <h3 className="footer-title">
              {typed}
              <span className="footer-cursor" />
            </h3>
          </div>

          <div className="footer-meta">
            <a href={`mailto:${data.contactEmail}`} className="footer-meta-item">
              <Mail size={14} />
              {data.contactEmail || 'contact@qiskitfallfest.org'}
            </a>
            <span className="footer-meta-item">
              <MapPin size={14} />
              {data.location || 'In-person Event'}
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">{data.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer