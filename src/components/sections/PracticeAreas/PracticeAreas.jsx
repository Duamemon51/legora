import { useState } from 'react'
import './PracticeAreas.css'

const areas = [
  {
    name: 'Banking',
    img: 'https://picsum.photos/seed/banking/400/520',
    desc: 'Navigate financing, regulatory filings, and loan documentation with speed and accuracy across jurisdictions.',
  },
  {
    name: 'M&A',
    img: 'https://picsum.photos/seed/ma/400/620',
    desc: 'Accelerate due diligence, contract review, and closing workflows across complex transactions.',
  },
  {
    name: 'Litigation',
    img: 'https://picsum.photos/seed/litigation/400/680',
    desc: 'Research case law, analyse documents at scale, and build arguments with AI-assisted precision.',
  },
  {
    name: 'Tax',
    img: 'https://picsum.photos/seed/tax/400/620',
    desc: 'Analyse complex tax rulings and legislation across jurisdictions with speed and clarity.',
  },
  {
    name: 'Insurance',
    img: 'https://picsum.photos/seed/insurance/400/520',
    desc: 'Review policies, assess coverage disputes, and monitor regulatory updates automatically.',
  },
]

export default function PracticeAreas() {
  const [active, setActive] = useState(2)

  return (
    <section className="practice-section">
      <div className="practice-heading">
        <h2 className="practice-title">
          Every team.<br />Every practice.
        </h2>
        <p className="practice-sub">
          Legora handles complex workflows and its technology firms and
          in-house teams: from intake to final delivery.
        </p>
      </div>

      <div className="practice-gallery">
        {areas.map((area, i) => (
          <div
            className={`practice-card ${active === i ? 'practice-card--active' : ''}`}
            key={area.name}
            onClick={() => setActive(i)}
          >
            <img src={area.img} alt={area.name} />
            <span className="practice-label">{area.name}</span>
            {active === i && (
              <div className="practice-card-desc">
                <p className="practice-card-desc-text">{area.desc}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
