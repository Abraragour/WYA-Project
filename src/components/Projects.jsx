import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { PROJECTS } from "../data";

export default function Projects() {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(null);

  return (
    <section ref={ref} style={{ background: "#070e18", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p style={{
              fontFamily: "'Barlow', sans-serif", color: "#06b6d4",
              letterSpacing: "0.3em", textTransform: "uppercase", fontSize: "0.75rem", marginBottom: "0.8rem",
            }}>Our Portfolio</p>
            <h2 style={{
              fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#fff", letterSpacing: "0.05em", margin: 0,
            }}>Recent <span style={{ color: "#06b6d4" }}>Projects</span></h2>
          </div>
          <button style={{
            background: "transparent", color: "#06b6d4",
            border: "1px solid rgba(6,182,212,0.4)", borderRadius: 6,
            padding: "10px 22px", cursor: "pointer",
            fontFamily: "'Barlow', sans-serif", fontWeight: 600,
            fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase",
          }}>View All</button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {PROJECTS.map((p, i) => (
            <div key={i}
              onMouseOver={() => setHovered(i)}
              onMouseOut={() => setHovered(null)}
              style={{
                borderRadius: 12, overflow: "hidden", cursor: "pointer",
                opacity: inView ? 1 : 0,
                transform: inView ? "scale(1)" : "scale(0.95)",
                transition: `all 0.5s ${i * 0.08}s`,
              }}>

              {/* Image area */}
              <div style={{
                height: 220,
                background: "linear-gradient(135deg, #0c2233, #061a1a)",
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", inset: 0, opacity: 0.1,
                  backgroundImage: `repeating-linear-gradient(45deg, #06b6d4 0, #06b6d4 1px, transparent 0, transparent 50%)`,
                  backgroundSize: "20px 20px",
                }} />
                <span style={{
                  fontFamily: "'Bebas Neue', cursive", fontSize: "1.1rem",
                  color: "rgba(6,182,212,0.4)", letterSpacing: "0.2em", textTransform: "uppercase",
                }}>BIM Model</span>
                <div style={{
                  position: "absolute", inset: 0,
                  background: "rgba(6,182,212,0.15)",
                  opacity: hovered === i ? 1 : 0, transition: "opacity 0.3s",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{
                    fontFamily: "'Barlow', sans-serif", color: "#fff",
                    fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase",
                  }}>View Project →</span>
                </div>
              </div>

              {/* Card info */}
              <div style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(6,182,212,0.12)",
                borderTop: "none", borderBottomLeftRadius: 12, borderBottomRightRadius: 12,
                padding: "1.2rem 1.4rem",
              }}>
                <span style={{
                  fontFamily: "'Barlow', sans-serif", color: "#06b6d4",
                  fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase",
                }}>{p.cat}</span>
                <h3 style={{
                  fontFamily: "'Barlow', sans-serif", fontWeight: 700, color: "#fff",
                  fontSize: "1rem", margin: "4px 0 0 0",
                }}>{p.name}</h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
