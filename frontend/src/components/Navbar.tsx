import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const NAV_LINKS = [
  { to: "/", label: "Beranda" },
  { to: "/tentang", label: "Template" },
  { to: "/Photobooth", label: "Photobooth" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const path = location.pathname.toLowerCase();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const isActive = (to: string) => {
    if (to === "/") return path === "/";
    return path === to.toLowerCase();
  };

  return (
    <nav
      id="navbar"
      className={`navbar navbar-expand-lg navbar-custom ${
        scrolled ? "scrolled" : ""
      } ${menuOpen ? "menu-open" : ""}`}
    >
      <div className="container navbar-inner-wrap">
        {/* Mobile Brand (hidden on desktop) */}
        <Link
          to="/"
          className="navbar-mobile-brand"
          onClick={() => setMenuOpen(false)}
        >
          JUSTFOTO<span className="brand-dot">.ID</span>
        </Link>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className={`navbar-toggle-btn ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        {/* Desktop Navigation */}
        <div className="navbar-nav ms-auto navbar-desktop">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${isActive(item.to) ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Backdrop */}
      {menuOpen && (
        <div
          className="navbar-mobile-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Dropdown Drawer */}
      <div
        id="mobile-nav-menu"
        className={`navbar-mobile-drawer ${menuOpen ? "is-open" : ""}`}
      >
        <div className="navbar-mobile-links">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`mobile-nav-link ${isActive(item.to) ? "active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              <span>{item.label}</span>
              <span className="mobile-nav-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
