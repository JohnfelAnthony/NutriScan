
const base = import.meta.env.BASE_URL;

const screens = [
  {
    id: "dashboard",
    img: `${base}Dashboard_NewW.png`,
    title: "Home dashboard",
    role: "Daily guidance overview",
    desc: "Opens to your daily safety summary, current condition profile, and a single tap to start scanning.",
  },
  {
    id: "camera",
    img: `${base}Scan_NEWw.png`,
    title: "Scan experience",
    role: "Fast capture flow",
    desc: "Switch between camera and barcode mode in one tap. Designed for grocery aisles and quick meal checks.",
    featured: true,
  },
  {
    id: "nutribot",
    img: `${base}Nutri_Bott_New.png`,
    title: "NutriBot guidance",
    role: "Explainability on demand",
    desc: "Ask follow-up questions about any result. NutriBot explains the nutrition logic in plain language.",
  },
  {
    id: "history",
    img: `${base}Histoory_New.png`,
    title: "History and trends",
    role: "Habit review",
    desc: "Review your scan log, see recurring risk patterns, and track condition-aware decisions over time.",
  },
];

const trustItems = [
  {
    title: "Educational support, not diagnosis",
    text: "NutriScan supports day-to-day food decisions. It does not replace clinical advice from your physician or dietitian.",
  },
  {
    title: "Transparent condition logic",
    text: "Each verdict references the specific nutrient signals relevant to your selected health profile, so you know why a food was flagged.",
  },
  {
    title: "Clear language for real moments",
    text: "Verdicts are plain-worded and specific — not generic health scores that require interpretation.",
  },
];

const targetUsers = [
  {
    id: "diabetes",
    title: "Diabetes / Prediabetes",
    desc: "Highlights carb-heavy foods and sugar spikes, making daily choices easier to compare.",
    tags: ["Carb load", "Sugar spikes", "Label clarity"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2s6 6.5 6 10.5a6 6 0 1 1-12 0C6 8.5 12 2 12 2z" />
        <path d="M9 13h6" />
      </svg>
    ),
  },
  {
    id: "hypertension",
    title: "High blood pressure",
    desc: "Flags sodium-heavy foods and pressure-sensitive ingredients so users can choose safer options faster.",
    tags: ["Sodium focus", "Hidden salt", "Daily staples"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
        <path d="M3.5 12h4l2-3 3 6 2-4h4.5" />
      </svg>
    ),
  },
  {
    id: "heart",
    title: "Heart disease / High cholesterol",
    desc: "Surfaces saturated fat and cholesterol signals that often guide heart-friendly decisions.",
    tags: ["Saturated fat", "Cholesterol watch", "Fiber boosts"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 8c2.5 0 3.5 4 7 4s4.5-4 8-4" />
        <path d="M3 16c2.5 0 3.5-4 7-4s4.5 4 8 4" />
        <path d="M12 4v16" />
      </svg>
    ),
  },
  {
    id: "kidney",
    title: "Kidney disease / Renal diet",
    desc: "Highlights nutrients that often require monitoring in kidney care, helping users compare options quickly.",
    tags: ["Potassium check", "Phosphorus watch", "Portion clarity"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2c3.3 4.1 6 6.5 6 10.2a6 6 0 1 1-12 0C6 8.5 8.7 6.1 12 2z" />
        <path d="M12 9c-1.6 1.4-2.6 2.8-2.6 4.4" />
      </svg>
    ),
  },
];

const aboutCards = [
  {
    id: "about",
    title: "About",
    text: "NutriScan is a condition-aware nutrition guide built for fast, everyday decisions.",
  },
  {
    id: "background",
    title: "Background",
    text: "NutriScan grew from the everyday friction of decoding labels while managing chronic conditions.",
  },
  {
    id: "vision",
    title: "Vision",
    text: "Make personalized nutrition guidance feel as common and accessible as a food label.",
  },
];

