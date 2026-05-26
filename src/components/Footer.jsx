import { Link } from 'react-router-dom'
import './Footer.css'

const cols = [
  {
    title: 'Utveckling',
    links: [
      { label: 'Webbutveckling', path: '/webbutveckling' },
      { label: 'Apputveckling', path: '/apputveckling' },
      { label: 'Systemutveckling', path: '/systemutveckling' },
      { label: 'AI-lösningar', path: '/ai-losningar' },
    ],
  },
  {
    title: 'It-Tjänster',
    links: [
      { label: 'IT-Drift & Hosting', path: '/it-drift' },
      { label: 'Cybersäkerhet', path: '/cybersakerhet' },
      { label: 'Integrationer', path: '/integrationer' },
      { label: 'IT-Support', path: '/it-support' },
    ],
  },
  {
    title: 'Företag',
    links: [
       { label: 'Vår Expertis', path: '/expertis' },
  { label: 'Kundcase', path: '/kundcase' },
  { label: 'Om Oss', path: '/om-oss' },
      { label: 'Kontakta oss', path: '/demo' },
    ],
  },
  {
    title: 'Socialt',
    links: [
      { label: 'Instagram', path: '#' },
      { label: 'Facebook', path: '#' },
      { label: 'LinkedIn', path: '#' },
      { label: 'TikTok', path: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-nav">
        {cols.map(col => (
          <div className="footer-col" key={col.title}>
            <p className="footer-col-title">{col.title}</p>
            <ul>
              {col.links.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-wordmark-wrap">
        <p className="footer-wordmark">LEGORA</p>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <Link to="/legora-terms-of-use">Terms of use</Link>
          <Link to="/legora-privacy-policy">Privacy Policy</Link>
          <Link to="/legora-security-policy">Security Policy</Link>
        </div>
        <div className="footer-bottom-right">
          <span>© 2026 Legora. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}