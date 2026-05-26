import './Quote.css'

export default function Quote() {
  return (
    <section className="quote-section">
      <div className="section-inner">
        <div className="quote-card">
          <p className="quote-text">
            "Lawyers bring judgment, strategy, and creativity.
            AI brings speed, scale, and precision. Legora exists to
            make that combination unstoppable."
          </p>
          <div className="quote-author">
            <div className="quote-author-avatar">MJ</div>
            <div>
              <p className="quote-author-name">Max Junestrand</p>
              <p className="quote-author-role">CEO &amp; Co-founder, Legora</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
