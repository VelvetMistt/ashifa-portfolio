import { useEffect, useState } from 'react'

const Icon = ({ name, size = 20 }) => {
  const icons = {
    github: <><path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.89c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.04-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 7.02c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.65.72 1.04 1.63 1.04 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.71c0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"/></>,
    linkedin: <><path d="M6.5 8.5H3.2V19h3.3V8.5ZM4.85 3A1.93 1.93 0 1 0 4.85 6.86 1.93 1.93 0 0 0 4.85 3ZM19.8 12.95c0-3.15-1.68-4.62-3.92-4.62-1.81 0-2.62.99-3.07 1.69V8.5H9.51V19h3.3v-5.2c0-1.37.26-2.69 1.96-2.69 1.67 0 1.69 1.57 1.69 2.78V19h3.3l.04-6.05Z"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name]}</svg>
}

const projects = [
  { name: 'ManganAI', category: 'AI/ML · Geospatial Intelligence', description: 'An AI-powered geospatial intelligence platform designed to support manganese mineral exploration. It combines data processing, machine learning and interactive geographical visualization to identify promising exploration regions. The platform presents prospectivity insights through interactive maps and analytical dashboards. It aims to support data-driven mineral exploration.', tech: ['Python','FastAPI','React','Pandas','React Leaflet'], url: 'https://github.com/VelvetMistt/ManganAI', accent: 'blue' },
  { name: 'CertiGuard', category: 'AI · Certificate Verification', description: 'An intelligent certificate authenticity and digital forensics platform designed to identify potentially suspicious or manipulated certificates. It uses OCR, QR-code detection and document analysis to extract and examine certificate information. The platform combines automated verification techniques with digital forensics concepts. It aims to improve trust and reliability in certificate verification.', tech: ['Python','Flask','MongoDB','OCR','QR Detection','PyPDF'], url: 'https://github.com/VelvetMistt/certiguard-ai-intelligent-certificate-verification-system', accent: 'violet' },
  { name: 'TideWatch', category: 'Data Analytics · Coastal Safety', description: 'A marine weather analytics platform focused on coastal awareness and safety. It uses data processing and visualization techniques to organize and analyse marine weather information. The platform presents relevant weather patterns through clear analytical visualizations. It demonstrates how data analytics can support marine and coastal awareness.', tech: ['Python','Pandas','MongoDB','Matplotlib','HTML','CSS','JavaScript'], url: 'https://github.com/VelvetMistt/marine-weather-alert-system', accent: 'cyan' },
]

const skillGroups = [
  ['Programming', ['C','C++','Python','Java']],
  ['Frontend', ['HTML','CSS','JavaScript','React.js']],
  ['Backend & Database', ['FastAPI','Flask','MongoDB','MySQL']],
  ['Core Concepts', ['DSA','OOP','DBMS','Pandas']],
  ['Tools', ['VS Code','GitHub','Figma']],
]

