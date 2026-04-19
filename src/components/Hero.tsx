
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            eat with <span className="hero-accent">Confidence</span> every time.
          </h1>

          <p className="hero-subtitle">
            Not all foods are safe for everyone. NutriScan tells you what's right for your body.
          </p>

          <div className="hero-actions">
            <a href="#features" className="btn btn-primary">
              Explore the app
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" aria-hidden="true"></div>
          <img
            className="hero-phone hero-phone-back"
            src="dashboard.png"
            alt="NutriScan dashboard screen"
          />
          <img
            className="hero-phone hero-phone-mid"
            src="hero-phone.png"
            alt="NutriScan scan camera screen"
          />
          <img
            className="hero-phone"
            src="scan-result.png"
            alt="NutriScan result screen showing a condition-aware verdict"
          />
        </div>
      </div>
    </section>
  );
}
