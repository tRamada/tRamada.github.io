import './contact.css'
import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('idle')

  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    // Placeholder fake submit
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      form.reset()
      setTimeout(() => setStatus('idle'), 3000)
    }, 1200)
    console.log('Contact form submission', data)
  }

  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Got an opportunity, project idea or just want to say hi? Drop a message or reach out on social.</p>
      <div className="contact-layout">
        <form className="contact-form" onSubmit={onSubmit} aria-describedby="contact-note">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required placeholder="Your name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" />
          </div>
          <div className="field half">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" placeholder="(Optional)" />
          </div>
            <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required placeholder="Tell me a bit about it..." />
          </div>
          <button className="button" disabled={status==='sending'}>{status==='sending' ? 'Sending...' : status==='sent' ? 'Sent!' : 'Send Message'}</button>
          <p id="contact-note" className="note">This demo form just logs to console. Replace with real endpoint.</p>
        </form>
        <div className="contact-aside">
          <ul className="contact-cards">
            <li>
              <h3>Email</h3>
              <a href="mailto:tiago@example.com">tiago@example.com</a>
            </li>
            <li>
              <h3>GitHub</h3>
              <a href="https://github.com/tRamada" target="_blank" rel="noopener noreferrer">github.com/tRamada</a>
            </li>
            <li>
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com/in/tiago</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
