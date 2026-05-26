import './Footer.css'

const cols = [
  {
    title: 'Product',
    links: ['Legora aOS', 'Word Add-In', 'Outlook Add-In', 'Editor', 'Mobile app', 'Tabular Review', 'Workflows', 'Legal Research', 'Portal', 'Monitors', 'Agent'],
  },
  {
    title: 'Solutions',
    links: ['M&A', 'Litigation', 'Banking', 'Tax', 'Insurance', 'Law firms', 'In-house'],
  },
  {
    title: 'Certified',
    links: ['GDPR', 'AICPA SOC', 'ISO 27001', 'ISO 42001', 'Trust Center'],
  },
  {
    title: 'Company',
    links: ['Careers', 'Blog', 'Press', 'About', 'Contact'],
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
                <li key={link}>
                  <a href="#" className="footer-link">{link}</a>
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
          <a href="#">Terms of use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Security Policy</a>
        </div>
        <div className="footer-bottom-center">
          <a href="#">aOS</a>
          <a href="#">News</a>
          <a href="#">Articles</a>
        </div>
        <div className="footer-bottom-right">
          <a href="#">X</a>
          <a href="#">LinkedIn</a>
          <a href="#">Youtube</a>
          <span>© 2026 Legora. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
