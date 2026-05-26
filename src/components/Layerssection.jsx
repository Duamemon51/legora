import { useState, useEffect, useRef } from "react";

const LAYERS = [
  {
    id: "llm",
    label: "Large Language Models",
    desc: "General-purpose intelligence as the foundation — powerful but not enough on its own for legal work.",
    color: "rgba(220,220,216,0.55)",
    border: "rgba(255,255,255,0.55)",
  },
  {
    id: "harness",
    label: "Agentic Harness",
    desc: "The orchestration engine turning general-purpose LLMs into legal-specific agents. LLMs are necessary but insufficient for legal work.",
    color: "rgba(205,205,200,0.6)",
    border: "rgba(255,255,255,0.5)",
  },
  {
    id: "data",
    label: "Data & Integrations",
    desc: "Native integrations with DMSs, legal research sources, email, and more. The aOS operates as part of the firm's ecosystem, not alongside it.",
    color: "rgba(190,190,184,0.65)",
    border: "rgba(255,255,255,0.45)",
  },
  {
    id: "context",
    label: "Context & Knowledge",
    desc: "Compound institutional knowledge — matter history, precedents, client preferences — all surfaced at the right moment.",
    color: "rgba(172,172,166,0.7)",
    border: "rgba(255,255,255,0.4)",
  },
  {
    id: "legal",
    label: "Legal Capabilities",
    desc: "Jurisdiction-aware research, contract intelligence, and regulatory mapping built specifically for legal workflows.",
    color: "rgba(155,155,148,0.75)",
    border: "rgba(255,255,255,0.35)",
  },
  {
    id: "products",
    label: "Products & Interfaces",
    desc: "Where lawyers and clients actually work — Agent Workspace, Tabular Review, Client Portal, and more.",
    color: "rgba(136,136,130,0.8)",
    border: "rgba(255,255,255,0.3)",
  },
  {
    id: "security",
    label: "Security & Governance",
    desc: "The foundation that makes the aOS enterprise-ready. Ethical walls, cross-matter isolation, audit trails, and role-based access. Built into every layer, not bolted on.",
    color: "rgba(110,110,104,0.88)",
    border: "rgba(255,255,255,0.25)",
  },
];

