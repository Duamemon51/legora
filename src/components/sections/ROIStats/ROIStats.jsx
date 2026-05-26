import './ROIStats.css'

const stats = [
  { value: '68%', desc: 'reported that Legora has reduced non-billable hours' },
  { value: '4.3hrs', desc: 'average non-billable hours saved weekly per lawyer' },
  { value: '$6.9m', desc: 'potential additional yearly billing per 100 lawyers' },
]

export default function ROIStats() {
  return (
    <section className="roi-section">
      <div className="roi-left">
        <p className="roi-text">
          The legal industry is undergoing its most significant transformation
          in a generation. Firms that leaned into AI early are seeing tangible returns.
        </p>
        <p className="roi-text">
          This report puts a credible framework around what leading firms are
          already seeing, and what others can reasonably expect.
        </p>
      </div>

      <div className="roi-right">
        {stats.map((s, i) => (
          <div className="roi-stat" key={i}>
            <p className="roi-value">{s.value}</p>
            <p className="roi-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
