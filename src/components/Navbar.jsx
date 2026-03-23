import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      transition: "all 0.4s ease",
      background: scrolled ? "rgba(10,18,28,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(6,182,212,0.15)" : "none",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 70,
      }}>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 38, height: 38, borderRadius: 8,
            background: "linear-gradient(135deg, #06b6d4, #0e7490)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Bebas Neue', cursive", fontSize: 18, color: "#fff",
          }}>W+</div>
          <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 22, color: "#fff", letterSpacing: 3 }}>
            WYA<span style={{ color: "#06b6d4" }}>+</span>
          </span>
        </div>

        {/* Links */}
        <ul className="nav-desktop" style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <button onClick={() => setActive(l)} style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Barlow', sans-serif", fontWeight: 600,
                fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase",
                color: active === l ? "#06b6d4" : "rgba(255,255,255,0.8)",
                padding: "4px 0",
                borderBottom: active === l ? "2px solid #06b6d4" : "2px solid transparent",
                transition: "all 0.2s",
              }}>{l}</button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onMouseOver={e => e.target.style.opacity = 0.85}
          onMouseOut={e => e.target.style.opacity = 1}
          style={{
            background: "linear-gradient(135deg, #06b6d4, #0e7490)",
            color: "#fff", border: "none", borderRadius: 6,
            padding: "10px 22px", cursor: "pointer",
            fontFamily: "'Barlow', sans-serif", fontWeight: 700,
            fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase",
          }}>Contact Us</button>
      </div>
    </nav>
  );
}
