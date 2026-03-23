import { useState, useEffect } from "react";
import { SLIDES } from "../data";

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setFade(false);
      setTimeout(() => { setIdx((i) => (i + 1) % SLIDES.length); setFade(true); }, 400);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[idx];

  return (
    <section style={{
      position: "relative", height: "100vh", overflow: "hidden",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      {/* Background */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, #0a1220 0%, #0c2233 50%, #061a1a 100%)",
      }} />

      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.06,
        backgroundImage: `linear-gradient(rgba(6,182,212,1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Glow orb */}
      <div style={{
        position: "absolute", top: "20%", right: "15%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
        filter: "blur(30px)",
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 2, textAlign: "center", padding: "0 2rem", maxWidth: 860,
        opacity: fade ? 1 : 0,
        transform: fade ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.5s, transform 0.5s",
      }}>
        <p style={{
          fontFamily: "'Barlow', sans-serif", fontWeight: 600,
          color: "#06b6d4", letterSpacing: "0.3em", textTransform: "uppercase",
          fontSize: "0.8rem", marginBottom: "1.2rem",
        }}>BIM & Engineering Excellence</p>

        <h1 style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
          color: "#fff", lineHeight: 1.05, letterSpacing: "0.03em", marginBottom: "1.5rem",
        }}>
          {slide.title.split(" ").map((w, i) => (
            <span key={i} style={{ color: ["BIM", "BIM-Powered"].includes(w) ? "#06b6d4" : "#fff" }}>
              {w}{" "}
            </span>
          ))}
        </h1>

        <p style={{
          fontFamily: "'Barlow', sans-serif", color: "rgba(255,255,255,0.65)",
          fontSize: "1.1rem", letterSpacing: "0.05em", marginBottom: "2.5rem",
        }}>{slide.sub}</p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button style={{
            background: "linear-gradient(135deg, #06b6d4, #0e7490)",
            color: "#fff", border: "none", borderRadius: 8,
            padding: "14px 36px", cursor: "pointer",
            fontFamily: "'Barlow', sans-serif", fontWeight: 700,
            fontSize: "0.9rem", letterSpacing: "0.12em", textTransform: "uppercase",
          }}>Our Work</button>
          <button style={{
            background: "transparent", color: "#fff",
            border: "1px solid rgba(255,255,255,0.35)", borderRadius: 8,
            padding: "14px 36px", cursor: "pointer",
            fontFamily: "'Barlow', sans-serif", fontWeight: 600,
            fontSize: "0.9rem", letterSpacing: "0.12em", textTransform: "uppercase",
          }}>View Portfolio</button>
        </div>
      </div>

      {/* Slide dots */}
      <div style={{
        position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
        display: "flex", gap: 10, zIndex: 3,
      }}>
        {SLIDES.map((_, i) => (
          <button key={i}
            onClick={() => { setFade(false); setTimeout(() => { setIdx(i); setFade(true); }, 300); }}
            style={{
              width: i === idx ? 28 : 8, height: 8, borderRadius: 4,
              background: i === idx ? "#06b6d4" : "rgba(255,255,255,0.3)",
              border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s",
            }} />
        ))}
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: 40, right: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <div style={{ width: 1, height: 50, background: "linear-gradient(to bottom, transparent, #06b6d4)" }} />
        <span style={{
          fontFamily: "'Barlow', sans-serif", fontSize: "0.65rem",
          color: "#06b6d4", letterSpacing: "0.2em", textTransform: "uppercase", writingMode: "vertical-rl",
        }}>Scroll</span>
      </div>
    </section>
  );
}
