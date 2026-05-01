import { useEffect, useState } from "react";

const BlommaLogo = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),   // dot appears
      setTimeout(() => setPhase(2), 700),   // inner petals bloom
      setTimeout(() => setPhase(3), 1400),  // outer petals expand
      setTimeout(() => setPhase(4), 2100),  // circle ring draws
      setTimeout(() => setPhase(5), 2800),  // BLOMMA text
      setTimeout(() => setPhase(6), 3500),  // CONSULTANCY text
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const petal = (rotate, delay) => (
    <g transform={`rotate(${rotate}, 0, 0)`} style={{ transformOrigin: "0 0" }}>
      <path
        d="M0,0 C6,-18 6,-36 0,-44 C-6,-36 -6,-18 0,0"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={{
          opacity: phase >= 2 ? 1 : 0,
          strokeDasharray: 90,
          strokeDashoffset: phase >= 2 ? 0 : 90,
          transition: `stroke-dashoffset 0.6s cubic-bezier(0.4,0,0.2,1) ${delay}s, opacity 0.3s ease ${delay}s`,
        }}
      />
    </g>
  );

  const outerPetal = (rotate, delay) => (
    <g transform={`rotate(${rotate}, 0, 0)`} style={{ transformOrigin: "0 0" }}>
      <path
        d="M0,0 C10,-28 10,-56 0,-70 C-10,-56 -10,-28 0,0"
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.2"
        strokeLinecap="round"
        style={{
          opacity: phase >= 3 ? 1 : 0,
          strokeDasharray: 150,
          strokeDashoffset: phase >= 3 ? 0 : 150,
          transition: `stroke-dashoffset 0.7s cubic-bezier(0.4,0,0.2,1) ${delay}s, opacity 0.3s ease ${delay}s`,
        }}
      />
    </g>
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a1628",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Georgia', serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow behind logo */}
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(100,140,220,0.12) 0%, transparent 70%)",
          opacity: phase >= 2 ? 1 : 0,
          transition: "opacity 1.2s ease 1s",
          pointerEvents: "none",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 36 }}>
        {/* SVG Flower */}
        <svg
          width="180"
          height="180"
          viewBox="-90 -90 180 180"
          style={{ overflow: "visible" }}
        >
          {/* Outer ring */}
          <circle
            cx="0"
            cy="0"
            r="78"
            fill="none"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.5"
            strokeDasharray={`${2 * Math.PI * 78}`}
            strokeDashoffset={phase >= 4 ? 0 : 2 * Math.PI * 78}
            style={{
              transition: "stroke-dashoffset 0.8s cubic-bezier(0.4,0,0.2,1) 0s",
              transformOrigin: "0 0",
              transform: "rotate(-90deg)",
            }}
          />

          {/* Outer decorative petals (45-degree offsets) */}
          {[45, 135, 225, 315].map((r, i) => outerPetal(r, 0.1 * i))}

          {/* Inner petals (axis-aligned) */}
          {[0, 90, 180, 270].map((r, i) => petal(r, 0.1 * i))}

          {/* Center dot */}
          <circle
            cx="0"
            cy="0"
            r="5"
            fill="white"
            style={{
              opacity: phase >= 1 ? 1 : 0,
              transform: phase >= 1 ? "scale(1)" : "scale(0)",
              transformOrigin: "0 0",
              transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          />

          {/* Inner center ring */}
          <circle
            cx="0"
            cy="0"
            r="10"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1"
            style={{
              opacity: phase >= 2 ? 1 : 0,
              transition: "opacity 0.5s ease 0.3s",
            }}
          />
        </svg>

        {/* Text block */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          {/* BLOMMA */}
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              letterSpacing: "0.25em",
              color: "white",
              fontFamily: "'Georgia', 'Times New Roman', serif",
              opacity: phase >= 5 ? 1 : 0,
              transform: phase >= 5 ? "translateY(0)" : "translateY(14px)",
              transition: "opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)",
              textShadow: "0 0 40px rgba(150,180,255,0.25)",
              lineHeight: 1,
            }}
          >
            BLOMMA
          </div>

          {/* Divider */}
          <div
            style={{
              width: phase >= 6 ? 200 : 0,
              height: 1,
              background: "rgba(255,255,255,0.25)",
              transition: "width 0.5s cubic-bezier(0.4,0,0.2,1) 0.1s",
            }}
          />

          {/* CONSULTANCY */}
          <div
            style={{
              fontSize: 13,
              fontWeight: 400,
              letterSpacing: "0.5em",
              color: "rgba(255,255,255,0.7)",
              fontFamily: "'Georgia', serif",
              opacity: phase >= 6 ? 1 : 0,
              transform: phase >= 6 ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.7s cubic-bezier(0.4,0,0.2,1) 0.15s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.15s",
              textTransform: "uppercase",
            }}
          >
            Consultancy
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlommaLogo;
