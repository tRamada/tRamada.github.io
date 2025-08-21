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

  const [theme, setTheme] = useState(()=>{
    const stored = localStorage.getItem('theme');
    if(stored) return stored;
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  });

  useEffect(()=>{
    const root = document.documentElement;
    root.classList.remove('light','dark');
    root.classList.add(theme);
    root.classList.add('theme-transition');
    const t = setTimeout(()=> root.classList.remove('theme-transition'), 600);
    localStorage.setItem('theme', theme);
    return ()=>clearTimeout(t);
  },[theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <nav data-open={open ? 'true' : 'false'}>
      <div className="brand" aria-label="Homepage"><a href="#home">TR</a></div>
      <div className="nav-right">
        <ul onClick={handleNavClick}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" title="Toggle theme">
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
        <button className="nav-toggle" aria-expanded={open} aria-label="Menu" onClick={toggle}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar