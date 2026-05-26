import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  {
    label: 'Utveckling',
    dropdown: [
      { title: 'Webbutveckling', sub: 'Skräddarsydda webbapplikationer', path: '/webbutveckling' },
      { title: 'Apputveckling', sub: 'iOS & Android', path: '/apputveckling' },
      { title: 'Systemutveckling', sub: 'CRM, ERP & affärssystem', path: '/systemutveckling' },
      { title: 'AI-lösningar', sub: 'Intelligenta automationer', path: '/ai-losningar' },
    ],
  },
  {
    label: 'IT-tjänster',
    dropdown: [
      { title: 'IT-Drift & Hosting', sub: 'AWS & molnlösningar', path: '/it-drift' },
      { title: 'Cybersäkerhet', sub: 'Skydda din verksamhet', path: '/cybersakerhet' },
      { title: 'Integrationer', sub: 'API & systemkopplingar', path: '/integrationer' },
      { title: 'IT-Support', sub: 'Löpande drift och support', path: '/it-support' },
    ],
  },
  { label: 'Vår Expertis', path: '/expertis' },
  { label: 'Kundcase', path: '/kundcase' },
  { label: 'Om Oss', path: '/om-oss' },
]

export default function Navbar({ dark = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [lockedDropdown, setLockedDropdown] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleDropdownClick = (e, path) => {
    e.preventDefault()
    navigate(path)
    setOpenDropdown(null)
    setLockedDropdown(null)
  }

  const navClass = [
    'navbar',
    dark ? 'navbar--dark' : '',
    scrolled ? 'navbar--scrolled' : '',
  ].filter(Boolean).join(' ')

  return (
    <nav className={navClass}>
      <div className="navbar-inner">
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="navbar-item"
              onMouseEnter={() => {
                if (link.dropdown) {
                  setOpenDropdown(link.label)
                }
              }}
              onMouseLeave={() => {
                if (!lockedDropdown) {
                  setOpenDropdown(null)
                }
              }}
            >
              {/* NAV LINK */}
              <a
                href="#"
                className="navbar-link"
                onClick={(e) => {
                  e.preventDefault()

                  // if normal page
                  if (link.path) {
                    navigate(link.path)
                    setOpenDropdown(null)
                    setLockedDropdown(null)
                    return
                  }

                  // if dropdown → toggle lock
                  if (link.dropdown) {
                    setLockedDropdown((prev) =>
                      prev === link.label ? null : link.label
                    )
                    setOpenDropdown(link.label)
                  }
                }}
              >
                {link.label}

                {link.dropdown && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    style={{ marginLeft: 4 }}
                  >
                    <path
                      d={
                        openDropdown === link.label
                          ? 'M2 6.5l3-3 3 3'
                          : 'M2 3.5l3 3 3-3'
                      }
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </a>

              {/* DROPDOWN */}
              {link.dropdown && openDropdown === link.label && (
                <div className="navbar-dropdown">
                  {link.dropdown.map((item) => (
                    <a
                      href="#"
                      className="dropdown-item"
                      key={item.title}
                      onClick={(e) =>
                        handleDropdownClick(e, item.path)
                      }
                    >
                      <span className="dropdown-title">
                        {item.title}
                      </span>
                      <span className="dropdown-sub">
                        {item.sub}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* LOGO */}
        <a href="/" className="navbar-logo">
          Legora
        </a>

        {/* ACTIONS */}
        <div className="navbar-actions">
     

          <a
            href="#"
            className="btn-demo"
            onClick={(e) => {
              e.preventDefault()
              navigate('/demo')
            }}
          >
            kontakta oss
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </nav>
  )
}