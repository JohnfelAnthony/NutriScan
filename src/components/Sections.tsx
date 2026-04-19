
const base = import.meta.env.BASE_URL;

const screens = [
  {
    id: "dashboard",
    img: `${base}dashboard.png`,
    title: "Home dashboard",
    role: "Daily guidance overview",
    desc: "Opens to your daily safety summary, current condition profile, and a single tap to start scanning.",
  },
  {
    id: "camera",
    img: `${base}camera.png`,
    title: "Scan experience",
    role: "Fast capture flow",
    desc: "Switch between camera and barcode mode in one tap. Designed for grocery aisles and quick meal checks.",
  },
  {
    id: "result",
    img: `${base}scan-result.png`,
    title: "Result screen",
    role: "The core verdict view",
    desc: "Verdict, confidence level, flagged nutrients, and a suggested safer alternative — all in one screen.",
    featured: true,
  },
  {
    id: "nutribot",
    img: `${base}nutribot.png`,
    title: "NutriBot guidance",
    role: "Explainability on demand",
    desc: "Ask follow-up questions about any result. NutriBot explains the nutrition logic in plain language.",
  },
  {
    id: "history",
    img: `${base}history.png`,
    title: "History and trends",
    role: "Habit review",
    desc: "Review your scan log, see recurring risk patterns, and track condition-aware decisions over time.",
  },
];

export default function Sections() {
  return (
    <>
      {/* ══ 1. WHY IT MATTERS ══ */}
      <section className="section section-white reveal-section" id="about">
        <div className="section-inner">
          <div className="why-layout">
            <div className="why-lead">
              <p className="section-kicker">Why it matters</p>
              <h2 className="section-title">
                A food label does not reflect your condition.
              </h2>
              <p className="section-subtitle">
                Two people can eat the same meal and have very different health
                outcomes. Generic labels cannot account for that. NutriScan can.
              </p>
            </div>

            <div className="why-evidence">
              <div className="evidence-item">
                <p className="evidence-label">The gap</p>
                <p className="evidence-text">
                  Standard nutrition facts are designed for a general
                  population. They do not flag when a food exceeds the safe
                  sodium range for someone managing hypertension, or when a
                  carbohydrate load is problematic for a diabetic user.
                </p>
              </div>
              <div className="evidence-divider" />
              <div className="evidence-item">
                <p className="evidence-label">The real-world context</p>
                <p className="evidence-text">
                  Most food decisions happen in seconds — during grocery runs,
                  at meal prep, or while ordering. There is no time to cross-
                  reference condition guidelines. NutriScan gives a direct
                  answer in that moment.
                </p>
              </div>
              <div className="evidence-divider" />
              <div className="evidence-item">
                <p className="evidence-label">What changes with NutriScan</p>
                <p className="evidence-text">
                  Instead of a label, you get a verdict. Instead of numbers,
                  you get reasoning. Instead of guessing, you get guidance
                  matched to your profile.
                </p>
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
            Each screen plays a specific role in the decision journey, with the
            result view as the visual anchor.
          </p>

          <div className="screen-story-list">
            {screens.map((screen) => (
              <article
                className={`screen-story${
                  screen.featured ? " is-featured" : ""
                }`}
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

      {/* ══ 3. TRUST ══ */}
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
                {[
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
                ].map((item) => (
                  <article key={item.title}>
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