export default function LayersSection() {
  const sectionRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  // Scroll-driven: layers appear one by one as user scrolls through a tall section
  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const sectionHeight = el.offsetHeight;
      const scrolled = -rect.top; // how much we've scrolled into the section
      const scrollable = sectionHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / scrollable));
      // Show layers progressively: 0→1 layers at 0%, 7 layers at 100%
      const count = Math.round(progress * LAYERS.length);
      setVisibleCount(count);
      if (count > 0 && activeIndex === null) setActiveIndex(0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  // Auto-highlight most recently revealed layer
  useEffect(() => {
    if (visibleCount > 0) {
      setActiveIndex(visibleCount - 1);
    }
  }, [visibleCount]);

  const active = activeIndex !== null ? LAYERS[activeIndex] : null;

  return (
    // Tall section so scroll has room to drive animation
    <div ref={sectionRef} style={{ height: `${100 + LAYERS.length * 60}vh`, position: "relative" }}>
      {/* Sticky viewport */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          background: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 6vw",
          gap: 48,
        }}
      >
        {/* Left panel */}
        <div style={{ flex: "0 0 300px", display: "flex", flexDirection: "column", gap: 10 }}>
          {/* Active description card */}
          <div
            style={{
              minHeight: 100,
              marginBottom: 12,
              transition: "opacity 0.3s",
              opacity: active ? 1 : 0,
            }}
          >
            {active && (
              <div
                key={active.id}
                style={{
                  background: "rgba(30,30,28,0.84)",
                  backdropFilter: "blur(12px)",
                  borderRadius: 16,
                  padding: "18px 20px",
                  animation: "fadeUp 0.25s ease",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: "#999",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                    fontFamily: "'Helvetica Neue', sans-serif",
                  }}
                >
                  {active.label}
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "#d8d8d4",
                    margin: 0,
                    lineHeight: 1.65,
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  {active.desc}
                </p>
              </div>
            )}
          </div>

          {/* Layer buttons */}
          {LAYERS.map((layer, i) => {
            const shown = i < visibleCount;
            const isActive = activeIndex === i;
            return (
              <button
                key={layer.id}
                onClick={() => shown && setActiveIndex(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "9px 15px",
                  borderRadius: 24,
                  border: "1px solid",
                  borderColor: isActive ? "rgba(0,0,0,0.18)" : "rgba(0,0,0,0.09)",
                  background: isActive
                    ? "rgba(30,30,28,0.82)"
                    : shown
                    ? "rgba(190,190,184,0.55)"
                    : "rgba(200,200,194,0.25)",
                  color: isActive ? "#fff" : shown ? "#333" : "#aaa",
                  fontSize: 13,
                  fontWeight: 450,
                  cursor: shown ? "pointer" : "default",
                  transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                  letterSpacing: "-0.01em",
                  transform: shown ? "translateX(0)" : "translateX(-18px)",
                  opacity: shown ? 1 : 0.3,
                  fontFamily: "'Helvetica Neue', sans-serif",
                  backdropFilter: "blur(8px)",
                }}
              >
                {layer.label}
                <span
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    border: "1.5px solid",
                    borderColor: isActive ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    lineHeight: 1,
                    color: isActive ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.35)",
                    marginLeft: 10,
                    flexShrink: 0,
                  }}
                >
                  +
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: 3D stacked layers */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            perspective: 1000,
          }}
        >
          <div
            style={{
              position: "relative",
              width: 420,
              height: 320,
              transformStyle: "preserve-3d",
              transform: "rotateX(28deg) rotateZ(-20deg)",
            }}
          >
            {LAYERS.map((layer, i) => {
              const shown = i < visibleCount;
              const isActive = activeIndex === i;
              const stackOffset = i * 36;

              return (
                <div
                  key={layer.id}
                  onClick={() => shown && setActiveIndex(i)}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    height: 58,
                    bottom: stackOffset,
                    borderRadius: 18,
                    background: isActive
                      ? "linear-gradient(135deg, rgba(230,230,224,0.92) 0%, rgba(200,200,194,0.85) 100%)"
                      : layer.color,
                    boxShadow: isActive
                      ? "0 12px 40px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(0,0,0,0.08)"
                      : "0 4px 20px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.45)",
                    border: `1px solid ${layer.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: shown ? "pointer" : "default",
                    backdropFilter: "blur(6px)",
                    // Scroll-driven entry: drop in from above
                    transition: shown
                      ? "all 0.5s cubic-bezier(0.34,1.26,0.64,1)"
                      : "none",
                    transform: shown
                      ? isActive
                        ? "translateY(-10px) translateZ(0)"
                        : "translateY(0) translateZ(0)"
                      : "translateY(-60px) translateZ(0)",
                    opacity: shown ? 1 : 0,
                  }}
                >
                  {/* Embossed grid texture on active layer */}
                  {isActive && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: 18,
                        backgroundImage:
                          "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.18) 0%, transparent 70%)",
                        pointerEvents: "none",
                      }}
                    />
                  )}
                  <span
                    style={{
                      fontSize: 11.5,
                      fontWeight: 500,
                      color: isActive ? "rgba(40,40,36,0.75)" : "rgba(255,255,255,0.7)",
                      letterSpacing: "0.02em",
                      fontFamily: "'Helvetica Neue', sans-serif",
                      textShadow: isActive ? "none" : "0 1px 2px rgba(0,0,0,0.15)",
                      userSelect: "none",
                    }}
                  >
                    {layer.label}
                  </span>
                </div>
              );
            })}

            {/* "aOS" text on top when all layers shown */}
            {visibleCount === LAYERS.length && (
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: LAYERS.length * 36 + 10,
                  textAlign: "center",
                  animation: "fadeUp 0.4s ease",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    fontSize: 32,
                    fontWeight: 400,
                    color: "rgba(80,80,76,0.5)",
                    fontFamily: "'Georgia', serif",
                    letterSpacing: "-0.04em",
                  }}
                >
                  aOS™
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Scroll progress dots */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 6,
          }}
        >
          {LAYERS.map((_, i) => (
            <div
              key={i}
              style={{
                width: i < visibleCount ? 20 : 6,
                height: 6,
                borderRadius: 3,
                background:
                  i === activeIndex
                    ? "rgba(40,40,36,0.7)"
                    : i < visibleCount
                    ? "rgba(40,40,36,0.25)"
                    : "rgba(40,40,36,0.1)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}