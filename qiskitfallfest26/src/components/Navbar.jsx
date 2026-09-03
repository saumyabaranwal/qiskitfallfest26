import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import dscLogo from '../assets/dsc_logo.png'
import qiskitLogo from '../assets/qiskit_logo.png'
import './Navbar.css'

function Navbar({ data }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="navbar-logo">
          <img src={dscLogo} alt="DSC logo" className="navbar-logo-icon" />
          <img src={qiskitLogo} alt="Qiskit Fall Fest logo" className="navbar-logo-icon" />
          <div className="navbar-logo-text">
            <span className="navbar-logo-title">QISKIT</span>
            <span className="navbar-logo-sub">FALL FEST 2026</span>
          </div>
        </a>

        <nav className={`navbar-links ${open ? 'is-open' : ''}`}>
          {data.nav.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <button className="navbar-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
