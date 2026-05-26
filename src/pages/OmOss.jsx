import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function OmOss() {
  return (
    <>
      <Navbar />

    

      {/* About stats section */}
      <section style={{ background: "#ffffff", padding: "80px 48px 0", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ fontSize: 11, color: "#aaa", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", margin: "0 0 16px" }}>
            Om Oss / Shaping the future of legal work
          </p>
          <p style={{ fontSize: "clamp(20px, 2.8vw, 32px)", fontWeight: 400, color: "#111", letterSpacing: "-0.03em", lineHeight: 1.4, margin: "0 0 48px", fontFamily: "'DM Serif Display', Georgia, serif", maxWidth: 600 }}>
            Legora helps the world's best lawyers move faster, think sharper, and focus on what matters. By reducing friction and automating repetition, we free up time for the highest-impact legal work.
          </p>
        </div>
        <div style={{ maxWidth: 860, margin: "0 auto 64px" }}>
          <div style={{ borderRadius: 12, overflow: "hidden", width: "100%", aspectRatio: "16/9", background: "#1a1a18" }}>
            <img src="/team.jpg" alt="Team" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} onError={(e) => { e.currentTarget.style.display = "none"; }} />
          </div>
        </div>
        <div style={{ maxWidth: 860, margin: "0 auto 80px", display: "flex", justifyContent: "center", gap: 80, flexWrap: "wrap" }}>
          {[{ value: "400+", label: "coworkers" }, { value: "1000+", label: "customers" }, { value: "50+", label: "markets" }].map((stat) => (
            <div key={stat.value} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 400, color: "#111", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8 }}>{stat.value}</div>
              <div style={{ fontSize: 12, color: "#aaa", letterSpacing: "0.02em" }}>{stat.label}</div>
            </div>
          ))}
        </div>
        <div style={{ maxWidth: 860, margin: "0 auto", borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: 40, paddingBottom: 80, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          {[{ name: "Bessemer Venture Partners", style: { fontSize: 12, fontWeight: 600 } }, { name: "ICONIQ", style: { fontSize: 16, fontWeight: 600, letterSpacing: "0.04em" } }, { name: "G CAPITAL", style: { fontSize: 13, fontWeight: 600, letterSpacing: "0.06em" } }, { name: "Redpoint.", style: { fontSize: 14, fontWeight: 500 } }, { name: "BENCHMARK", style: { fontSize: 13, fontWeight: 700, letterSpacing: "0.08em" } }, { name: "Y Combinator", style: { fontSize: 13, fontWeight: 500 } }].map((inv) => (
            <div key={inv.name} style={{ color: "#555", fontFamily: "'DM Sans', sans-serif", ...inv.style }}>{inv.name}</div>
          ))}
        </div>
      </section>

      {/* Mission section */}
      <section style={{ background: "white", padding: "100px 48px", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <p style={{ fontSize: 13.5, color: "#555", lineHeight: 1.75, margin: "0 0 28px", letterSpacing: "-0.01em" }}>
              We are building Legora to unlock unparalleled collaboration between lawyers and clients, enabling them to review, draft, and deliver projects, together. It's a product for boundless collaboration between lawyer ingenuity and machine intelligence.
            </p>
            <p style={{ fontSize: 13.5, color: "#555", lineHeight: 1.75, margin: 0, letterSpacing: "-0.01em" }}>
              Legora's mission is to empower exceptional lawyers. We make this a reality through building the world's first truly collaborative AI for lawyers.
            </p>
          </div>
          <div style={{ borderRadius: 10, overflow: "hidden", aspectRatio: "3/4" }}>
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
              alt="Building"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* The Legora Way section */}
      <section style={{ background: "white", padding: "0 48px 100px", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 400, color: "#111", letterSpacing: "-0.03em", margin: "0 0 40px", lineHeight: 1.2 }}>
              The Legora way
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {[
              {
                tag: "SHARED EFFORTS",
                sub: "Better, together.",
                body: "We believe the best ideas come from collective thinking. At Legora, collaboration isn't a process, it's our foundation. We build, test, and learn together, sharing ownership of both challenges and outcomes.",
              },
              {
                tag: "PROBLEM SOLVING",
                sub: "Curiosity and clarity.",
                body: "We approach every problem with curiosity and rigour. Whether it's a complex legal challenge or a small product detail, we look for smarter, simpler ways forward.",
              },
              {
                tag: "MUTUAL GROWTH",
                sub: "Shared success.",
                body: "We grow by helping each other grow. Every success is shared, and every lesson builds towards something greater. Our progress as a team reflects the trust and support we invest in one another.",
              },
            ].map((item) => (
              <div key={item.tag}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 10, fontWeight: 600, color: "#aaa", letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.tag}</span>
                  <span style={{ fontSize: 12, color: "#aaa" }}>{item.sub}</span>
                </div>
                <p style={{ fontSize: 13.5, color: "#555", lineHeight: 1.75, margin: 0, letterSpacing: "-0.01em" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team photo below */}
        <div style={{ maxWidth: 860, margin: "64px auto 0" }}>
          <div style={{ borderRadius: 10, overflow: "hidden", aspectRatio: "16/7" }}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
              alt="Team collaboration"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section style={{ background: "#e07830", padding: "80px 48px", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", alignItems: "center", gap: 64 }}>
          <div style={{ flex: "0 0 260px", borderRadius: 8, overflow: "hidden", aspectRatio: "3/4" }}>
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
              alt="Jeannette zu Fürstenberg"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 28, color: "rgba(255,255,255,0.6)", marginBottom: 16, lineHeight: 1 }}>"</div>
            <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(18px, 2.2vw, 26px)", color: "#fff", fontWeight: 400, lineHeight: 1.5, letterSpacing: "-0.02em", margin: "0 0 28px" }}>
              Legora is driving AI transformations in a highly specialized industry. With an outstanding product, rapid adoption by top-tier firms, and a founder who combines rare product instinct with exceptional execution, as we see it, Legora is redefining how legal work gets done.
            </p>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>Jeannette zu Fürstenberg</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>Managing Director and Head of Europe at General Catalyst</div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}