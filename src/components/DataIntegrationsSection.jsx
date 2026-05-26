import { useEffect, useRef } from "react";

const INTEGRATIONS = [
  {
    label: "SharePoint",
    bg: "#fff",
    render: () => (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
        <circle cx="20" cy="20" r="14" fill="#036C70" />
        <circle cx="28" cy="24" r="11" fill="#1A9BA1" />
        <circle cx="28" cy="34" r="9" fill="#37C6D0" />
        <rect x="14" y="14" width="16" height="20" rx="2" fill="white" opacity="0.15" />
        <text x="20" y="26" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="Arial">S</text>
      </svg>
    ),
  },
  {
    label: "Monday",
    bg: "#fff",
    render: () => (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
        <ellipse cx="24" cy="24" rx="18" ry="14" fill="#1F58D6" />
        <ellipse cx="24" cy="24" rx="18" ry="14" fill="url(#mondayGrad)" />
        <defs>
          <radialGradient id="mondayGrad" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#4B8FFF" />
            <stop offset="100%" stopColor="#1F3BBD" />
          </radialGradient>
        </defs>
        <text x="24" y="29" textAnchor="middle" fill="white" fontSize="15" fontWeight="800" fontFamily="Arial">m</text>
      </svg>
    ),
  },
  {
    label: "NetDocuments",
    bg: "#fff",
    render: () => (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
        <polygon points="24,6 42,18 42,30 24,42 6,30 6,18" fill="none" stroke="#00ADEF" strokeWidth="2.5" />
        <circle cx="24" cy="24" r="4" fill="#00ADEF" />
        <line x1="24" y1="6" x2="24" y2="20" stroke="#00ADEF" strokeWidth="2" />
        <line x1="42" y1="18" x2="28" y2="22" stroke="#00ADEF" strokeWidth="2" />
        <line x1="42" y1="30" x2="28" y2="26" stroke="#00ADEF" strokeWidth="2" />
        <line x1="24" y1="42" x2="24" y2="28" stroke="#00ADEF" strokeWidth="2" />
        <line x1="6" y1="30" x2="20" y2="26" stroke="#00ADEF" strokeWidth="2" />
        <line x1="6" y1="18" x2="20" y2="22" stroke="#00ADEF" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "Database",
    bg: "#fff",
    render: () => (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="6" width="36" height="36" rx="10" fill="#29B6C8" />
        <ellipse cx="24" cy="18" rx="10" ry="4" fill="white" opacity="0.9" />
        <path d="M14 18 v6 c0 2.2 4.5 4 10 4s10-1.8 10-4 v-6" fill="white" opacity="0.6" />
        <path d="M14 24 v6 c0 2.2 4.5 4 10 4s10-1.8 10-4 v-6" fill="white" opacity="0.35" />
      </svg>
    ),
  },
  {
    label: "iManage",
    bg: "#fff",
    render: () => (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="14" width="32" height="6" rx="3" fill="#E85D26" />
        <rect x="8" y="22" width="32" height="6" rx="3" fill="#F28C2A" />
        <rect x="8" y="30" width="32" height="6" rx="3" fill="#F5B84A" />
      </svg>
    ),
  },
  {
    label: "Salesforce",
    bg: "#fff",
    render: () => (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
        <path d="M20 14c1.5-3 5-4 8-2.5 1.5-2.5 4.5-3.5 7-2 .5-1.5 2-2.5 3.5-2 2.5.5 4 3.5 3 6 2 .5 3.5 2.5 3 4.5-.5 2.5-3 4-5.5 3.5-.5 2-2.5 3.5-5 3-1 1.5-3 2.5-5 2-2 .5-4-.5-5-2-2.5.5-5-1-5.5-3.5-.5-2.5 1-5 3.5-5.5-.5-1.5 0-3 1-4.5C18 14.5 19 14 20 14z" fill="#00A1E0" />
        <text x="24" y="29" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Arial">SF</text>
      </svg>
    ),
  },
  {
    label: "Outlook",
    bg: "#fff",
    render: () => (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="22" height="28" rx="4" fill="#0078D4" />
        <rect x="20" y="14" width="22" height="20" rx="3" fill="#50A8F0" />
        <rect x="20" y="14" width="22" height="20" rx="3" fill="url(#outGrad)" />
        <defs>
          <linearGradient id="outGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#50A8F0" />
            <stop offset="100%" stopColor="#0366A7" />
          </linearGradient>
        </defs>
        <ellipse cx="17" cy="24" rx="6" ry="7" fill="white" opacity="0.95" />
        <ellipse cx="17" cy="24" rx="4" ry="5" fill="#0078D4" />
      </svg>
    ),
  },
  {
    label: "Westlaw",
    bg: "#fff",
    render: () => (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="6" width="36" height="36" rx="8" fill="#C8102E" />
        <text x="24" y="30" textAnchor="middle" fill="white" fontSize="18" fontWeight="800" fontFamily="Georgia, serif">W</text>
      </svg>
    ),
  },
];

function IconCard({ integration, style }) {
  return (
    <div
      style={{
        width: 100,
        height: 100,
        borderRadius: 24,
        background: "white",
        border: "1px solid rgba(0,0,0,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
        flexShrink: 0,
        ...style,
      }}
    >
      {integration.render()}
    </div>
  );
}

function OrbitingIcons() {
  const containerRef = useRef(null);

  useEffect(() => {
    const icons = containerRef.current?.querySelectorAll(".orbit-icon");
    if (!icons) return;

    const total = icons.length;
    const radius = 130;
    const cx = 175;
    const cy = 175;
    let frame;
    let start = null;

    function animate(ts) {
      if (!start) start = ts;
      const elapsed = (ts - start) / 1000;

      icons.forEach((el, i) => {
        const angle = (2 * Math.PI * i) / total + elapsed * 0.35;
        const x = cx + radius * Math.cos(angle) - 50;
        const y = cy + radius * Math.sin(angle) - 50;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });

      frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: 350,
        height: 350,
        flexShrink: 0,
      }}
    >
      {/* Orbit ring */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 260,
          height: 260,
          borderRadius: "50%",
          border: "1px dashed rgba(0,0,0,0.12)",
          pointerEvents: "none",
        }}
      />

      {/* Center logo */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 64,
          height: 64,
          borderRadius: 16,
          background: "#1a1a1a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        }}
      >
        <span style={{ color: "white", fontSize: 22, fontFamily: "Georgia, serif", fontWeight: 400 }}>L</span>
      </div>

      {/* Orbiting icons */}
      {INTEGRATIONS.map((integration, i) => (
        <div
          key={i}
          className="orbit-icon"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 100,
            height: 100,
            borderRadius: 24,
            background: "white",
            border: "1px solid rgba(0,0,0,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            transition: "box-shadow 0.2s",
            cursor: "default",
          }}
        >
          {integration.render()}
        </div>
      ))}
    </div>
  );
}

