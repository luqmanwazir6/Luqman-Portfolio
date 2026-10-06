import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Code2,
  Database,
  Server,
  Layers,
  Terminal,
  ExternalLink,
  Mail,
  Phone,
  Copy,
  Check,
  Sparkles,
  Award,
  Briefcase,
  GraduationCap,
  ChevronRight,
  X,
  Sun,
  Moon,
  Send,
  Eye,
  CheckCircle2,
  Cpu,
  Monitor,
  Palette,
  Video,
  FileCode2,
  Compass,
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react'
import './index.css'
import { WEB3FORMS_KEY, WHATSAPP } from './config.js'
import { CERTS } from './certificates.js'

function GithubIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function InstagramIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function XTwitterIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

gsap.registerPlugin(ScrollTrigger)

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'MERN Stack' },
  { id: 'work', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

const MERN_PILLARS = [
  {
    letter: 'M',
    name: 'MongoDB',
    type: 'letter-m',
    title: 'NoSQL Database & Modeling',
    description: 'Document-oriented database with flexible JSON schemas, Mongoose ODM, complex aggregations, and MongoDB Atlas cloud deployment.',
    skills: ['Mongoose ODM', 'Aggregation Pipelines', 'Schema Validation', 'Atlas Cluster', 'Data Indexing'],
  },
  {
    letter: 'E',
    name: 'Express.js',
    type: 'letter-e',
    title: 'Fast RESTful API Architecture',
    description: 'Minimalist web framework building scalable REST APIs, secure middleware pipelines, JWT auth, and structured error handling.',
    skills: ['RESTful Routing', 'JWT & bcrypt Auth', 'Middleware Chaining', 'CORS & Security', 'Validation'],
  },
  {
    letter: 'R',
    name: 'React.js',
    type: 'letter-r',
    title: 'Interactive User Interfaces',
    description: 'Modern component-driven SPAs with React hooks, context state management, responsive design, and fluid GSAP micro-animations.',
    skills: ['Hooks & Custom Hooks', 'Context API', 'GSAP Animation', 'Component Architecture', 'Tailwind / CSS3'],
  },
  {
    letter: 'N',
    name: 'Node.js',
    type: 'letter-n',
    title: 'Asynchronous Server Runtime',
    description: 'Event-driven, non-blocking I/O runtime executing backend logic, file processing, REST servers, and third-party API integrations.',
    skills: ['Async/Await & Streams', 'NPM Ecosystem', 'Environment Config', 'Modular Architecture', 'API Services'],
  },
]

const SKILLS_MATRIX = [
  { name: 'React.js (v18+)', category: 'frontend', level: 'Advanced', icon: Code2 },
  { name: 'JavaScript (ES6+)', category: 'frontend', level: 'Advanced', icon: FileCode2 },
  { name: 'HTML5 & CSS3', category: 'frontend', level: 'Mastery', icon: Layers },
  { name: 'Tailwind CSS', category: 'frontend', level: 'Proficient', icon: Palette },
  { name: 'Bootstrap 5', category: 'frontend', level: 'Advanced', icon: Layers },
  { name: 'GSAP Animation', category: 'frontend', level: 'Advanced', icon: Sparkles },
  { name: 'Responsive Design', category: 'frontend', level: 'Mastery', icon: Monitor },
  { name: 'Node.js Runtime', category: 'backend', level: 'Proficient', icon: Server },
  { name: 'Express.js APIs', category: 'backend', level: 'Proficient', icon: Server },
  { name: 'RESTful API Design', category: 'backend', level: 'Advanced', icon: Cpu },
  { name: 'JWT & Authentication', category: 'backend', level: 'Proficient', icon: CheckCircle2 },
  { name: 'MongoDB & Mongoose', category: 'database', level: 'Proficient', icon: Database },
  { name: 'SQLite Database', category: 'database', level: 'Proficient', icon: Database },
  { name: 'Prisma ORM', category: 'database', level: 'Familiar', icon: Database },
  { name: 'Electron.js (Desktop)', category: 'tools', level: 'Proficient', icon: Monitor },
  { name: 'Git & GitHub', category: 'tools', level: 'Advanced', icon: GithubIcon },
  { name: 'Postman API Testing', category: 'tools', level: 'Proficient', icon: Terminal },
  { name: 'Vite & Build Tools', category: 'tools', level: 'Advanced', icon: Cpu },
  { name: 'Graphic Design', category: 'creative', level: '1+ Year Studio', icon: Palette },
  { name: 'Video Editing', category: 'creative', level: '100+ Projects', icon: Video },
]

const MARQUEE_ITEMS = [
  'MongoDB',
  'Express.js',
  'React.js',
  'Node.js',
  'JavaScript ES6+',
  'REST APIs',
  'GSAP Animation',
  'Tailwind CSS',
  'SQLite & Prisma',
  'Electron Desktop Apps',
  'JWT Authentication',
  'UI/UX Design',
  'Prozila Studio',
  'Saylani Mass IT',
]

const WORDS = [
  'Full-Stack MERN Developer',
  'React & Node.js Engineer',
  'GSAP UI Animator',
  'Desktop App Builder (Electron)',
  'Creative Visual Designer',
]

const STATS = [
  { num: 3, suffix: '+', label: 'Production Projects Delivered' },
  { num: 1, suffix: '+', label: 'Year Studio Design Experience' },
  { num: 100, suffix: '+', label: 'Creative & Video Deliverables' },
  { num: 90, suffix: '%', label: 'Client Engagement Lift (Prozila)' },
]

const PROJECTS = [
  {
    title: 'Clinic Management System',
    subtitle: 'Desktop EHR & Automated Billing',
    badge: 'Desktop App · Offline First',
    bannerClass: 'banner-p0',
    description:
      'A robust, 100% offline desktop application engineered for healthcare clinics and doctors to manage daily operations securely without relying on continuous internet connectivity.',
    features: [
      'Multi-role Role-Based Access Control (Admin, Receptionist, Doctor)',
      'Patient electronic medical records, visit logs, and appointments',
      'Digital prescription composer with automatic branded PDF export',
      'Local persistence with SQLite database & Prisma ORM',
    ],
    tags: ['Electron.js', 'React.js', 'SQLite', 'Prisma ORM', 'Tailwind CSS'],
    github: 'https://github.com/luqmanwazir06',
    demo: null,
  },
  {
    title: 'Restaurant Management & POS Suite',
    subtitle: 'Point-of-Sale & Live Kitchen Ops',
    badge: 'Full-Stack · Multi-Channel',
    bannerClass: 'banner-p1',
    description:
      'An end-to-end multi-module point-of-sale and restaurant administration suite supporting dine-in, takeaway, and delivery operations with synchronized kitchen workflows.',
    features: [
      '15 integrated modules: billing, inventory, table management & reports',
      'Kitchen Display System (KDS) & instant receipt generation',
      'Multi-lingual localization with support for English, Urdu, and Pashto',
      'Cross-platform accessibility: desktop application + mobile version',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'SQLite', 'REST APIs'],
    github: 'https://github.com/luqmanwazir06',
    demo: null,
  },
  {
    title: 'Amazon E-Commerce Platform UI',
    subtitle: 'High-Fidelity Storefront & Cart',
    badge: 'Frontend · Responsive Web',
    bannerClass: 'banner-p2',
    description:
      'A responsive e-commerce web platform inspired by Amazon featuring dynamic product categorization, cart state management, and modern fluid component styling.',
    features: [
      'Dynamic product showcase grids with multi-level category filters',
      'Shopping cart state management with real-time subtotal calculations',
      'Pixel-perfect responsive layout optimized across mobile, tablet, & desktop',
      'Clean interactive UI with modern drawer navigation and micro-animations',
    ],
    tags: ['React.js', 'JavaScript ES6+', 'HTML5', 'Bootstrap 5', 'GSAP'],
    github: 'https://github.com/luqmanwazir06',
    demo: null,
  },
]

const SERVICES = [
  {
    icon: Code2,
    title: 'Full-Stack MERN Web Apps',
    desc: 'Engineering complete, responsive web applications with React on the client, Express and Node.js on the server, and MongoDB for flexible database architecture.',
  },
  {
    icon: Server,
    title: 'REST API & Backend Architecture',
    desc: 'Designing clean, documented RESTful APIs with JWT authentication, role-based authorization, database schemas, and structured error handling.',
  },
  {
    icon: Monitor,
    title: 'Desktop & Offline Software',
    desc: 'Building cross-platform desktop applications utilizing Electron and SQLite for clinic, POS, and business environments where 100% offline uptime is required.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design & GSAP Motion',
    desc: 'Creating pixel-perfect, interactive interfaces with smooth GSAP animations and studio-grade visual polish backed by professional design experience.',
  },
]

const JOURNEY = [
  {
    period: '2024 — 2028',
    role: 'BS Computer Science',
    org: 'Govt. Degree College No. 1, Dera Ismail Khan',
    desc: 'Undergraduate studies focusing on Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Software Engineering principles.',
    icon: GraduationCap,
  },
  {
    period: 'Feb 2025 · 1 Year',
    role: 'Graphic & Visual Designer',
    org: 'Prozila Studio — Dera Ismail Khan',
    desc: 'Executed end-to-end visual branding, client marketing assets, and user interface designs. Spearheaded a comprehensive client redesign that lifted brand engagement by 90%.',
    icon: Briefcase,
  },
  {
    period: 'Training Course',
    role: 'Full-Stack Web Development',
    org: 'Saylani Mass IT Training (SMIT)',
    desc: 'Intensive front-end and full-stack curriculum covering modern JavaScript, responsive interfaces, state management, and web engineering best practices.',
    icon: Award,
  },
  {
    period: '2022 — 2024',
    role: 'FSc Pre-Medical (981 / 1200)',
    org: 'Ummah Children Academy, Nowshera',
    desc: 'Graduated with high academic distinction (981/1200). Complementary credentials include a formal Diploma in Information Technology (DIT) and Matriculation (849/1100).',
    icon: GraduationCap,
  },
]

const SOCIAL_LINKS = [
  { label: 'GitHub', value: 'luqmanwazir06', href: 'https://github.com/luqmanwazir06', icon: GithubIcon },
  { label: 'LinkedIn', value: 'luqman06', href: 'https://www.linkedin.com/in/luqman06', icon: LinkedinIcon },
  { label: 'WhatsApp', value: '+92 345 0541641', href: 'https://wa.me/923450541641', icon: MessageCircle },
  { label: 'Instagram', value: '@luqmanwazir.69', href: 'https://www.instagram.com/luqmanwazir.69', icon: InstagramIcon },
  { label: 'X (Twitter)', value: '@luqmanwazir.69', href: 'https://x.com/luqmanwazir.69', icon: XTwitterIcon },
  { label: 'Email', value: 'meluqman06@gmail.com', href: 'mailto:meluqman06@gmail.com', icon: Mail },
]

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [navOpen, setNavOpen] = useState(false)
  const [terminalTab, setTerminalTab] = useState('luqman.js')
  const [skillCategory, setSkillCategory] = useState('all')
  const [certCategory, setCertCategory] = useState('all')
  const [activeModalCert, setActiveModalCert] = useState(null)
  const [contactStatus, setContactStatus] = useState('')
  const [toastMessage, setToastMessage] = useState('')
  const toastTimeoutRef = useRef(null)

  // Typing animation state
  const [typedText, setTypedText] = useState(WORDS[0])

  // Synchronize theme with DOM
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const showToast = (msg) => {
    setToastMessage(msg)
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current)
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage('')
    }, 3200)
  }

  const copyToClipboard = (text, label) => {
    navigator.clipboard?.writeText(text).then(
      () => showToast(`${label} copied to clipboard!`),
      () => showToast(`Copied: ${text}`)
    )
  }

  // Typing effect
  useEffect(() => {
    let wordIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timer

    const tick = () => {
      const currentWord = WORDS[wordIndex]
      if (!isDeleting) {
        charIndex++
        setTypedText(currentWord.slice(0, charIndex))
        if (charIndex === currentWord.length) {
          isDeleting = true
          timer = setTimeout(tick, 1800)
          return
        }
      } else {
        charIndex--
        setTypedText(currentWord.slice(0, charIndex))
        if (charIndex === 0) {
          isDeleting = false
          wordIndex = (wordIndex + 1) % WORDS.length
        }
      }
      timer = setTimeout(tick, isDeleting ? 40 : 80)
    }

    timer = setTimeout(tick, 1000)
    return () => clearTimeout(timer)
  }, [])

  // GSAP animations and ScrollTrigger
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Hero element reveals
      gsap.from('.hero-reveal', {
        y: 35,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.15,
      })

      // Terminal 3D entrance
      gsap.from('.code-window', {
        scale: 0.9,
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        delay: 0.35,
      })

      // Scroll Progress Bar
      gsap.to('#scroll-progress', {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      })

      // Marquee continuous loop with scroll acceleration
      const marqueeTween = gsap.to('.marquee-track', {
        xPercent: -50,
        duration: 28,
        ease: 'none',
        repeat: -1,
      })

      ScrollTrigger.create({
        onUpdate: (self) => {
          const velocity = Math.abs(self.getVelocity()) / 250
          marqueeTween.timeScale(1 + velocity)
          gsap.to(marqueeTween, { timeScale: 1, duration: 0.8, delay: 0.1, overwrite: true })
        },
      })

      // Staggered reveals for cards
      const sections = document.querySelectorAll('.fade-section')
      sections.forEach((sec) => {
        gsap.from(sec.querySelectorAll('.fade-item'), {
          y: 40,
          opacity: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 85%',
            once: true,
          },
        })
      })

      // Timeline vertical bar fill
      gsap.to('.timeline-progress-bar', {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline',
          start: 'top 75%',
          end: 'bottom 75%',
          scrub: true,
        },
      })
    })

    // Active nav indicator on scroll
    const navAnchors = document.querySelectorAll('.nav-links a')
    NAV_ITEMS.forEach((item, index) => {
      const el = document.getElementById(item.id)
      if (el) {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 45%',
          end: 'bottom 45%',
          onToggle: (self) => {
            if (self.isActive) {
              navAnchors.forEach((a, k) => a.classList.toggle('active', k === index))
            }
          },
        })
      }
    })

    return () => {
      mm.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  // Contact form submission
  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')

    if (!WEB3FORMS_KEY) {
      // Fallback to mailto
      window.location.href = `mailto:meluqman06@gmail.com?subject=${encodeURIComponent(
        `Portfolio Inquiry from ${name}`
      )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
      showToast('Opening default mail client...')
      return
    }

    setContactStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio Message from ${name}`,
          name,
          email,
          message,
        }),
      })
      const result = await res.json()
      if (result.success) {
        setContactStatus('ok')
        form.reset()
        showToast('Message delivered successfully! I will reply soon.')
      } else {
        setContactStatus('err')
      }
    } catch {
      setContactStatus('err')
    }
  }

  const handleWhatsAppSend = (e) => {
    const form = e.currentTarget.closest('form')
    if (form && !form.reportValidity()) return
    const data = form ? new FormData(form) : null
    const name = data ? data.get('name') : ''
    const email = data ? data.get('email') : ''
    const msg = data ? data.get('message') : ''

    const text = encodeURIComponent(
      `Hello Luqman! I saw your portfolio and would like to connect.\n\nName: ${name}\nEmail: ${email}\n\nProject details:\n${msg}`
    )
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  const filteredSkills =
    skillCategory === 'all'
      ? SKILLS_MATRIX
      : SKILLS_MATRIX.filter((s) => s.category === skillCategory)

  const filteredCerts =
    certCategory === 'all' ? CERTS : CERTS.filter((c) => c.category === certCategory)

  return (
    <>
      {/* Scroll Progress Bar */}
      <div id="scroll-progress" aria-hidden="true" />

      {/* Atmospheric Background */}
      <div className="bg-ambient" aria-hidden="true">
        <div className="bg-grid" />
        <div className="bg-ambient-blob blob-1" />
        <div className="bg-ambient-blob blob-2" />
        <div className="bg-ambient-blob blob-3" />
      </div>

      {/* Floating Header Navbar */}
      <header>
        <nav className={`navbar ${navOpen ? 'open-mobile' : ''}`} aria-label="Main navigation">
          <a href="#home" className="nav-brand" onClick={() => setNavOpen(false)}>
            <div className="brand-badge">ML</div>
            <span>
              <strong className="brand-name">Luqman</strong>
              <small className="brand-role">MERN Developer</small>
            </span>
          </a>

          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setNavOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              className="theme-toggle-btn"
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a href="#contact" className="nav-cta-btn">
              <span>Let's Talk</span>
              <ChevronRight size={15} />
            </a>

            <button
              className="nav-burger"
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={navOpen}
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? <X size={20} /> : <Compass size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* ================= HERO SECTION ================= */}
        <section className="hero" id="home">
          <div className="wrap hero-grid">
            <div className="hero-content">
              <div className="hero-reveal">
                <span className="hero-status-pill">
                  <span className="pulse-dot" />
                  Available for Full-Stack &amp; MERN Opportunities
                </span>
              </div>

              <h1 className="hero-reveal">
                Hi, I'm <span className="gradient-text">Muhammad Luqman</span>
              </h1>

              <div className="hero-reveal hero-typing-box">
                <span className="typing-text">&gt; {typedText}</span>
                <span className="typing-cursor" />
              </div>

              <p className="hero-reveal hero-bio">
                Passionate <strong>MERN Stack Developer</strong> &amp; Computer Science undergraduate
                from Dera Ismail Khan, Pakistan. I architect scalable full-stack web platforms,
                high-performance RESTful APIs, and responsive digital products with pixel-perfect GSAP animations.
              </p>

              <div className="hero-reveal hero-cta-group">
                <a href="#work" className="btn btn-primary">
                  <span>Explore Projects</span>
                  <ArrowUpRight size={18} />
                </a>
                <a href="#contact" className="btn btn-secondary">
                  <Mail size={18} />
                  <span>Get In Touch</span>
                </a>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() =>
                    copyToClipboard('meluqman06@gmail.com', 'Developer Email')
                  }
                  title="Copy email address"
                >
                  <Copy size={16} />
                  <span>Copy Email</span>
                </button>
              </div>

              <div className="hero-reveal hero-tags">
                <span>
                  <CheckCircle2 size={15} color="var(--accent-emerald)" /> BS Computer Science (2024-2028)
                </span>
                <span>
                  <CheckCircle2 size={15} color="var(--accent-cyan)" /> Saylani Mass IT Certified
                </span>
                <span>
                  <CheckCircle2 size={15} color="var(--accent-indigo)" /> 1+ Yr Design at Prozila
                </span>
              </div>
            </div>

            {/* Interactive Code Terminal Sandbox */}
            <div className="hero-visual">
              <div className="code-window">
                <div className="code-window-bar">
                  <div className="window-dots">
                    <span className="window-dot dot-red" />
                    <span className="window-dot dot-yellow" />
                    <span className="window-dot dot-green" />
                  </div>
                  <div className="window-tabs">
                    <span
                      className={`window-tab ${terminalTab === 'luqman.js' ? 'active' : ''}`}
                      onClick={() => setTerminalTab('luqman.js')}
                    >
                      Luqman.js
                    </span>
                    <span
                      className={`window-tab ${terminalTab === 'stack.json' ? 'active' : ''}`}
                      onClick={() => setTerminalTab('stack.json')}
                    >
                      Stack.json
                    </span>
                    <span
                      className={`window-tab ${terminalTab === 'system.sh' ? 'active' : ''}`}
                      onClick={() => setTerminalTab('system.sh')}
                    >
                      terminal.sh
                    </span>
                  </div>
                  <div className="window-badge">
                    <span>● online</span>
                  </div>
                </div>

                <div className="code-window-body">
                  {terminalTab === 'luqman.js' && (
                    <>
                      <div className="code-line">
                        <span className="line-no">1</span>
                        <span>
                          <span className="token-keyword">const</span>{' '}
                          <span className="token-var">developer</span> = &#123;
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">2</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-property">name</span>:{' '}
                          <span className="token-string">'Muhammad Luqman'</span>,
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">3</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-property">role</span>:{' '}
                          <span className="token-string">'Full-Stack MERN Developer'</span>,
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">4</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-property">location</span>:{' '}
                          <span className="token-string">'Dera Ismail Khan, Pakistan'</span>,
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">5</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-property">coreStack</span>: [
                          <span className="token-string">'MongoDB'</span>,{' '}
                          <span className="token-string">'Express'</span>,{' '}
                          <span className="token-string">'React'</span>,{' '}
                          <span className="token-string">'Node.js'</span>],
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">6</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-property">desktopStack</span>: [
                          <span className="token-string">'Electron.js'</span>,{' '}
                          <span className="token-string">'SQLite'</span>,{' '}
                          <span className="token-string">'Prisma'</span>],
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">7</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-property">passion</span>:{' '}
                          <span className="token-string">'Building high-performance software'</span>,
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">8</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-property">openForWork</span>:{' '}
                          <span className="token-keyword">true</span>,
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">9</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-fn">contact</span>() &#123;
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">10</span>
                        <span>
                          &nbsp;&nbsp;&nbsp;&nbsp;<span className="token-keyword">return</span>{' '}
                          <span className="token-string">'meluqman06@gmail.com'</span>;
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">11</span>
                        <span>&nbsp;&nbsp;&#125;</span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">12</span>
                        <span>&#125;;</span>
                      </div>
                    </>
                  )}

                  {terminalTab === 'stack.json' && (
                    <>
                      <div className="code-line">
                        <span className="line-no">1</span>
                        <span>&#123;</span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">2</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-property">"database"</span>: [
                          <span className="token-string">"MongoDB Atlas"</span>,{' '}
                          <span className="token-string">"Mongoose"</span>,{' '}
                          <span className="token-string">"SQLite"</span>],
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">3</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-property">"backend"</span>: [
                          <span className="token-string">"Node.js"</span>,{' '}
                          <span className="token-string">"Express.js"</span>,{' '}
                          <span className="token-string">"JWT Auth"</span>],
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">4</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-property">"frontend"</span>: [
                          <span className="token-string">"React 18"</span>,{' '}
                          <span className="token-string">"Tailwind CSS"</span>,{' '}
                          <span className="token-string">"GSAP"</span>],
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">5</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-property">"desktop"</span>: [
                          <span className="token-string">"Electron.js"</span>,{' '}
                          <span className="token-string">"Prisma ORM"</span>],
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">6</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-property">"languages"</span>: [
                          <span className="token-string">"Pashto"</span>,{' '}
                          <span className="token-string">"Urdu"</span>,{' '}
                          <span className="token-string">"English"</span>,{' '}
                          <span className="token-string">"Saraiki"</span>]
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">7</span>
                        <span>&#125;</span>
                      </div>
                    </>
                  )}

                  {terminalTab === 'system.sh' && (
                    <>
                      <div className="code-line">
                        <span className="line-no">1</span>
                        <span>
                          <span className="token-comment"># Initializing MERN developer profile</span>
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">2</span>
                        <span>
                          <span className="token-keyword">$</span> whoami
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">3</span>
                        <span className="token-string">&gt; Muhammad Luqman (Full-Stack Engineer)</span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">4</span>
                        <span>
                          <span className="token-keyword">$</span> git status
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">5</span>
                        <span className="token-string">&gt; On branch main. Ready to ship production code!</span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">6</span>
                        <span>
                          <span className="token-keyword">$</span> npm run build
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">7</span>
                        <span className="token-string" style={{ color: 'var(--accent-emerald)' }}>
                          &gt; ✓ Compiled successfully in 0.42s (0 errors)
                        </span>
                      </div>
                    </>
                  )}
                </div>

                <div className="code-window-footer">
                  <span className="terminal-indicator">
                    <Terminal size={14} /> Node v20.12.0 · React 18 · Express
                  </span>
                  <span>UTF-8</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= MARQUEE TICKER ================= */}
        <div className="marquee-container" aria-hidden="true">
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
              <div className="marquee-item" key={idx}>
                <i>✦</i>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= ABOUT SECTION ================= */}
        <section className="fade-section" id="about">
          <div className="wrap">
            <div className="section-head fade-item">
              <span className="section-tag">
                <Sparkles size={14} /> Background &amp; Vision
              </span>
              <h2 className="section-title">
                Full-Stack Precision Meets <span className="gradient-text">Creative Design</span>
              </h2>
              <p className="section-desc">
                Merging deep computer science engineering fundamentals with a refined creative eye to
                build products that are structurally solid and visually delightful.
              </p>
            </div>

            <div className="about-grid">
              <div className="about-text fade-item">
                <p>
                  I am a passionate <strong>MERN Stack Developer</strong> currently pursuing my Bachelor of Science in
                  Computer Science (2024 — 2028) at Govt. Degree College No. 1, Dera Ismail Khan.
                  My engineering journey is driven by solving real-world challenges through clean software architecture,
                  resilient database design, and intuitive user experiences.
                </p>
                <p>
                  Having spent over a full year as a <strong>Graphic &amp; Visual Designer at Prozila Studio</strong>, I bring
                  a rare dual advantage to technical development: I care deeply not just about how robust the backend API is,
                  but equally about typography, accessibility, motion choreography, and high conversion UX.
                </p>

                <div className="about-highlights">
                  <div className="about-hl-item">
                    <CheckCircle2 size={18} color="var(--accent-cyan)" />
                    <span>MERN Architecture &amp; REST APIs</span>
                  </div>
                  <div className="about-hl-item">
                    <CheckCircle2 size={18} color="var(--accent-indigo)" />
                    <span>Offline Desktop Apps (Electron)</span>
                  </div>
                  <div className="about-hl-item">
                    <CheckCircle2 size={18} color="var(--accent-purple)" />
                    <span>Interactive GSAP Micro-Motion</span>
                  </div>
                  <div className="about-hl-item">
                    <CheckCircle2 size={18} color="var(--accent-emerald)" />
                    <span>Multilingual (4 Languages)</span>
                  </div>
                </div>

                <div style={{ marginTop: '28px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <a href="#contact" className="btn btn-primary">
                    Let's Build Together
                  </a>
                  <a href="#work" className="btn btn-secondary">
                    View Featured Work
                  </a>
                </div>
              </div>

              {/* Stats Counters */}
              <div className="stats-grid fade-item">
                {STATS.map((stat, i) => (
                  <div className="card stat-card" key={i}>
                    <div className="stat-number">
                      {stat.num}
                      {stat.suffix}
                    </div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= MERN STACK SECTION ================= */}
        <section className="fade-section" id="stack">
          <div className="wrap">
            <div className="section-head fade-item">
              <span className="section-tag">
                <Cpu size={14} /> Core Technology
              </span>
              <h2 className="section-title">
                The <span className="gradient-text">MERN Stack</span> Architecture
              </h2>
              <p className="section-desc">
                End-to-end JavaScript mastery: connecting reactive browser interfaces with high-throughput
                Node.js APIs and scalable document persistence.
              </p>
            </div>

            {/* 4 Pillars of MERN */}
            <div className="mern-hero-grid fade-item">
              {MERN_PILLARS.map((pillar) => (
                <div className={`card mern-pillar-card`} key={pillar.name}>
                  <div className={`mern-letter-badge ${pillar.type}`}>{pillar.letter}</div>
                  <h3>{pillar.name}</h3>
                  <p>{pillar.description}</p>
                  <ul className="pillar-skills-list">
                    {pillar.skills.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Comprehensive Skills Matrix */}
            <div className="fade-item" style={{ marginTop: '36px' }}>
              <div className="filter-tabs">
                <button
                  type="button"
                  className={`filter-tab ${skillCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setSkillCategory('all')}
                >
                  All Technologies
                </button>
                <button
                  type="button"
                  className={`filter-tab ${skillCategory === 'frontend' ? 'active' : ''}`}
                  onClick={() => setSkillCategory('frontend')}
                >
                  Frontend &amp; UI
                </button>
                <button
                  type="button"
                  className={`filter-tab ${skillCategory === 'backend' ? 'active' : ''}`}
                  onClick={() => setSkillCategory('backend')}
                >
                  Backend &amp; APIs
                </button>
                <button
                  type="button"
                  className={`filter-tab ${skillCategory === 'database' ? 'active' : ''}`}
                  onClick={() => setSkillCategory('database')}
                >
                  Databases
                </button>
                <button
                  type="button"
                  className={`filter-tab ${skillCategory === 'tools' ? 'active' : ''}`}
                  onClick={() => setSkillCategory('tools')}
                >
                  Desktop &amp; Tools
                </button>
                <button
                  type="button"
                  className={`filter-tab ${skillCategory === 'creative' ? 'active' : ''}`}
                  onClick={() => setSkillCategory('creative')}
                >
                  Creative &amp; Design
                </button>
              </div>

              <div className="skills-matrix">
                {filteredSkills.map((sk) => {
                  const Icon = sk.icon
                  return (
                    <div className="skill-matrix-item" key={sk.name}>
                      <div className="skill-item-info">
                        <Icon size={18} color="var(--accent-indigo)" />
                        <span>{sk.name}</span>
                      </div>
                      <span className="skill-item-level">{sk.level}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROJECTS SECTION ================= */}
        <section className="fade-section" id="work">
          <div className="wrap">
            <div className="section-head fade-item">
              <span className="section-tag">
                <Briefcase size={14} /> Production Portfolio
              </span>
              <h2 className="section-title">
                Featured <span className="gradient-text">Software Projects</span>
              </h2>
              <p className="section-desc">
                Production-grade applications built from architectural design to deployment, solving
                tangible workflow and commerce requirements.
              </p>
            </div>

            <div className="projects-grid fade-item">
              {PROJECTS.map((proj, i) => (
                <div className="card project-card" key={proj.title}>
                  <div className="project-card-header">
                    <div className="window-dots">
                      <span className="window-dot dot-red" />
                      <span className="window-dot dot-yellow" />
                      <span className="window-dot dot-green" />
                    </div>
                    <span className="project-badge-pill">{proj.badge}</span>
                  </div>

                  <div className={`project-banner-preview ${proj.bannerClass}`}>
                    <span className="mono" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>
                      MODULE 0{i + 1}
                    </span>
                    <h3 className="project-banner-title">{proj.title}</h3>
                  </div>

                  <div className="project-card-content">
                    <h3>{proj.title}</h3>
                    <p>{proj.description}</p>

                    <ul className="project-feature-list">
                      {proj.features.map((feat, fIdx) => (
                        <li key={fIdx}>
                          <CheckCircle2 size={16} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="project-tags">
                      {proj.tags.map((t) => (
                        <span className="project-tag" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="project-card-actions">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                      >
                        <GithubIcon size={15} />
                        <span>Source Code</span>
                      </a>
                      <a
                        href="#contact"
                        className="btn btn-outline btn-sm"
                        onClick={() =>
                          showToast(`Inquiring about ${proj.title}`)
                        }
                      >
                        <span>Request Demo</span>
                        <ChevronRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="fade-item" style={{ textAlign: 'center', marginTop: '48px' }}>
              <a
                href="https://github.com/luqmanwazir06"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <GithubIcon size={18} />
                <span>Explore More Repositories on GitHub</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ================= SERVICES SECTION ================= */}
        <section className="fade-section" id="services">
          <div className="wrap">
            <div className="section-head fade-item">
              <span className="section-tag">
                <Layers size={14} /> What I Deliver
              </span>
              <h2 className="section-title">
                Comprehensive <span className="gradient-text">Engineering Services</span>
              </h2>
              <p className="section-desc">
                From database modeling and secure RESTful servers to responsive web applications and
                creative visual systems.
              </p>
            </div>

            <div className="services-grid fade-item">
              {SERVICES.map((s, idx) => {
                const Icon = s.icon
                return (
                  <div className="card service-card" key={idx}>
                    <div className="service-icon-box">
                      <Icon size={26} />
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ================= CERTIFICATES SECTION ================= */}
        <section className="fade-section" id="certificates">
          <div className="wrap">
            <div className="section-head fade-item">
              <span className="section-tag">
                <Award size={14} /> Verified Credentials
              </span>
              <h2 className="section-title">
                Certifications &amp; <span className="gradient-text">Achievements</span>
              </h2>
              <p className="section-desc">
                Professional technical training, leadership boot camps, and athletic championships.
                Click on any credential to view the original certificate in high resolution.
              </p>
            </div>

            <div className="fade-item">
              <div className="filter-tabs">
                <button
                  type="button"
                  className={`filter-tab ${certCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setCertCategory('all')}
                >
                  All Credentials ({CERTS.length})
                </button>
                <button
                  type="button"
                  className={`filter-tab ${certCategory === 'tech' ? 'active' : ''}`}
                  onClick={() => setCertCategory('tech')}
                >
                  Tech &amp; Design
                </button>
                <button
                  type="button"
                  className={`filter-tab ${certCategory === 'leadership' ? 'active' : ''}`}
                  onClick={() => setCertCategory('leadership')}
                >
                  Leadership &amp; Community
                </button>
                <button
                  type="button"
                  className={`filter-tab ${certCategory === 'sports' ? 'active' : ''}`}
                  onClick={() => setCertCategory('sports')}
                >
                  Athletics &amp; Sports
                </button>
              </div>

              <div className="certs-grid">
                {filteredCerts.map((cert) => (
                  <div
                    className="card cert-card"
                    key={cert.id}
                    onClick={() => setActiveModalCert(cert)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setActiveModalCert(cert)}
                  >
                    <div className="cert-img-container">
                      <img
                        src={`${import.meta.env.BASE_URL}certificates/${cert.image}`}
                        alt={cert.title}
                        loading="lazy"
                      />
                      <div className="cert-zoom-overlay">
                        <Eye size={28} />
                      </div>
                    </div>

                    <div className="cert-info">
                      <div className="cert-meta">
                        <span>{cert.categoryLabel}</span>
                        {cert.year && <span>{cert.year}</span>}
                      </div>
                      <h3>{cert.title}</h3>
                      <p className="cert-desc">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certificate Lightbox Modal */}
        {activeModalCert && (
          <div
            className="modal-backdrop"
            onClick={() => setActiveModalCert(null)}
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setActiveModalCert(null)}
                aria-label="Close Certificate Preview"
              >
                <X size={20} />
              </button>

              <div className="modal-img-wrap">
                <img
                  src={`${import.meta.env.BASE_URL}certificates/${activeModalCert.image}`}
                  alt={activeModalCert.title}
                />
              </div>

              <div className="modal-body">
                <div className="cert-meta" style={{ marginBottom: '8px' }}>
                  <span>{activeModalCert.categoryLabel}</span>
                  <span>{activeModalCert.year || 'Certified'}</span>
                </div>
                <h3>{activeModalCert.title}</h3>
                <p style={{ color: 'var(--accent-indigo)', fontWeight: 600, marginBottom: '10px' }}>
                  Issued by: {activeModalCert.issuer}
                </p>
                <p className="cert-desc">{activeModalCert.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* ================= JOURNEY SECTION ================= */}
        <section className="fade-section" id="journey">
          <div className="wrap">
            <div className="section-head fade-item">
              <span className="section-tag">
                <GraduationCap size={14} /> Career Timeline
              </span>
              <h2 className="section-title">
                Education &amp; <span className="gradient-text">Experience</span>
              </h2>
              <p className="section-desc">
                My academic path in Computer Science, professional studio roles, and development training.
              </p>
            </div>

            <div className="timeline fade-item">
              <div className="timeline-progress-bar" />
              {JOURNEY.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div className="timeline-item" key={idx}>
                    <div className="timeline-dot" />
                    <div className="card timeline-card">
                      <div className="timeline-meta">
                        <Icon size={16} color="var(--accent-cyan)" />
                        <span className="timeline-period">{item.period}</span>
                      </div>
                      <h3 className="timeline-role">{item.role}</h3>
                      <div className="timeline-org">{item.org}</div>
                      <p className="timeline-desc">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ================= CONTACT SECTION ================= */}
        <section className="fade-section" id="contact">
          <div className="wrap">
            <div className="section-head fade-item">
              <span className="section-tag">
                <Mail size={14} /> Let's Connect
              </span>
              <h2 className="section-title">
                Have a Project in Mind? <span className="gradient-text">Let's Build It</span>
              </h2>
              <p className="section-desc">
                Whether you need a full-stack MERN application, custom REST API, offline desktop software,
                or UI consultation, send me a message and I'll respond within 24 hours.
              </p>
            </div>

            <div className="contact-grid fade-item">
              {/* Contact Form */}
              <form className="card contact-form" onSubmit={handleEmailSubmit}>
                <div className="form-group">
                  <label htmlFor="user-name">Your Full Name</label>
                  <input
                    id="user-name"
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="e.g. Alex Johnson"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="user-email">Email Address</label>
                  <input
                    id="user-email"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="e.g. alex@company.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="user-message">Project Description &amp; Details</label>
                  <textarea
                    id="user-message"
                    name="message"
                    className="form-control"
                    placeholder="Briefly describe what you would like to build..."
                    required
                  />
                </div>

                <div className="form-buttons">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={contactStatus === 'sending'}
                  >
                    <Send size={16} />
                    <span>{contactStatus === 'sending' ? 'Sending Message...' : 'Send Message'}</span>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleWhatsAppSend}
                  >
                    <MessageCircle size={16} color="var(--accent-emerald)" />
                    <span>Send on WhatsApp</span>
                  </button>
                </div>

                {contactStatus === 'ok' && (
                  <div className="form-status-msg status-ok">
                    <CheckCircle2 size={16} />
                    <span>Message dispatched successfully! Thank you for reaching out.</span>
                  </div>
                )}
                {contactStatus === 'err' && (
                  <div className="form-status-msg status-err">
                    <X size={16} />
                    <span>Could not send form directly. Please use WhatsApp or email directly!</span>
                  </div>
                )}
              </form>

              {/* Direct Connect Info Cards */}
              <div className="contact-info-cards">
                <div className="card info-card">
                  <div className="info-card-left">
                    <div className="info-icon">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="info-label">Direct Email</div>
                      <div className="info-value">meluqman06@gmail.com</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="info-copy-btn"
                    onClick={() => copyToClipboard('meluqman06@gmail.com', 'Email address')}
                    title="Copy Email"
                  >
                    <Copy size={14} />
                    <span>Copy</span>
                  </button>
                </div>

                <div className="card info-card">
                  <div className="info-card-left">
                    <div className="info-icon" style={{ color: 'var(--accent-emerald)', background: 'rgba(16,185,129,0.12)' }}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="info-label">Phone &amp; WhatsApp</div>
                      <div className="info-value">+92 345 0541641</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="info-copy-btn"
                    onClick={() => copyToClipboard('+923450541641', 'WhatsApp number')}
                    title="Copy WhatsApp"
                  >
                    <Copy size={14} />
                    <span>Copy</span>
                  </button>
                </div>

                <div className="card info-card">
                  <div className="info-card-left">
                    <div className="info-icon" style={{ color: 'var(--accent-cyan)', background: 'rgba(6,182,212,0.12)' }}>
                      <Compass size={20} />
                    </div>
                    <div>
                      <div className="info-label">Current Location</div>
                      <div className="info-value">Dera Ismail Khan, KP, Pakistan</div>
                    </div>
                  </div>
                  <span className="skill-item-level" style={{ fontSize: '12px' }}>
                    Open to Remote
                  </span>
                </div>

                {/* Social Channels */}
                <div className="social-links-grid">
                  {SOCIAL_LINKS.map((soc) => {
                    const Icon = soc.icon
                    return (
                      <a
                        key={soc.label}
                        href={soc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn"
                        title={soc.label}
                      >
                        <Icon size={20} />
                        <span>{soc.label}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="main-footer">
        <div className="wrap">
          <div className="footer-content">
            <div className="footer-left">
              <span className="footer-brand">Muhammad Luqman</span>
              <p>Full-Stack MERN Developer · Dera Ismail Khan, Pakistan</p>
            </div>

            <div className="hero-cta-group" style={{ margin: 0 }}>
              <a href="#home" className="btn btn-outline btn-sm">
                Back to Top ↑
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Muhammad Luqman. Built with React, Vite, Node, and GSAP. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <aside className="toast-notice" role="status" aria-live="polite">
          <Check size={16} color="var(--accent-emerald)" />
          <span>{toastMessage}</span>
        </aside>
      )}
    </>
  )
}
