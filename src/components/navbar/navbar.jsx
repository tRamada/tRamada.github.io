import './navbar.css'
import { useState, useEffect } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = (e) => {
      if (open && !e.target.closest('nav')) setOpen(false)
    }
    window.addEventListener('click', close)
    return () => window.removeEventListener('click', close)
  }, [open])

  const toggle = () => setOpen(o => !o)
  const handleNavClick = () => setOpen(false)

  return (
    <nav data-open={open ? 'true' : 'false'}>
      <div className="brand" aria-label="Homepage"><a href="#home">TR</a></div>
      <button className="nav-toggle" aria-expanded={open} aria-label="Menu" onClick={toggle}>
        <span />
        <span />
        <span />
      </button>
      <ul onClick={handleNavClick}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar