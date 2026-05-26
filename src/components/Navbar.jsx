import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  {
    label: 'Utveckling',
    dropdown: [
      { title: 'Webbutveckling',  sub: 'Skräddarsydda webbapplikationer', path: '/webbutveckling' },
      { title: 'Apputveckling',   sub: 'iOS & Android',                   path: '/apputveckling' },
      { title: 'Systemutveckling',sub: 'CRM, ERP & affärssystem',         path: '/systemutveckling' },
      { title: 'AI-lösningar',    sub: 'Intelligenta automationer',        path: '/ai-losningar' },
    ],
  },
  {
    label: 'IT-tjänster',
    dropdown: [
      { title: 'IT-Drift & Hosting', sub: 'AWS & molnlösningar',      path: '/it-drift' },
      { title: 'Cybersäkerhet',      sub: 'Skydda din verksamhet',    path: '/cybersakerhet' },
      { title: 'Integrationer',      sub: 'API & systemkopplingar',   path: '/integrationer' },
      { title: 'IT-Support',         sub: 'Löpande drift och support',path: '/it-support' },
    ],
  },
  { label: 'Vår Expertis', path: '/expertis' },
  { label: 'Kundcase',     path: '/kundcase' },
  { label: 'Om Oss',       path: '/om-oss' },
]

/* ─── Chevron SVG ─────────────────────────────────────────── */
const Chevron = ({ open }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    style={{ marginLeft: 4 }}
  >
    <path
      d={open ? 'M2 6.5l3-3 3 3' : 'M2 3.5l3 3 3-3'}
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function Navbar({ dark = false }) {
  const [scrolled,        setScrolled]        = useState(false)
  const [openDropdown,    setOpenDropdown]     = useState(null)
  const [lockedDropdown,  setLockedDropdown]   = useState(null)
  const [drawerOpen,      setDrawerOpen]       = useState(false)
  const [drawerSection,   setDrawerSection]    = useState(null)  // which sub-menu is expanded in drawer

  const navigate    = useNavigate()
  const drawerRef   = useRef(null)

  /* ── Scroll listener ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Lock body scroll when drawer is open ── */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  /* ── Close drawer on Escape ── */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setDrawerOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  /* ── Helpers ── */
  const goTo = (path) => {
    navigate(path)
    setOpenDropdown(null)
    setLockedDropdown(null)
    setDrawerOpen(false)
  }

  const navClass = [
    'navbar',
    dark       ? 'navbar--dark'        : '',
    scrolled   ? 'navbar--scrolled'    : '',
    drawerOpen ? 'navbar--drawer-open' : '',
  ].filter(Boolean).join(' ')

  return (
    <>
      {/* ──────────────── NAVBAR BAR ──────────────── */}
      <nav className={navClass}>
        <div className="navbar-inner">

          {/* LEFT: desktop links / mobile hamburger */}
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="navbar-item"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => { if (!lockedDropdown) setOpenDropdown(null) }}
              >
                <a
                  href="#"
                  className="navbar-link"
                  onClick={(e) => {
                    e.preventDefault()
                    if (link.path) { goTo(link.path); return }
                    if (link.dropdown) {
                      setLockedDropdown(prev => prev === link.label ? null : link.label)
                      setOpenDropdown(link.label)
                    }
                  }}
                >
                  {link.label}
                  {link.dropdown && <Chevron open={openDropdown === link.label} />}
                </a>

                {link.dropdown && openDropdown === link.label && (
                  <div className="navbar-dropdown">
                    {link.dropdown.map((item) => (
                      <a
                        href="#"
                        className="dropdown-item"
                        key={item.title}
                        onClick={(e) => { e.preventDefault(); goTo(item.path) }}
                      >
                        <span className="dropdown-title">{item.title}</span>
                        <span className="dropdown-sub">{item.sub}</span>
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger (mobile only) */}
          <button
            className={`navbar-hamburger${drawerOpen ? ' is-open' : ''}`}
            onClick={() => setDrawerOpen(v => !v)}
            aria-label={drawerOpen ? 'Stäng meny' : 'Öppna meny'}
            aria-expanded={drawerOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>

          {/* CENTER: logo */}
          <a href="/" className="navbar-logo" onClick={(e) => { e.preventDefault(); goTo('/') }}>
            Legora
          </a>

          {/* RIGHT: actions */}
          <div className="navbar-actions">
            <a
              href="#"
              className="btn-demo"
              onClick={(e) => { e.preventDefault(); goTo('/demo') }}
            >
              kontakta oss
              <span className="btn-arrow">→</span>
            </a>
          </div>

        </div>
      </nav>

      {/* ──────────────── MOBILE DRAWER ──────────────── */}
      <div
        className={`navbar-drawer${drawerOpen ? ' is-open' : ''}`}
        ref={drawerRef}
        aria-hidden={!drawerOpen}
      >
        {/* Overlay — click to close */}
        <div
          className="navbar-drawer-overlay"
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />

        {/* Panel */}
        <div
          className="navbar-drawer-panel"
          role="dialog"
          aria-label="Navigationsmeny"
        >
          {/* Drawer header */}
          <div className="drawer-header">
            <a
              href="/"
              className="drawer-logo"
              onClick={(e) => { e.preventDefault(); goTo('/') }}
            >
              Legora
            </a>
            <button
              className="drawer-close"
              onClick={() => setDrawerOpen(false)}
              aria-label="Stäng meny"
            >
              ✕
            </button>
          </div>

          {/* Drawer nav items */}
          <nav className="drawer-nav">
            {navLinks.map((link) => {
              if (link.dropdown) {
                const isOpen = drawerSection === link.label
                return (
                  <div className="drawer-section" key={link.label}>
                    <button
                      className="drawer-section-toggle"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setDrawerSection(prev => prev === link.label ? null : link.label)
                      }
                    >
                      {link.label}
                      <span className="drawer-toggle-icon">
                        <svg width="14" height="14" viewBox="0 0 10 10" fill="none">
                          <path
                            d="M2 3.5l3 3 3-3"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>

                    <div className={`drawer-sub${isOpen ? ' is-open' : ''}`}>
                      {link.dropdown.map((item) => (
                        <a
                          key={item.title}
                          href="#"
                          className="drawer-sub-item"
                          onClick={(e) => { e.preventDefault(); goTo(item.path) }}
                        >
                          <span className="drawer-sub-title">{item.title}</span>
                          <span className="drawer-sub-text">{item.sub}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )
              }

              return (
                <a
                  key={link.label}
                  href="#"
                  className="drawer-link"
                  onClick={(e) => { e.preventDefault(); goTo(link.path) }}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* Drawer CTA */}
          <div className="drawer-footer">
            <a
              href="#"
              className="drawer-cta"
              onClick={(e) => { e.preventDefault(); goTo('/demo') }}
            >
              Kontakta oss
              <span className="drawer-cta-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}