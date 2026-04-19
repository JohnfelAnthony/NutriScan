import { useState, useEffect, useCallback } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.classList.remove("menu-open");
  }, []);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.classList.toggle("menu-open", next);
  };

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) closeMenu();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [closeMenu]);

  return (
    <header className="site-header" id="top">
      <div className="brand">
        <span className="brand-mark" aria-hidden="true"></span>
        NutriScan
      </div>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-nav"
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        id="site-nav"
        className={`site-nav${menuOpen ? " is-open" : ""}`}
        aria-label="Primary"
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#features">
        Features
      </a>
    </header>
  );
}
