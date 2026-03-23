import { useInView } from "../hooks/useInView";

const PILLARS = [
  { title: "Mission", text: "To be a pioneering force shaping the future of the Architecture, Engineering, and Construction industry through seamless integration of BIM technology." },
  { title: "Vision", text: "A landscape where cutting-edge technology enhances efficiency, sustainability, and innovation in construction practices across the globe." },
  { title: "Values", text: "Innovation, Excellence, Collaboration, Adaptability, Integrity, Education and Empowerment — our guiding principles for every project." },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} style={{ background: "#070e18", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

          {/* Left */}
          <div style={{
            opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-30px)",
            transition: "all 0.7s",
          }}>
            <p style={{
              fontFamily: "'Barlow', sans-serif", color: "#06b6d4",
              letterSpacing: "0.3em", textTransform: "uppercase", fontSize: "0.75rem", marginBottom: "1rem",
            }}>About WYA+</p>
            <h2 style={{
              fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              color: "#fff", lineHeight: 1.1, marginBottom: "1.5rem",
            }}>Leading Company in <span style={{ color: "#06b6d4" }}>Construction Technology</span></h2>
            <p style={{
              fontFamily: "'Barlow', sans-serif", color: "rgba(255,255,255,0.65)",
              lineHeight: 1.8, fontSize: "1rem", marginBottom: "2rem",
            }}>
              WYA+ is a leading company in construction technology, especially in BIM (Building Information Modeling).
              We focus on three main pillars: education, research, and engineering services — delivering excellence
              to clients across the Middle East and beyond.
            </p>
            <button style={{
              background: "transparent", color: "#06b6d4",
              border: "1px solid #06b6d4", borderRadius: 6,
              padding: "12px 28px", cursor: "pointer",
              fontFamily: "'Barlow', sans-serif", fontWeight: 700,
              fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase",
            }}>Learn More</button>
          </div>

          {/* Right - Pillars */}
          <div style={{
            display: "flex", flexDirection: "column", gap: "1.2rem",
            opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(30px)",
            transition: "all 0.7s 0.2s",
          }}>
            {PILLARS.map((p, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(6,182,212,0.15)",
                borderLeft: "3px solid #06b6d4",
                borderRadius: 8, padding: "1.4rem 1.6rem",
              }}>
                <h4 style={{
                  fontFamily: "'Bebas Neue', cursive", color: "#06b6d4",
                  letterSpacing: "0.1em", fontSize: "1.1rem", marginBottom: "0.5rem",
                }}>{p.title}</h4>
                <p style={{
                  fontFamily: "'Barlow', sans-serif", color: "rgba(255,255,255,0.6)",
                  fontSize: "0.9rem", lineHeight: 1.7, margin: 0,
                }}>{p.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
