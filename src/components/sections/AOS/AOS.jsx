import { useState } from 'react'
import './AOS.css'

const layers = [
  { label: 'Large Language Models', desc: 'State-of-the-art foundation models optimised for legal reasoning and complex document analysis.' },
  { label: 'Agentic Harness', desc: 'Orchestration layer that plans and executes complex multi-step legal tasks autonomously.' },
  { label: 'Data & Integrations', desc: 'Seamless connectors to your DMS, email, matter management, and external databases.' },
  { label: 'Context & Knowledge', desc: 'Persistent memory of your matters, clients, precedents, and firm-specific knowledge.' },
  { label: 'Legal Capabilities', desc: 'Purpose-built tools for research, drafting, review, and analysis across practice areas.' },
  { label: 'Products & Interfaces', desc: 'Word, Outlook, web editor, mobile — working where lawyers already work.' },
  { label: 'Security & Governance', desc: 'The foundation that makes the aOS enterprise-ready. Zero AI training on your data, SOC 2, ISO 27001, GDPR compliant. Built into every layer.' },
]

export default function AOS() {
  const [active, setActive] = useState(6)

  return (
    <section className="aos-section">
      <div className="section-inner">
        <div className="aos-header">
          <h2 className="aos-title">Introducing the Legora aOS</h2>
          <p className="aos-intro">The agentic operating system for legal work</p>
        </div>

        <div className="aos-viz">
          {/* Left labels */}
          <div className="aos-labels">
            {layers.map((layer, i) => (
              <button
                key={layer.label}
                className={`aos-label-btn ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
              >
                {layer.label}
              </button>
            ))}
          </div>

          {/* 3D Stack */}
          <div className="aos-3d-wrap">
            <div className="aos-3d-scene">
              <div className="aos-3d-stack">
                {[...layers].reverse().map((layer, ri) => {
                  const i = layers.length - 1 - ri
                  return (
                    <div
                      key={layer.label}
                      className={`aos-3d-layer ${active === i ? 'aos-3d-layer--active' : ''}`}
                      style={{ '--layer-i': i }}
                      onClick={() => setActive(i)}
                    >
                      <span className="aos-3d-layer-label">{i === 3 ? 'aOS' : ''}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right description */}
          <div className="aos-desc-panel">
            <p className="aos-desc-title">{layers[active].label}</p>
            <p className="aos-desc-text">{layers[active].desc}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
