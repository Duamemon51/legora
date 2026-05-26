import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  {
    label: "Platform",
    dropdown: [
      { title: "Agentic Harness", sub: "Orchestration engine for legal agents" },
      { title: "Data & Integrations", sub: "Connect your existing systems" },
      { title: "Context & Knowledge", sub: "Compound institutional knowledge" },
      { title: "Legal Capabilities", sub: "Jurisdiction-aware legal research" },
    ],
  },
  {
    label: "Products",
    dropdown: [
      { title: "Products & Interfaces", sub: "Where lawyers & clients work" },
      { title: "Agent Workspace", sub: "Draft, review, and research" },
      { title: "Tabular Review", sub: "Review at scale" },
      { title: "Client Portal", sub: "Deliver work to clients" },
    ],
  },
  { label: "Security" },
  { label: "Customers" },
  { label: "About" },
];

const LAYERS = [
  { id: "llm", label: "Large Language Models", color: "#c8c8c8" },
  { id: "harness", label: "Agentic Harness", color: "#b0b0b0", desc: "The agentic harness is the orchestration engine turning general-purpose LLMs into legal-specific agents. LLMs are necessary but insufficient for legal work." },
  { id: "data", label: "Data & Integrations", color: "#989898" },
  { id: "context", label: "Context & Knowledge", color: "#808080" },
  { id: "legal", label: "Legal Capabilities", color: "#686868" },
  { id: "products", label: "Products & Interfaces", color: "#505050" },
  { id: "security", label: "Security & Governance", color: "#383838" },
];