export default function DataIntegrationsSection() {
  return (
    <section
      style={{
        background: "#f0f0ea",
        display: "flex",
        alignItems: "stretch",
        minHeight: "70vh",
        overflow: "hidden",
      }}
    >
      {/* Left: Orbiting icons */}
      <div
        style={{
          flex: "0 0 52%",
          background: "#e8e8e0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 48,
          overflow: "hidden",
        }}
      >
        <OrbitingIcons />
      </div>

      {/* Right: Text */}
      <div
        style={{
          flex: 1,
          padding: "64px 56px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(32px, 3.5vw, 52px)",
            fontWeight: 400,
            color: "#111",
            letterSpacing: "-0.04em",
            margin: "0 0 16px",
            fontFamily: "'Georgia', serif",
            lineHeight: 1.1,
          }}
        >
          Data &amp; integrations
        </h2>
        <p
          style={{
            fontSize: 14,
            color: "#555",
            margin: "0 0 20px",
            fontWeight: 500,
            letterSpacing: "-0.01em",
          }}
        >
          What the aOS connects to.
        </p>
        <p
          style={{
            fontSize: 13.5,
            color: "#888",
            lineHeight: 1.75,
            margin: "0 0 32px",
            maxWidth: 380,
          }}
        >
          The aOS unifies everything under one roof so you can handle matters
          smarter and faster. DMS integrations, document ingestion, content
          sources, third-party legal services, and MCP connectors all feed into
          the agent's context.
        </p>
        <a
          href="#"
          style={{
            fontSize: 13.5,
            color: "#555",
            textDecoration: "none",
            fontWeight: 450,
            letterSpacing: "-0.01em",
          }}
        >
          ↳ Integrations
        </a>
      </div>
    </section>
  );
}