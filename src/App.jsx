import './App.css'
import Navbar from './components/navbar/navbar.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Skills from './components/skills/skills.jsx'
import Projects from './components/projects/projects.jsx'
import Contact from './components/contact/contact.jsx'
import Experience from './components/experience/experience.jsx'
import { useEffect } from 'react'


function App() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'))
    if (!sections.length) return

    // Set nav height CSS var
    const nav = document.querySelector('nav')
    if (nav) {
      document.documentElement.style.setProperty('--nav-h', nav.offsetHeight + 'px')
    }

    let activeIndex = -1
    let ticking = false

    let suppressActive = false

    const setActiveNav = (index) => {
      if (suppressActive) return
      if (index === activeIndex || index < 0 || index >= sections.length) return
      const next = sections[index]
      if (!next) return
      activeIndex = index

      const links = document.querySelectorAll('nav a')
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + next.id))
    }

  const pickSection = () => {
      ticking = false
      const viewportMid = window.scrollY + window.innerHeight / 2
      let bestIndex = 0
      let bestDist = Infinity
      sections.forEach((s, i) => {
        const rect = s.getBoundingClientRect()
        const mid = rect.top + window.scrollY + rect.height / 2
        const dist = Math.abs(mid - viewportMid)
        if (dist < bestDist) { bestDist = dist; bestIndex = i }
      })
      setActiveNav(bestIndex)
      // update scroll progress variable
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0
      document.body.style.setProperty('--scroll-progress', progress.toFixed(4))
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(pickSection)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    // Initial
    pickSection()

    // Mark sections as visible for list animations (do not hide previous sections)
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let visibilityObserver = null
    if (prefersReduced) {
      sections.forEach(s => s.classList.add('is-visible'))
    } else {
      document.body.classList.add('js-anim')
      const io = new IntersectionObserver((entries) => {
        entries.forEach(ent => {
          if (!ent.isIntersecting) return
          const target = ent.target
          target.classList.add('is-visible')

          target.querySelectorAll('ul.animated-list').forEach(list => {
            Array.from(list.children).forEach((li, idx) => {
              li.style.animationDelay = (0.05 + idx * 0.07) + 's'
            })
          })

          io.unobserve(target)
        })
      }, { threshold: 0.25, rootMargin: '120px 0px -10% 0px' })

      visibilityObserver = io
      sections.forEach(s => io.observe(s))
    }

    // Custom smooth anchor scrolling with easing & highlight
    const links = Array.from(document.querySelectorAll('a[href^="#"]'))
    const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    let activeAnim = null
    const scrollToTarget = (target) => {
      if (!target) return
      if (activeAnim && activeAnim.cancel) activeAnim.cancel()
      const startY = window.scrollY
      const navH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 0
      const rect = target.getBoundingClientRect()
      const targetY = rect.top + window.scrollY - navH + 2 // compensate nav height
      const distance = targetY - startY
      if (Math.abs(distance) < 2) return
      const duration = Math.min(1100, Math.max(420, Math.abs(distance) * 0.55))
      let startTime = null
      document.body.classList.add('is-animating-scroll')
      suppressActive = true
      const anim = { cancelled: false, cancel() { this.cancelled = true } }
      activeAnim = anim
      function step(ts) {
        if (anim.cancelled) return
        if (!startTime) startTime = ts
        const elapsed = ts - startTime
        const progress = Math.min(1, elapsed / duration)
        const eased = easeInOutCubic(progress)
        window.scrollTo(0, startY + distance * eased)
        if (progress < 1) requestAnimationFrame(step)
        else {
          // final snap alignment minor correction
          window.scrollTo(0, targetY)
          setTimeout(() => {
            document.body.classList.remove('is-animating-scroll')
            suppressActive = false
            pickSection()
          }, 20)
        }
      }
      requestAnimationFrame(step)
      // Arrival highlight
      target.classList.add('jump-focus')
      setTimeout(() => target.classList.remove('jump-focus'), 1000)
    }

    const onAnchorClick = (e) => {
      const a = e.currentTarget
      const hash = a.getAttribute('href')
      if (!hash || hash === '#') return
      const target = document.querySelector(hash)
      if (!target) return
      e.preventDefault()
      if (prefersReduced) {
        target.scrollIntoView()
        return
      }
      scrollToTarget(target)
      history.pushState(null, '', hash)
    }
    // Abort animation on user wheel / touch / key
    const aborters = ['wheel','touchstart','keydown']
    const abort = () => {
      if (activeAnim && activeAnim.cancel) {
        activeAnim.cancel()
        document.body.classList.remove('is-animating-scroll')
        suppressActive = false
        pickSection()
      }
    }
    aborters.forEach(evt => window.addEventListener(evt, abort, { passive: true }))
  links.forEach(l => l.addEventListener('click', onAnchorClick))

    // Hash on load
    if (location.hash) {
      const t = document.querySelector(location.hash)
      if (t) setTimeout(() => scrollToTarget(t), 150)
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      links.forEach(l => l.removeEventListener('click', onAnchorClick))
      aborters.forEach(evt => window.removeEventListener(evt, abort))
      if (visibilityObserver) visibilityObserver.disconnect()
      document.body.classList.remove('js-anim')
    }
  }, [])

  return (
    <>
      <Navbar />
      <div className='content'>
        <Home />
        <About />
  <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
