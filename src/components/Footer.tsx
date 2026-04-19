const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner">

        {/* ── Contact Section ── */}
        <div className="footer-contact">
          <div className="footer-contact-lead">
            <p className="section-kicker">Get in touch</p>
            <h2>Have questions about NutriScan?</h2>
            <p className="footer-contact-sub">
              We're happy to hear from you — whether it's feedback, a partnership
              inquiry, or a question about the app.
            </p>
          </div>

          <div className="footer-contact-details">
            <div className="contact-item">
              <p className="evidence-label">Email</p>
              <a href="mailto:hello@nutriscan.app">hello@nutriscan.app</a>
            </div>
            <div className="contact-item">
              <p className="evidence-label">Phone</p>
              <a href="tel:+639171234567">+63 917 123 4567</a>
            </div>
            <div className="contact-item">
              <p className="evidence-label">Address</p>
              <p>123 Landco Business Park, J.P. Laurel Ave, Bajada, Davao City, Philippines</p>
            </div>
            <div className="contact-item">
              <p className="evidence-label">Hours</p>
              <p>Mon – Fri, 9:00 AM – 5:00 PM (PST)</p>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="footer-bottom">
          <div>
            <div className="footer-brand">
              <span className="brand-mark" aria-hidden="true"></span>
              <span className="footer-brand-name">NutriScan</span>
            </div>
            <p className="footer-tagline">Condition-aware food guidance.</p>
          </div>

          <nav className="footer-links" aria-label="Footer">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-right">
            <p className="copyright">© {year} NutriScan. All rights reserved.</p>
            <p className="copyright">Educational use. Not medical diagnosis.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
