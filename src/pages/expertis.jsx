import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        padding: "18px 0",
        cursor: "pointer",
      }}
      onClick={() => setOpen(!open)}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 13.5, color: "#fff", fontWeight: 400, letterSpacing: "-0.01em" }}>{question}</span>
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, lineHeight: 1 }}>{open ? "−" : "+"}</span>
      </div>
      {open && (
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: "12px 0 0", maxWidth: 560 }}>
          {answer}
        </p>
      )}
    </div>
  );
}

export default function Expertis() {
  return (
    <>
      <Navbar />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500&display=swap');`}</style>

    

      {/* Hero dark section - Your data is in safe hands */}
      <section
        style={{
          background: "#111",
          display: "flex",
          minHeight: "70vh",
          overflow: "hidden",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div style={{ flex: "0 0 42%", padding: "64px 56px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 24px" }}>
              SECURITY — Always on. Always secure.
            </p>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(32px, 3.5vw, 52px)", fontWeight: 400, color: "#fff", letterSpacing: "-0.03em", margin: "0 0 40px", lineHeight: 1.1 }}>
              Your data is<br />in safe hands.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: "0 0 20px", maxWidth: 280 }}>
              From encryption to access management, Legora enforces rigorous standards to ensure your data stays secure, private, and compliant.
            </p>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12.5, fontWeight: 500, color: "#fff", textDecoration: "none", padding: "8px 16px", borderRadius: 20, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}>
              {"Go to trust center \u2192"}
            </a>
          </div>
        </div>
        <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80"
            alt="Security"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)" }} />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", display: "flex", gap: 12, alignItems: "center" }}>
            {["shield", "star", "lock"].map((icon, i) => (
              <div key={i} style={{ width: i === 1 ? 52 : 40, height: i === 1 ? 52 : 40, borderRadius: 12, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: i === 1 ? 22 : 16, color: "#fff" }}>{i === 0 ? "🛡" : i === 1 ? "✦" : "🔒"}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certified & Compliant */}
      <section style={{ background: "#111", padding: "80px 48px", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center", margin: "0 0 20px" }}>CERTIFIED & COMPLIANT</p>
          <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 400, color: "#fff", letterSpacing: "-0.03em", textAlign: "center", margin: "0 0 48px", lineHeight: 1.4, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
            Legora is committed to maintaining compliance with the most rigorous international safety and security standards.
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, overflow: "hidden" }}>
            {[
              { title: "ISO 42001", desc: "ISO 42001 certified, our AI governance framework gives customers confidence in how we build and use AI." },
              { title: "ISO 27001", desc: "Legora is fully certified with ISO 27001, the internationally recognised standard for information security management." },
              { title: "SOC2 Type 3", desc: "We meet SOC 2 requirements to ensure secure and compliant management of data across all our systems." },
              { title: "GDPR", desc: "With our technical team based in Sweden, we operate under GDPR — the world's strictest standard for data privacy." },
            ].map((cert, i) => (
              <div key={i} style={{ background: "#1a1a1a", padding: "28px 24px 24px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 180 }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 10 }}>{cert.title}</div>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.65, margin: 0 }}>{cert.desc}</p>
                </div>
                <div style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 20 }}>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted data storage & Legal-grade security */}
      <section style={{ background: "#111", padding: "0 48px 80px", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 64 }}>
          {[
            {
              heading: "Trusted data storage",
              items: [
                { title: "Tiered Storage", desc: "Legora offers flexible storage options designed to match different data sensitivity levels and requirements." },
                { title: "EU-based and US-based support", desc: "Legora has both EU-based and US-based technical work forces, meaning we ensure a higher level of processing for local clients." },
                { title: "No foundation model training", desc: "Your confidence in data security is our utmost priority. Legora will never use your data to fine-tune any AI models." },
              ],
            },
            {
              heading: "Legal-grade security",
              items: [
                { title: "Zero trust design principles", desc: "We follow Zero Trust architecture, ensuring no user or system is inherently trusted — access is always verified, limited, and logged." },
                { title: "Your approval required", desc: "Access to customer data is strictly controlled and only granted to engineers with written customer approval for support-related issues." },
                { title: "Regular security audits", desc: "Legora continuously conducts penetration tests spanning the full platform scope and follows an 'assume breach' methodology to proactively identify and mitigate risks." },
                { title: "Trusted infrastructure", desc: "Legora's systems connect to best-in-class Swedish and European options — the same proven infrastructure that powers Google Drive, Box/Axios, and other large-scale applications." },
              ],
            },
          ].map((section, si) => (
            <div key={si} style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, marginBottom: 64 }}>
              <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(22px, 2vw, 30px)", fontWeight: 400, color: "#fff", letterSpacing: "-0.03em", margin: 0, lineHeight: 1.2 }}>
                {section.heading}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {section.items.map((item, ii) => (
                  <div key={ii}>
                    <div style={{ fontSize: 13.5, fontWeight: 500, color: "#fff", marginBottom: 6, letterSpacing: "-0.01em" }}>{item.title}</div>
                    <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full ownership section */}
      <section style={{ background: "#0d0d0d", padding: "80px 48px", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, marginBottom: 64 }}>
            <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(22px, 2vw, 30px)", fontWeight: 400, color: "#fff", letterSpacing: "-0.03em", margin: 0, lineHeight: 1.2 }}>
              Full ownership and flexibility
            </h3>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, margin: 0 }}>
              Legora supports all common Single-Sign-On protocols, meaning you are fully enabled over your end-users relation to Legora. We use enterprise security packages you can to maintain on premise data is stored, for how long it is stored, how the encryption keys are managed, and you have full visibility over how your data is managed in Legora and for partners.
            </p>
          </div>

          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 12px" }}>YOUR DATA, YOUR DECISIONS.</p>
            <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 400, color: "#fff", letterSpacing: "-0.03em", margin: 0, lineHeight: 1.4 }}>
              You maintain control over your data at <span style={{ color: "#e07830" }}>all</span> times.
            </h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, overflow: "hidden", marginBottom: 80 }}>
            {[
              { icon: "🕐", title: "Data retention", desc: "Set and manage data retention periods to align with your internal policies and regulatory requirements." },
              { icon: "⊞", title: "Data governance", desc: "Legora's Data Governance tools give you real-time insight into who's accessing your data and when." },
              { icon: "🔐", title: "Encryption management", desc: "Manage your own encryption keys with our BYOK option to keep sensitive data protected at all times." },
              { icon: "👤", title: "User authentication", desc: "SSO integration gives you complete control over user authentication and access management." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#161616", padding: "28px 20px 24px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 200 }}>
                <div style={{ fontSize: 24, marginBottom: 16, opacity: 0.5 }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: 12.5, fontWeight: 500, color: "#fff", marginBottom: 8 }}>{item.title}</div>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div style={{ display: "flex", gap: 48, alignItems: "center", marginBottom: 80 }}>
            <div style={{ flex: "0 0 220px", borderRadius: 8, overflow: "hidden", aspectRatio: "3/4" }}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                alt="Fredrik Stinandt"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div>
              <div style={{ fontSize: 24, color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>"</div>
              <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(18px, 2vw, 26px)", color: "#fff", fontWeight: 400, lineHeight: 1.5, letterSpacing: "-0.02em", margin: "0 0 20px" }}>
                Legora helps us strike a balance that allows us to delve into complex legal challenges with greater efficiency and precision.
              </p>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>Fredrik Stinandt</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>Managing Partner at Nyliga</div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 28, fontWeight: 400, color: "#fff", letterSpacing: "-0.03em", margin: "0 0 32px" }}>FAQ</h3>
            <div style={{ maxWidth: 640 }}>
              {[
                { question: "How does Legora encrypt data?", answer: "At Legora, protecting your data is our top priority. All data is encrypted in transit using TLS 1.2 or higher, and at rest with AES-256 encryption. For customers who require additional control, we also offer the option to encrypt data with their own encryption keys. If this is of interest, please let us know." },
                { question: "How does Legora manage customer data?", answer: "Legora processes customer data strictly to provide and improve the service. We never use your data to train foundation models. Data is stored in secure, certified data centers with strict access controls." },
                { question: "How does Legora handle AI transparency and explainability?", answer: "Legora provides full audit trails of every agent action, tool call, and file access. You can see exactly what the AI did, when, and why — giving you complete transparency and control over AI-assisted workflows." },
                { question: "What happens to our data after we stop using Legora?", answer: "Upon termination of your agreement, Legora will delete all customer data within 30 days. We can provide a data export before deletion if requested. No data is retained for training or any other purpose after the contract ends." },
              ].map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}