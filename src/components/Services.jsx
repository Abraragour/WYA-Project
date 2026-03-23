import { useInView } from "../hooks/useInView";
import { SERVICES } from "../data";

export default function Services() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} style={{ background: "#0a1220", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{
            fontFamily: "'Barlow', sans-serif", color: "#06b6d4",
            letterSpacing: "0.3em", textTransform: "uppercase", fontSize: "0.75rem", marginBottom: "0.8rem",
          }}>What We Offer</p>
          <h2 style={{
            fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#fff", letterSpacing: "0.05em",
          }}>Our <span style={{ color: "#06b6d4" }}>Services</span></h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {SERVICES.map((s, i) => (
            <div key={i}
              onMouseOver={e => {
                e.currentTarget.style.borderColor = "rgba(6,182,212,0.5)";
                e.currentTarget.style.background = "rgba(6,182,212,0.05)";
              }}
              onMouseOut={e => {
                e.currentTarget.style.borderColor = "rgba(6,182,212,0.12)";
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
              }}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(6,182,212,0.12)",
                borderRadius: 12, padding: "2rem", cursor: "pointer",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ${i * 0.08}s`,
              }}>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{s.icon}</div>
              <h3 style={{
                fontFamily: "'Bebas Neue', cursive", color: "#fff",
                fontSize: "1.3rem", letterSpacing: "0.05em", marginBottom: "0.7rem",
              }}>{s.title}</h3>
              <p style={{
                fontFamily: "'Barlow', sans-serif", color: "rgba(255,255,255,0.55)",
                fontSize: "0.9rem", lineHeight: 1.7, margin: 0,
              }}>{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
