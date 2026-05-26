import './Stats.css'

export default function Stats() {
  return (
    <section className="stats-section">
      <video
        className="stats-video"
        src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="stats-overlay" />

      <div className="stats-content">
        <p className="stats-label">Report</p>
        <h2 className="stats-headline">Measuring the impact of AI on law firms</h2>
        <a href="#" className="stats-link">
          Read more
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  )
}