const achievements = [
  ['01','Finalist','Crack and Code, PSG iTech 2026'],
  ['02','Top 100','SRCAS National Level Hackathon 3.0, 2026'],
  ['03','1000+','CodeChef problems solved'],
  ['04','1000+','SkillRack problems solved'],
  ['05','70+','LeetCode problems solved'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('revealed'))
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect() }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return <>
    <nav className={scrolled ? 'nav scrolled' : 'nav'} aria-label="Main navigation">
      <div className="nav-inner">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Go to home"><span>AN</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span/><span/></button>
        <div className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {['About','Education','Projects','Skills','Achievements','Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="mailto:ashifanazrin.i2025cse@sece.ac.in">Let's Talk</a>
        </div>
      </div>
    </nav>

    <main>
      <section className="hero" id="home">
        <div className="orb orb-one"/><div className="orb orb-two"/><div className="grid-bg"/>
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="status-pill"><span className="status-dot"/>Exploring Opportunities <b>|</b> Open to Internships</div>
            <p className="eyebrow">COMPUTER SCIENCE ENGINEERING STUDENT</p>
            <h1>ASHIFA NAZRIN I</h1>
            <h2>Building Intelligent Solutions<br/><span>Through Technology.</span></h2>
            <p className="hero-description">Computer Science Engineering student passionate about software development, artificial intelligence, data-driven innovation and solving real-world problems.</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore My Projects <Icon name="arrow"/></a>
              <a className="button secondary" href="#contact">Let's Connect</a>
            </div>
            <div className="social-row">
              <a href="https://github.com/VelvetMistt" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github"/></a>
              <a href="https://www.linkedin.com/in/ashifa-i-72629536b" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin"/></a>
              <a href="mailto:ashifanazrin.i2025cse@sece.ac.in" aria-label="Email"><Icon name="mail"/></a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="profile-frame">
              <div className="frame-grid"/><div className="initials">AN</div>
              <div className="code-chip chip-one">&lt;AI /&gt;</div><div className="code-chip chip-two">{'{ data }'}</div>
              <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about"><div className="container">
        <div className="section-heading reveal"><p className="eyebrow">01 — INTRODUCTION</p><h2>About Me</h2></div>
        <div className="about-panel reveal">
          <div className="about-mark">“</div>
          <p>I'm <strong>Ashifa Nazrin I</strong>, a Computer Science and Engineering student at Sri Eshwar College of Engineering. I enjoy exploring software engineering, artificial intelligence, data analytics and emerging technologies. I believe in learning by building through hands-on projects, hackathons and continuous problem-solving. Beyond technology, I enjoy learning Japanese and exploring new opportunities.</p>
        </div>
      </div></section>

      <section className="section" id="education"><div className="container">
        <div className="section-heading reveal"><p className="eyebrow">02 — ACADEMIC JOURNEY</p><h2>Education</h2></div>
        <div className="education-card reveal">
          <div className="education-icon"><Icon name="code" size={28}/></div>
          <div className="education-main"><span className="education-period">2025 — 2029</span><h3>Sri Eshwar College of Engineering</h3><p>B.E. Computer Science and Engineering</p></div>
          <div className="education-scores"><div><strong>9.0</strong><span>CGPA · Semester 2</span></div><div><strong>95%</strong><span>HSC</span></div><div><strong>96.8%</strong><span>SSLC</span></div></div>
        </div>
      </div></section>

      <section className="section" id="projects"><div className="container">
        <div className="section-heading reveal"><p className="eyebrow">03 — SELECTED WORK</p><h2>Featured Projects</h2></div>
        <div className="project-grid">
          {projects.map((project, index) => <article className={`project-card ${project.accent} reveal`} key={project.name}>
            <div className="project-top"><span>0{index + 1}</span><div className="project-icon"><Icon name="code"/></div></div>
            <p className="project-category">{project.category}</p><h3>{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tags">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
            <a className="project-link" href={project.url} target="_blank" rel="noreferrer">View on GitHub <Icon name="arrow" size={18}/></a>
          </article>)}
        </div>
      </div></section>

      <section className="section" id="skills"><div className="container">
        <div className="section-heading reveal"><p className="eyebrow">04 — TOOLKIT</p><h2>Technical Skills</h2></div>
        <div className="skills-grid">{skillGroups.map(([title, skills]) => <div className="skill-card reveal" key={title}><h3>{title}</h3><div className="skill-tags">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div>
      </div></section>

      <section className="section" id="achievements"><div className="container">
        <div className="section-heading reveal"><p className="eyebrow">05 — MILESTONES</p><h2>Achievements</h2></div>
        <div className="achievement-grid">{achievements.map(([number,label,text]) => <article className="achievement-card reveal" key={number}><span className="achievement-number">{number}</span><strong>{label}</strong><p>{text}</p></article>)}</div>
      </div></section>

      <section className="section certifications"><div className="container">
        <div className="section-heading reveal"><p className="eyebrow">06 — CONTINUOUS LEARNING</p><h2>Certifications</h2></div>
        <div className="cert-grid reveal">{['C Training — IIT Bombay','JLPT N5','Python Programming Mastery — Udemy','Introduction to Japanese Language — NPTEL'].map((cert,index) => <div className="cert-item" key={cert}><span>0{index+1}</span><p>{cert}</p><b>✓</b></div>)}</div>
      </div></section>

      <section className="contact-section" id="contact"><div className="container">
        <div className="contact-panel reveal"><div className="contact-copy"><p className="eyebrow">07 — GET IN TOUCH</p><h2>Let's Build Something Meaningful.</h2><p>Have an interesting idea, collaboration or internship opportunity? Feel free to connect with me. I'm always interested in learning, building and exploring new possibilities.</p></div><div className="contact-actions"><a className="button primary" href="mailto:ashifanazrin.i2025cse@sece.ac.in"><Icon name="mail"/> Send an Email</a><div className="contact-social"><a href="https://github.com/VelvetMistt" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github"/></a><a href="https://www.linkedin.com/in/ashifa-i-72629536b" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin"/></a></div></div></div>
      </div></section>
    </main>

    <footer><div className="container footer-inner"><a className="brand" href="#home"><span>AN</span></a><p>© 2026 Ashifa Nazrin I. All Rights Reserved.</p><a href="#home" className="back-top">Back to top ↑</a></div></footer>
  </>
}

export default App
