import './Security.css'

const certs = [
  {
    name: 'ISO 42001',
    abbr: 'ISO\n42001',
    desc: 'ISO 42001 certified, our AI governance framework gives customers confidence in how we build and run AI.',
  },
  {
    name: 'ISO 27001',
    abbr: 'ISO\n27001',
    desc: 'Legora is fully certified with ISO 27001, the internationally recognised standard for information security management.',
  },
  {
    name: 'SOC Type 2',
    abbr: 'SOC\nType 2',
    desc: 'We meet SOC 2 requirements to ensure secure and compliant management of data across all our systems.',
  },
  {
    name: 'GDPR',
    abbr: 'GDPR',
    desc: 'With our technical team based in Sweden, we operate under GDPR — the world\'s strictest standard for data privacy.',
  },
  {
    name: 'HIPAA',
    abbr: 'HIPAA',
    desc: 'We safeguard your protected health information with HIPAA-compliant processes, policies, and technical controls.',
  },
]

export default function Security() {
  return (
    <section className="security-section">
      <div className="security-top">
        <div className="security-headline-wrap">
          <h2 className="security-headline">
            Compliant with the most rigorous<br />security and safety standards.
          </h2>
          <a href="#" className="security-read-more">↳ Read more</a>
        </div>
        <div className="security-sub-wrap">
          <p className="security-sub-text">
            SOC 2 Type II. ISO 27001. GDPR. HIPAA. Zero AI training on your data.
          </p>
          <p className="security-sub-text">
            Built for the confidentiality demands of the world's leading legal teams.
          </p>
        </div>
      </div>

      <div className="security-cards">
        {certs.map(c => (
          <div className="security-card" key={c.name}>
            <div className="security-card-content">
              <p className="security-card-title">{c.name}</p>
              <p className="security-card-desc">{c.desc}</p>
            </div>
            <div className="security-badge">
              <svg className="security-badge-ring" viewBox="0 0 52 52">
                <circle cx="26" cy="26" r="24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                <circle cx="26" cy="26" r="19" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
              </svg>
              <span className="security-badge-text">{c.abbr}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