const PLAYBOOK_RULES = [
  { num: "1.0", label: "Define Confidential Information" },
  { num: "2.0", label: "Parties Involved" },
  { num: "3.0", label: "Purpose" },
  { num: "4.0", label: "Limit the Scope" },
  { num: "5.0", label: "Defined Term" },
  { num: "6.0", label: "Outline Exclusion" },
  { num: "7.0", label: "Return or Destruction Clause" },
  { num: "8.0", label: "Ownership Rights" },
  { num: "9.0", label: "Establish Disclosers" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleEnter = (label) => {
    clearTimeout(closeTimer.current);
    setOpen(label);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 120);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.35s, box-shadow 0.35s",
        background: scrolled ? "rgba(247,247,243,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.07)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Links left */}
        <ul
          style={{
            display: "flex",
            gap: 4,
            listStyle: "none",
            margin: 0,
            padding: 0,
            alignItems: "center",
          }}
        >
          {NAV_LINKS.map((link) => (
            <li
              key={link.label}
              style={{ position: "relative" }}
              onMouseEnter={() => handleEnter(link.label)}
              onMouseLeave={handleLeave}
            >
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 450,
                  color: "#1a1a1a",
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                  transition: "background 0.15s",
                  background: open === link.label ? "rgba(0,0,0,0.05)" : "transparent",
                }}
              >
                {link.label}
                {link.dropdown && (
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                    <path
                      d={open === link.label ? "M2 6.5l3-3 3 3" : "M2 3.5l3 3 3-3"}
                      stroke="#1a1a1a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </a>

              {link.dropdown && open === link.label && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 6px)",
                    left: 0,
                    background: "rgba(252,252,250,0.97)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(0,0,0,0.09)",
                    borderRadius: 14,
                    boxShadow: "0 12px 48px rgba(0,0,0,0.12)",
                    padding: 8,
                    minWidth: 240,
                    animation: "dropIn 0.18s ease",
                  }}
                >
                  {link.dropdown.map((item) => (
                    <a
                      key={item.title}
                      href="#"
                      style={{
                        display: "block",
                        padding: "10px 14px",
                        borderRadius: 8,
                        textDecoration: "none",
                        transition: "background 0.12s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.04)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <div style={{ fontSize: 13.5, fontWeight: 500, color: "#111", letterSpacing: "-0.01em" }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: 12, color: "#888", marginTop: 2, fontWeight: 400 }}>
                        {item.sub}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Center logo */}
        <a
          href="#"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: 17,
            fontWeight: 600,
            color: "#111",
            textDecoration: "none",
            letterSpacing: "-0.03em",
            fontFamily: "'Georgia', serif",
          }}
        >
          Legora
        </a>

        {/* Right actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <a
            href="#"
            style={{
              fontSize: 14,
              color: "#444",
              textDecoration: "none",
              padding: "6px 12px",
              borderRadius: 8,
              fontWeight: 450,
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            Log in
          </a>
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13.5,
              fontWeight: 500,
              color: "#111",
              textDecoration: "none",
              padding: "7px 14px",
              borderRadius: 20,
              background: "#e8e8e2",
              border: "1px solid rgba(0,0,0,0.08)",
              transition: "background 0.15s",
              letterSpacing: "-0.01em",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#d8d8d0")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#e8e8e2")}
          >
            Book a demo <span style={{ fontSize: 12 }}>→</span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
}

function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5ef",
        textAlign: "center",
        padding: "0 24px",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(52px, 8vw, 96px)",
          fontWeight: 400,
          color: "#111",
          letterSpacing: "-0.04em",
          margin: "0 0 20px",
          fontFamily: "'Georgia', serif",
          lineHeight: 1,
        }}
      >
        Legora aOS™
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontSize: 16,
            color: "#666",
            margin: 0,
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        >
          The agentic operating system for legal work
        </p>
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13.5,
            fontWeight: 500,
            color: "#111",
            textDecoration: "none",
            padding: "8px 16px",
            borderRadius: 20,
            background: "#ecece6",
            border: "1px solid rgba(0,0,0,0.09)",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#dcdcd4")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#ecece6")}
        >
          Book a demo <span>→</span>
        </a>
      </div>
    </section>
  );
}

function LayersSection() {
  const [active, setActive] = useState("harness");

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#e8e8e2",
        display: "flex",
        alignItems: "center",
        padding: "80px 48px",
        gap: 80,
      }}
    >
      {/* Left: layer list */}
      <div style={{ flex: "0 0 320px" }}>
        {active && LAYERS.find((l) => l.id === active)?.desc && (
          <div
            style={{
              background: "rgba(40,40,40,0.82)",
              borderRadius: 16,
              padding: "20px 22px",
              marginBottom: 20,
              maxWidth: 320,
              animation: "fadeUp 0.2s ease",
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 600, color: "#aaa", letterSpacing: "0.06em", marginBottom: 6, textTransform: "uppercase" }}>
              {LAYERS.find((l) => l.id === active)?.label}
            </div>
            <p style={{ fontSize: 13.5, color: "#ddd", margin: 0, lineHeight: 1.6 }}>
              {LAYERS.find((l) => l.id === active)?.desc}
            </p>
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {LAYERS.map((layer) => (
            <button
              key={layer.id}
              onClick={() => setActive(layer.id)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 16px",
                borderRadius: 24,
                border: "1px solid rgba(0,0,0,0.1)",
                background: active === layer.id ? "rgba(40,40,40,0.78)" : "rgba(200,200,196,0.7)",
                color: active === layer.id ? "#fff" : "#333",
                fontSize: 13.5,
                fontWeight: 450,
                cursor: "pointer",
                transition: "all 0.18s",
                letterSpacing: "-0.01em",
                textAlign: "left",
              }}
            >
              {layer.label}
              <span
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: "1.5px solid",
                  borderColor: active === layer.id ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  color: active === layer.id ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.4)",
                }}
              >
                +
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Right: stacked 3D-ish layers */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: 800,
        }}
      >
        <div
          style={{
            position: "relative",
            width: 380,
            height: 280,
            transformStyle: "preserve-3d",
            transform: "rotateX(30deg) rotateZ(-15deg)",
          }}
        >
          {LAYERS.slice()
            .reverse()
            .map((layer, i) => {
              const ri = LAYERS.length - 1 - i;
              const isActive = layer.id === active;
              return (
                <div
                  key={layer.id}
                  onClick={() => setActive(layer.id)}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    height: 52,
                    bottom: ri * 34,
                    borderRadius: 14,
                    background: isActive
                      ? "linear-gradient(135deg, #aaa 0%, #888 100%)"
                      : `linear-gradient(135deg, ${layer.color} 0%, ${layer.color}bb 100%)`,
                    boxShadow: isActive
                      ? "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.25)"
                      : "0 4px 16px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.25s",
                    transform: isActive ? "translateY(-8px)" : "none",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.85)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {layer.label}
                  </span>
                </div>
              );
            })}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}


export default function LegoraLanding() {
  return (
    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <LayersSection />
      
      <Footer />
    </div>
  );
}