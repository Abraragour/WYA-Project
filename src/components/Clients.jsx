import { useInView } from "../hooks/useInView";
import { CLIENTS } from "../data";

export default function Clients() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} style={{ background: "#0a1220", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{
            fontFamily: "'Barlow', sans-serif", color: "#06b6d4",
            letterSpacing: "0.3em", textTransform: "uppercase", fontSize: "0.75rem", marginBottom: "0.8rem",
          }}>Trusted By</p>
          <h2 style={{
            fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#fff", letterSpacing: "0.05em",
          }}>Our <span style={{ color: "#06b6d4" }}>Clients</span></h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "1rem" }}>
          {CLIENTS.map((c, i) => (
            <div key={i}
              onMouseOver={e => e.currentTarget.style.borderColor = "rgba(6,182,212,0.4)"}
              onMouseOut={e => e.currentTarget.style.borderColor = "rgba(6,182,212,0.1)"}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(6,182,212,0.1)",
                borderRadius: 10, padding: "1.4rem 1rem",
                display: "flex", alignItems: "center", justifyContent: "center",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(15px)",
                transition: `all 0.4s ${i * 0.05}s`,
                cursor: "pointer",
              }}>
              <span style={{
                fontFamily: "'Barlow', sans-serif", fontWeight: 700,
                color: "rgba(255,255,255,0.5)", fontSize: "0.85rem",
                letterSpacing: "0.08em", textTransform: "uppercase",
              }}>{c}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
