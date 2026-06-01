import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./demo.css";

// ─── EmailJS Config ────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_ovlm06c";
const EMAILJS_TEMPLATE_ID = "template_nazbjtn";
const EMAILJS_PUBLIC_KEY  = "iI3txeP9WCIAbCxTG";
// ──────────────────────────────────────────────────────────────────

// ─── Toast Component ──────────────────────────────────────────────
function Toast({ type, visible, onClose }) {
  const isSuccess = type === "success";

  return (
    <div
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 9999,
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        background: isSuccess ? "#f0fdf4" : "#fef2f2",
        border: `1px solid ${isSuccess ? "#bbf7d0" : "#fecaca"}`,
        borderLeft: `4px solid ${isSuccess ? "#16a34a" : "#dc2626"}`,
        borderRadius: "12px",
        padding: "1rem 1.25rem",
        minWidth: "320px",
        maxWidth: "420px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
        transform: visible ? "translateY(0)" : "translateY(120%)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* Icon */}
      <div style={{
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        background: isSuccess ? "#16a34a" : "#dc2626",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        color: "#fff",
        fontSize: "16px",
        fontWeight: 700,
      }}>
        {isSuccess ? "✓" : "✕"}
      </div>

      {/* Text */}
      <div style={{ flex: 1 }}>
        <p style={{ margin: "0 0 3px", fontWeight: 600, fontSize: "15px", color: isSuccess ? "#14532d" : "#7f1d1d" }}>
          {isSuccess ? "Request received!" : "Something went wrong"}
        </p>
        <p style={{ margin: 0, fontSize: "13px", color: isSuccess ? "#166534" : "#991b1b", lineHeight: 1.5 }}>
          {isSuccess
            ? "Our team will get back to you within 1–2 business days."
            : "Please try again or email us directly."}
        </p>
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: isSuccess ? "#16a34a" : "#dc2626",
          fontSize: "18px",
          lineHeight: 1,
          padding: "2px 4px",
          flexShrink: 0,
        }}
      >
        ×
      </button>
    </div>
  );
}
// ──────────────────────────────────────────────────────────────────

