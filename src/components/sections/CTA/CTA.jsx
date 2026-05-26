import './CTA.css'

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-card">
      <div className="cta-left">
        <h2 className="cta-headline">
          Discover the future of legal work through a live product demo.
        </h2>
        <p className="cta-desc">
          Experience the Legora aOS™ in action — from agentic workflows and
          legal research to seamless collaboration and client delivery through Portal.
        </p>
        <a href="#" className="cta-btn">Book a demo →</a>
      </div>

      <div className="cta-right">
        <svg className="cta-illustration" viewBox="0 0 420 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Document stack */}
          <rect x="140" y="60" width="130" height="170" rx="6" fill="white" fillOpacity="0.12" stroke="white" strokeOpacity="0.3" strokeWidth="1.5"/>
          <rect x="150" y="70" width="130" height="170" rx="6" fill="white" fillOpacity="0.08" stroke="white" strokeOpacity="0.2" strokeWidth="1.5"/>
          <rect x="160" y="80" width="130" height="170" rx="6" fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.4" strokeWidth="1.5"/>
          {/* Lines on document */}
          <line x1="180" y1="112" x2="270" y2="112" stroke="white" strokeOpacity="0.35" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="180" y1="128" x2="260" y2="128" stroke="white" strokeOpacity="0.25" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="180" y1="144" x2="265" y2="144" stroke="white" strokeOpacity="0.25" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="180" y1="160" x2="245" y2="160" stroke="white" strokeOpacity="0.25" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="180" y1="176" x2="255" y2="176" stroke="white" strokeOpacity="0.25" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Person 1 - left, leaning over */}
          <circle cx="100" cy="108" r="16" fill="white" fillOpacity="0.9"/>
          <line x1="100" y1="124" x2="100" y2="178" stroke="white" strokeOpacity="0.85" strokeWidth="3" strokeLinecap="round"/>
          <line x1="100" y1="140" x2="70" y2="158" stroke="white" strokeOpacity="0.85" strokeWidth="3" strokeLinecap="round"/>
          <line x1="100" y1="140" x2="140" y2="150" stroke="white" strokeOpacity="0.85" strokeWidth="3" strokeLinecap="round"/>
          <line x1="100" y1="178" x2="82" y2="215" stroke="white" strokeOpacity="0.85" strokeWidth="3" strokeLinecap="round"/>
          <line x1="100" y1="178" x2="118" y2="215" stroke="white" strokeOpacity="0.85" strokeWidth="3" strokeLinecap="round"/>
          {/* Person 2 - right, pointing up */}
          <circle cx="328" cy="100" r="16" fill="white" fillOpacity="0.9"/>
          <line x1="328" y1="116" x2="328" y2="170" stroke="white" strokeOpacity="0.85" strokeWidth="3" strokeLinecap="round"/>
          <line x1="328" y1="132" x2="358" y2="112" stroke="white" strokeOpacity="0.85" strokeWidth="3" strokeLinecap="round"/>
          <line x1="328" y1="132" x2="295" y2="148" stroke="white" strokeOpacity="0.85" strokeWidth="3" strokeLinecap="round"/>
          <line x1="328" y1="170" x2="312" y2="210" stroke="white" strokeOpacity="0.85" strokeWidth="3" strokeLinecap="round"/>
          <line x1="328" y1="170" x2="344" y2="210" stroke="white" strokeOpacity="0.85" strokeWidth="3" strokeLinecap="round"/>
          {/* Magnifying glass */}
          <circle cx="340" cy="58" r="22" stroke="white" strokeOpacity="0.7" strokeWidth="2.5" fill="none"/>
          <line x1="356" y1="74" x2="372" y2="90" stroke="white" strokeOpacity="0.7" strokeWidth="3" strokeLinecap="round"/>
          {/* Small stars/sparkles */}
          <circle cx="72" cy="72" r="3" fill="white" fillOpacity="0.5"/>
          <circle cx="360" cy="180" r="2" fill="white" fillOpacity="0.4"/>
          <circle cx="190" cy="52" r="2.5" fill="white" fillOpacity="0.45"/>
        </svg>
      </div>
      </div>
    </section>
  )
}
