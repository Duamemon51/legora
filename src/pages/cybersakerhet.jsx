import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LayersSection from "../components/LayersSection";
import DataIntegrationsSection from "../components/DataIntegrationsSection";
import "./Webbutveckling.css";

const PLAYBOOK_RULES = [
  { label: "Indemnification cap", num: "§ 1.1" },
  { label: "Limitation of liability", num: "§ 2.3" },
  { label: "Governing law", num: "§ 4.1" },
  { label: "Termination for convenience", num: "§ 5.2" },
  { label: "IP ownership", num: "§ 6.0" },
  { label: "Confidentiality obligations", num: "§ 7.4" },
];

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero__title">Cybersakerhet</h1>
      <div className="hero__cta-row">
        <p className="hero__subtitle">The agentic operating system for legal work</p>
        <a href="#" className="hero__demo-btn">
          Book a demo <span>→</span>
        </a>
      </div>
    </section>
  );
}
// ── Single System ─────────────────────────────────────────────────────────────
function SingleSystem() {
  return (
    <section className="single-system">
      <div className="single-system__inner">
        <h2 className="single-system__title">A single connected system</h2>
        <p className="single-system__body">
          The Legora aOS facilitates the flow of information, communication, and
          execution of legal work, helping lawyers deliver higher quality work at
          unprecedented speed and scale.
        </p>
      </div>
    </section>
  );
}

// ── Security ──────────────────────────────────────────────────────────────────
function SecuritySection() {
  return (
    <section className="split-section">
      <div className="split-section__media">
        <img src="/image.png" alt="" />
      </div>
      <div className="split-section__content">
        <h4 className="split-section__title">
          Enterprise-GradeSecurity &amp; Governance
        </h4>
        <p className="split-section__lead">
          The foundation that makes the aOS enterprise-ready.
        </p>
        <p className="split-section__body">
          Ethical walls and cross-matter isolation prevent client information from
          bleeding across matters, users, or time. Full audit trails give complete
          visibility into every tool call, file access, and agent action.
        </p>
        <a href="#" className="split-section__link">↳ Security</a>
      </div>
    </section>
  );
}

// ── Products ──────────────────────────────────────────────────────────────────
function ProductsSection() {
  return (
    <section className="split-section">
      <div className="split-section__content split-section__content--products">
        <h4 className="split-section__title">
          Products &amp;Interfaces
        </h4>
        <p className="split-section__lead">Where lawyers, agents, and clients work.</p>
        <p className="split-section__body">
          These are the surfaces where legal work happens. Where lawyers, agents
          and clients draft, review, research, and collaborate — and deliver work
          to their clients. Every product is purpose-built to handle complex legal
          workflows end-to-end.
        </p>
        <a href="#" className="split-section__link">↳ Products</a>
      </div>
      <div className="split-section__media">
        <img src="/image2.png" alt="" />
      </div>
    </section>
  );
}

// ── Legal Capabilities ────────────────────────────────────────────────────────
function LegalCapabilities() {
  return (
    <section className="split-section">
      <div className="split-section__media">
        <img src="/image3.png" alt="" />
      </div>
      <div className="split-section__content">
        <h4 className="split-section__title">
          Legal-specificAgent Capabilities
        </h4>
        <p className="split-section__lead">
          The skills that make the agent a legal expert.
        </p>
        <p className="split-section__body">
          Jurisdiction-aware legal research grounded in real sources.
          Best-in-class structured citations. Purpose-built document
          understanding. Tabular review at scale. Firm-wide search across DMS
          and knowledge bases.
        </p>
        <a href="#" className="split-section__link">↳ Capabilities</a>
      </div>
    </section>
  );
}

// ── Context & Knowledge ───────────────────────────────────────────────────────
function ContextSection() {
  return (
    <section className="split-section">
      <div className="split-section__content">
        <h4 className="split-section__title">
          Context &amp;Knowledge
        </h4>
        <p className="split-section__lead">Context that compounds in value.</p>
        <p className="split-section__body">
          Firm playbooks, precedent libraries, clause banks, negotiated
          positions, and full matter history are all layered into every agent
          action. The aOS picks up where the last round left off, compounding
          institutional knowledge into every piece of work the agent produces.
        </p>
        <a href="#" className="split-section__link">↳ Context</a>
      </div>
      <div className="split-section__media">
        <img src="/image4.png" alt="" />
      </div>
    </section>
  );
}

// ── Data & Integration ────────────────────────────────────────────────────────
function DataIntegration() {
  return (
    <section className="split-section">
      <div className="split-section__media">
        <video
          src="https://framerusercontent.com/assets/NUbkkYj3RYnU7RflKmxLKh6qZ0Y.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="split-section__content">
        <h4 className="split-section__title">
          Data &amp;Integration
        </h4>
        <p className="split-section__lead">
          Connected to every system that matters.
        </p>
        <p className="split-section__body">
          Seamless integration with your existing DMS, practice management, and
          billing systems. Real-time data flows ensure the agent always works
          with the most current information across your entire firm.
        </p>
        <a href="#" className="split-section__link">↳ Integrations</a>
      </div>
    </section>
  );
}

// ── Agentic Harness ───────────────────────────────────────────────────────────
function AgenticHarness() {
  return (
    <section className="split-section">
      <div className="split-section__content">
        <h4 className="split-section__title">
          Agentic Harness
        </h4>
        <p className="split-section__lead">
          The engine behind every agent action.
        </p>
        <p className="split-section__body">
          A robust orchestration layer that coordinates multi-step legal
          workflows with precision. Every agent action is tracked, auditable,
          and reversible — giving firms full control over how autonomous work
          gets done.
        </p>
        <a href="#" className="split-section__link">↳ Agentic Harness</a>
      </div>
      <div className="split-section__media">
        <img src="/image5.png" alt="" />
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Cybersakerhet() {
  return (
    <div className="cybersakerhet-wrapper">
      <Navbar />
      <Hero />
      <LayersSection />
      <SingleSystem />
      <SecuritySection />
      <ProductsSection />
      <LegalCapabilities />
      <ContextSection />
      <DataIntegration />
      <AgenticHarness />
      <Footer />
    </div>
  );
}