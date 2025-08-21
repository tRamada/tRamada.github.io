import './contact.css'
import { useState, useEffect, useRef } from 'react'
function Contact() {
  const [copied, setCopied] = useState(false)
  const sectionRef = useRef(null)
  const email = 'tiagoramada.dev@gmail.com'
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(()=> setCopied(false), 2200)
    } catch(e){ console.warn('Copy failed', e) }
  }

  useEffect(()=>{
    const root = sectionRef.current
    if(!root) return
    const items = root.querySelectorAll('[data-reveal]')
    const prefReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if(prefReduced){ items.forEach(el=> el.classList.add('in')); return }
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(ent=>{
        if(ent.isIntersecting){
          ent.target.classList.add('in')
          io.unobserve(ent.target)
        }
      })
    }, { threshold: 0.4 })
    items.forEach((el,i)=>{ el.style.setProperty('--i', i); io.observe(el) })
    return ()=> io.disconnect()
  },[])

  return (
    <section id="contact" ref={sectionRef}>
      <h2>Contact</h2>
      <p className="contact-intro">Opportunities, collaborations or a quick hello — I respond fastest by email. Pick a channel below.</p>
      <div className="contact-layout single">
        <div className="contact-primary reveal" data-reveal aria-labelledby="email-heading">
          <div className="cp-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"/>
              <path d="m22 6-10 7L2 6"/>
            </svg>
          </div>
          <div className="cp-body">
            <h3 id="email-heading">Email</h3>
            <p className="email-line">
              <a className="email-address" href={`mailto:${email}?subject=Hello%20Tiago`}>{email}</a>
              <button type="button" className="icon-btn copy" onClick={copyEmail} aria-label="Copy email address">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              </button>
              <a className="icon-btn open" href={`mailto:${email}?subject=Hello%20Tiago`} aria-label="Compose email">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="m4 4 8 8 8-8"/></svg>
              </a>
              <span className={`mini-tooltip${copied ? ' show' : ''}`}>{copied ? 'Copied' : 'Copy'}</span>
            </p>
          </div>
        </div>
        <div className="contact-methods pills" aria-label="Other contact links">
          <a data-reveal className="contact-pill" href="https://github.com/tRamada" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <span className="pill-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.11.79-.25.79-.56 0-.28-.01-1.03-.02-2.02-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.18.08 1.81 1.22 1.81 1.22 1.04 1.8 2.72 1.28 3.38.98.11-.75.41-1.28.75-1.57-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 2.9-.39c.98 0 1.96.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.75.8 1.2 1.83 1.2 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.8 1.07.8 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
            </span>
            <span className="pill-label">GitHub</span>
            <span className="pill-edge" aria-hidden="true" />
          </a>
          <a data-reveal className="contact-pill" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <span className="pill-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5ZM3 9.75h3.96v10.5H3V9.75Zm7.34 0H14.1v1.46h.05c.42-.8 1.45-1.64 2.98-1.64 3.19 0 3.78 2.1 3.78 4.84v5.84h-3.96v-5.18c0-1.24-.02-2.84-1.73-2.84-1.73 0-1.99 1.36-1.99 2.75v5.27h-3.96V9.75Z"/></svg>
            </span>
            <span className="pill-label">LinkedIn</span>
            <span className="pill-edge" aria-hidden="true" />
          </a>
        </div>
      </div>
  <div className="sr-only" aria-live="polite">{copied ? 'Email copied to clipboard' : ''}</div>
    </section>
  )
}

export default Contact
