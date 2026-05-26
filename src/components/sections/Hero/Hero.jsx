import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" style={{ height: '100vh', minHeight: '100vh', alignItems: 'flex-end' }}>
      <video
        className="hero-video"
        src="https://videos.pexels.com/video-files/3195440/3195440-hd_1920_1080_25fps.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-overlay" />

      <div className="hero-inner">
        <h1 className="hero-headline">
          Legal work, without limits.
        </h1>
        <div className="hero-bottom">
          <p className="hero-sub">Collaborative AI for exceptional lawyers</p>
          <a href="#" className="btn-primary">
           kontakta oss
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}