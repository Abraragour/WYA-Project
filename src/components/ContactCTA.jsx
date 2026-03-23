import { useInView } from "../hooks/useInView";

export default function ContactCTA() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} style={{
      background: "linear-gradient(135deg, #0a1220 0%, #061a1a 100%)",
      padding: "7rem 2rem", position: "relative", overflow: "hidden",
    }}>
      {/* Glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)",
        filter: "blur(40px)", pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative",
        opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.7s",
      }}>
        <p style={{
          fontFamily: "'Barlow', sans-serif", color: "#06b6d4",
          letterSpacing: "0.3em", textTransform: "uppercase", fontSize: "0.75rem", marginBottom: "1rem",
        }}>Get In Touch</p>
        <h2 style={{
          fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(2.2rem, 5vw, 4rem)",
          color: "#fff", letterSpacing: "0.03em", lineHeight: 1.1, marginBottom: "1.5rem",
        }}>Ready to Transform Your <span style={{ color: "#06b6d4" }}>Engineering Projects?</span></h2>
        <p style={{
          fontFamily: "'Barlow', sans-serif", color: "rgba(255,255,255,0.6)",
          fontSize: "1rem", lineHeight: 1.8, marginBottom: "2.5rem",
        }}>
          Let's collaborate to bring your architectural and engineering vision to life using cutting-edge BIM technology.
        </p>
        <button style={{
          background: "linear-gradient(135deg, #06b6d4, #0e7490)",
          color: "#fff", border: "none", borderRadius: 8,
          padding: "15px 44px", cursor: "pointer",
          fontFamily: "'Barlow', sans-serif", fontWeight: 700,
          fontSize: "0.95rem", letterSpacing: "0.12em", textTransform: "uppercase",
          boxShadow: "0 0 30px rgba(6,182,212,0.25)",
        }}>Contact Us Today</button>
      </div>
    </section>
  );
}