export default function Sections() {
  return (
    <>
      {/* ══ 1. ABOUT US ══ */}
      <section className="section section-white reveal-section" id="about">
        <div className="section-inner">
          <div className="about-layout">
            <div className="about-copy">
              <div className="about-lead">
                <p className="section-kicker">About us</p>
                <h2 className="section-title">
                  Human-first nutrition guidance.
                </h2>
                <p className="section-subtitle narrow">
                    We help people in need make safer food choices with clear,
                    condition-aware guidance they can act on quickly.
                </p>
              </div>

              <div className="about-cards">
                {aboutCards.map((card) => (
                  <article className="about-card reveal-child" key={card.id}>
                    <p className="about-label">{card.title}</p>
                    <p>{card.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="about-visual reveal-child" aria-hidden="true">
              <div className="about-visual-shell">
                <div className="about-visual-ring ring-one"></div>
                <div className="about-visual-ring ring-two"></div>
                <div className="about-visual-core">
                  <p className="about-visual-kicker">NutriScan</p>
                  <h3>Guidance core</h3>
                  <p>Condition-aware signals</p>
                </div>
                <span className="about-visual-tag tag-one">Hypertension</span>
                <span className="about-visual-tag tag-two">Everyday meals</span>
                <span className="about-visual-tag tag-three">Kidney care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 2. FEATURES (screens showcase) ══ */}
      <section className="section section-soft reveal-section" id="features">
        <div className="section-inner">
          <p className="section-kicker">Product screens showcase</p>
          <h2 className="section-title">See the product in action.</h2>
          <p className="section-subtitle">
            Each screen plays a specific role in the decision journey, from
            capture to follow-up guidance.
          </p>

          <div className="screen-story-list">
            {screens.map((screen) => (
              <article
                className={`screen-story${
                  screen.featured ? " is-featured" : ""
                } reveal-child`}
                key={screen.id}
              >
                <div className="phone-spotlight" aria-hidden="true"></div>
                <img
                  src={screen.img}
                  alt={`${screen.title} in the NutriScan app`}
                />
                <div className="screen-story-copy">
                  <p>{screen.role}</p>
                  <h3>{screen.title}</h3>
                  <p>{screen.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. TARGET USERS ══ */}
      <section className="section section-white reveal-section users-section" id="users">
        <div className="section-inner">
          <div className="users-layout">
            <div className="users-lead">
              <p className="section-kicker">Target users</p>
              <h2 className="section-title">
                Built for people who need certainty, not guesses.
              </h2>
              <p className="section-subtitle">
                NutriScan supports the conditions inside the app: diabetes,
                high blood pressure, heart disease, and kidney disease.
              </p>
              <div className="users-pillset">
                <span className="users-pill">Grocery aisles</span>
                <span className="users-pill">Home cooking</span>
                <span className="users-pill">Dining out</span>
              </div>
            </div>

            <div className="users-grid">
              {targetUsers.map((user) => (
                <article className="user-card reveal-child" key={user.id}>
                  <div className="user-icon" aria-hidden="true">
                    {user.icon}
                  </div>
                  <h3>{user.title}</h3>
                  <p>{user.desc}</p>
                  <div className="user-tags">
                    {user.tags.map((tag) => (
                      <span key={tag} className="user-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. TRUST ══ */}
      <section className="section section-white reveal-section" id="trust">
        <div className="section-inner">
          <div className="trust-layout">
            <div className="trust-lead">
              <p className="section-kicker">Trust and disclaimer</p>
              <h2 className="section-title">
                Designed to explain the verdict, not just show it.
              </h2>
              <p className="section-subtitle">
                Every result includes the nutrient logic behind it. NutriScan
                shows its reasoning, not just a colour.
              </p>

              <div className="trust-list">
                {trustItems.map((item) => (
                  <article key={item.title} className="reveal-child">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside
              className="medical-disclaimer"
              aria-label="Medical disclaimer"
            >
              <div className="medical-disclaimer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
              </div>
              <p className="evidence-label">Medical disclaimer</p>
              <h3>Not a diagnostic tool.</h3>
              <p>
                NutriScan offers educational guidance based on established
                dietary standards for common chronic conditions. It is not
                intended to diagnose, treat, or replace professional medical
                advice.
              </p>
              <p>
                Users managing serious health conditions should consult a
                qualified physician or registered dietitian before making
                significant dietary changes.
              </p>
              <p className="disclaimer-source">
                Nutrient thresholds reference guidelines from the World Health
                Organization (WHO) and the Philippine Department of Health
                (DOH).
              </p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
