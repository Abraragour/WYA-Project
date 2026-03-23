export default function Footer() {
  return (
    <footer style={{
      background: "#040b14",
      borderTop: "1px solid rgba(6,182,212,0.1)",
      padding: "3rem 2rem 2rem",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>

          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 6,
              background: "linear-gradient(135deg, #06b6d4, #0e7490)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Bebas Neue', cursive", fontSize: 15, color: "#fff",
            }}>W+</div>
            <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 18, color: "#fff", letterSpacing: 3 }}>
              WYA<span style={{ color: "#06b6d4" }}>+</span>
            </span>
          </div>

          {/* Copyright */}
          <p style={{
            fontFamily: "'Barlow', sans-serif", color: "rgba(255,255,255,0.35)",
            fontSize: "0.82rem", margin: 0,
          }}>© WYA+ 2024. All Rights Reserved.</p>

          {/* Social */}
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["LinkedIn", "Twitter", "Instagram"].map(s => (
              <button key={s} style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Barlow', sans-serif", color: "rgba(255,255,255,0.4)",
                fontSize: "0.8rem", letterSpacing: "0.1em",
              }}>{s}</button>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