export default function Demo() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    location: "",
    orgType: "",
    lawyers: "",
    hearAbout: "",
    agree: false,
  });

  const [status, setStatus] = useState("idle");
  const [toast, setToast] = useState({ type: null, visible: false });

  const showToast = (type) => {
    setToast({ type, visible: true });
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 4000);
    setTimeout(() => setToast({ type: null, visible: false }), 4500);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async () => {
    const required = ["firstName", "lastName", "email", "company", "location", "orgType", "lawyers", "hearAbout"];
    const empty = required.filter((k) => !form[k]);
    if (empty.length > 0) {
      alert("Please fill in all required fields.");
      return;
    }
    if (!form.agree) {
      alert("Please agree to receive marketing communications.");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          firstName: form.firstName,
          lastName:  form.lastName,
          email:     form.email,
          company:   form.company,
          location:  form.location,
          orgType:   form.orgType,
          lawyers:   form.lawyers,
          hearAbout: form.hearAbout,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("idle");
      setForm({
        firstName: "", lastName: "", email: "", company: "",
        location: "", orgType: "", lawyers: "", hearAbout: "", agree: false,
      });
      showToast("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("idle");
      showToast("error");
    }
  };

  const labelClass  = "form-label";
  const inputClass  = "form-input";
  const selectClass = "form-select";

  const logos = [
    { name: "Linklaters",      weight: 500, font: "system-ui, sans-serif", opacity: 1 },
    { name: "Deloitte.",       weight: 700, font: "system-ui, sans-serif", opacity: 1 },
    { name: "MinterEllison.",  weight: 500, font: "Georgia, serif",        opacity: 1 },
    { name: "DENTONS",         weight: 700, font: "system-ui, sans-serif", opacity: 1 },
    { name: "GOODWIN",         weight: 700, font: "system-ui, sans-serif", opacity: 1 },
    { name: "Bird & Bird",     weight: 500, font: "Georgia, serif",        opacity: 0.85 },
    { name: "CLEARY GOTTLIEB", weight: 500, font: "system-ui, sans-serif", opacity: 1 },
    { name: "WHITE & CASE",    weight: 500, font: "system-ui, sans-serif", opacity: 1 },
  ];

  const track = [...logos, ...logos];

  return (
    <>
      <Navbar />

      {/* ── Toast ── */}
      {toast.type && (
        <Toast
          type={toast.type}
          visible={toast.visible}
          onClose={() => setToast({ type: null, visible: false })}
        />
      )}

      <section className="demo-section">

        {/* ── Left side ── */}
        <div className="left-panel">
          <div className="copy">
            <h1 className="demo-title">Book a demo</h1>
            <p className="lead">
              Request a demo to see how Legora fits into your daily workflows. Fill out the
              form and our team will get back to you shortly.
            </p>
          </div>

          <div className="logo-strip">
            <div className="logo-track">
              {track.map((logo, i) => (
                <span
                  key={i}
                  className="logo"
                  style={{
                    fontWeight: logo.weight,
                    fontFamily: logo.font,
                    opacity: logo.opacity,
                  }}
                >
                  {logo.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right side (form panel) ── */}
        <div className="form-panel">
          <div className="form-wrapper">

            {/* First / Last name */}
            <div className="grid-two">
              <div>
                <label className={labelClass}>
                  First Name<span className="req-star">*</span>
                </label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className={inputClass}
                  autoComplete="given-name"
                />
              </div>
              <div>
                <label className={labelClass}>
                  Last Name<span className="req-star">*</span>
                </label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className={inputClass}
                  autoComplete="family-name"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className={labelClass}>Email<span className="req-star">*</span></label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
                autoComplete="email"
                inputMode="email"
              />
            </div>

            {/* Company Name */}
            <div className="mb-5">
              <label className={labelClass}>
                Company Name<span className="req-star">*</span>
              </label>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                className={inputClass}
                autoComplete="organization"
              />
            </div>

            {/* Primary location */}
            <div className="mb-5">
              <label className={labelClass}>
                Primary location<span className="req-star">*</span>
              </label>
              <div className="select-wrapper">
                <select name="location" value={form.location} onChange={handleChange} className={selectClass}>
                  <option value=""></option>
                  <option value="europe">Europe</option>
                  <option value="north_america">North America</option>
                  <option value="asia">Asia</option>
                  <option value="other">Other</option>
                </select>
                <span className="caret">▼</span>
              </div>
            </div>

            {/* Organisation type */}
            <div className="mb-5">
              <label className={labelClass}>
                Organisation type<span className="req-star">*</span>
              </label>
              <div className="select-wrapper">
                <select name="orgType" value={form.orgType} onChange={handleChange} className={selectClass}>
                  <option value=""></option>
                  <option value="law_firm">Law firm</option>
                  <option value="in_house">In-house legal</option>
                  <option value="other">Other</option>
                </select>
                <span className="caret">▼</span>
              </div>
            </div>

            {/* Number of lawyers */}
            <div className="mb-5">
              <label className={labelClass}>
                Number of lawyers<span className="req-star">*</span>
              </label>
              <input
                name="lawyers"
                value={form.lawyers}
                onChange={handleChange}
                className={inputClass}
                inputMode="numeric"
              />
            </div>

            {/* How did you hear about us */}
            <div className="mb-5">
              <label className={labelClass}>
                How did you hear about us?<span className="req-star">*</span>
              </label>
              <div className="select-wrapper">
                <select name="hearAbout" value={form.hearAbout} onChange={handleChange} className={selectClass}>
                  <option value=""></option>
                  <option value="search">Search engine</option>
                  <option value="social">Social media</option>
                  <option value="referral">Referral</option>
                  <option value="event">Event</option>
                  <option value="other">Other</option>
                </select>
                <span className="caret">▼</span>
              </div>
            </div>

            {/* Consent checkbox */}
            <div className="flex items-start gap-2-5 mb-4">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="form-checkbox"
              />
              <p className="consent-text">
                I agree to receive marketing communications about Legora's products, services,
                and events and understand that I can unsubscribe at any time.
              </p>
            </div>

            {/* Privacy text */}
            <p className="privacy-text">
              By submitting this form, you agree to the processing of your personal data in
              accordance with our{" "}
              <span className="privacy-link">Privacy Policy</span>
            </p>

            {/* Submit */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                type="button"
                onClick={handleSubmit}
                className="btn-primary"
                disabled={status === "sending"}
                style={{
                  opacity: status === "sending" ? 0.7 : 1,
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                }}
              >
                {status === "sending" ? "Sending…" : "Book a demo"}
              </button>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}