export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-glow" />

      <div className="hero-left">
        <div className="hero-status">
          <span className="hero-status-dot" />
          AI Engineer · Software Developer · Data Scientist
        </div>

        <h1 className="hero-title">
          <div className="name-first">TAIWO</div>
          <div className="name-mid">OLUSOLA</div>
          <div className="name-last">JOSEPH</div>
        </h1>

        <p className="hero-role">
          I turn complex problems into <span>intelligent digital solutions.</span>
        </p>

        <p className="hero-bio">
          I design and build AI-driven systems, scalable software products, and data-informed solutions. From model development and backend engineering to analytics and deployment, I deliver end-to-end technology that creates measurable value.
        </p>

        <div className="hero-ctas">
          <a href="#projects" className="btn-primary">
            View My Work →
          </a>
          <a href="#contact" className="btn-ghost">
            Let&apos;s Build Together
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="photo-container">
          <div className="photo-glitch-2" />
          <div className="photo-glitch-1" />

          <div className="photo-frame-tl" />
          <div className="photo-frame-br" />
          <div className="photo-frame-tr" />
          <div className="photo-frame-bl" />

          <div className="photo-box">
            <img
              src="/Pythonista.jpeg"
              alt="Taiwo Olusola Joseph — AI Engineer | Software Developer | Data Scientist"
              width="100"
              height="100"
            />
            <div className="photo-overlay">
              <span className="photo-label">Taiwo Olusola Joseph · Engineer</span>
            </div>
          </div>

          <div className="badge-float badge-float-1">📊 Data Scientist</div>
          <div className="badge-float badge-float-2">🎓 B.Tech Computer Engineering</div>
          <div className="badge-float badge-float-3">🌐 Full-Stack Developer</div>
        </div>
      </div>
    </section>
  )
}

