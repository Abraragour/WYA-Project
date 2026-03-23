import { useInView } from "../hooks/useInView";
import { STATS } from "../data";

export default function StatsBar() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} style={{
      background: "linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)",
      padding: "3rem 2rem",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "2rem", textAlign: "center",
      }}>
        {STATS.map((s, i) => (
          <div key={i} style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: `all 0.5s ${i * 0.1}s`,
          }}>
            <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "3rem", color: "#fff", lineHeight: 1 }}>
              {s.value}
            </div>
            <div style={{
              fontFamily: "'Barlow', sans-serif", color: "rgba(255,255,255,0.8)",
              fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4,
            }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
