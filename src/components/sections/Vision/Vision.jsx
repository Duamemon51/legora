import './Vision.css'

export default function Vision() {
  return (
    <section className="vision-section">
      <div className="vision-left">
        <h2 className="vision-heading">Our Vision</h2>

        <div className="vision-author">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg"
            alt="Max Junestrand"
            className="vision-author-img"
          />
          <div className="vision-author-info">
            <p className="vision-author-name">Max Junestrand</p>
            <p className="vision-author-role">Co-founder &amp; CEO</p>
            <p className="vision-signature">Max</p>
          </div>
        </div>
      </div>

      <div className="vision-right">
        <div className="vision-img-text">
          <p className="vision-text">
            Lawyers bring judgment, strategy, and creativity. AI brings speed,
            scale, and precision. Together, they unlock new possibilities for how
            legal work gets done.
          </p>
          <p className="vision-text">
            Our vision is to give every lawyer the tools to focus on what matters
            most — advising clients, shaping outcomes, and driving value. By
            making complex workflows simpler and more efficient, we help lawyers
            spend less time on admin and more time doing law at its highest level.
          </p>
          <p className="vision-text">
            We're building more than a product: alongside industry professionals,
            we're building a new golden standard for legal work. A future where tech
            complements expertise, where legal excellence is accessible to all, and
            every lawyer has the freedom to do their best work.
          </p>
        </div>
        <img
          src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Legora office"
          className="vision-office-img"
        />
      </div>
    </section>
  )
}
