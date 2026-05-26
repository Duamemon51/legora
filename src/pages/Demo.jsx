import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./demo.css";

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = () => {
    console.log("Book a demo:", form);
  };

  const labelClass = "form-label";
  const inputClass = "form-input";
  const selectClass = "form-select";

  const logos = [
    { name: "Linklaters",    weight: 500, font: "system-ui, sans-serif", opacity: 1 },
    { name: "Deloitte.",     weight: 700, font: "system-ui, sans-serif", opacity: 1 },
    { name: "MinterEllison.",weight: 500, font: "Georgia, serif",        opacity: 1 },
    { name: "DENTONS",       weight: 700, font: "system-ui, sans-serif", opacity: 1 },
    { name: "GOODWIN",       weight: 700, font: "system-ui, sans-serif", opacity: 1 },
    { name: "Bird & Bird",   weight: 500, font: "Georgia, serif",        opacity: 0.85 },
    { name: "CLEARY GOTTLIEB", weight: 500, font: "system-ui, sans-serif", opacity: 1 },
    { name: "WHITE & CASE",  weight: 500, font: "system-ui, sans-serif", opacity: 1 },
  ];

  // Duplicate for seamless infinite loop
  const track = [...logos, ...logos];

  return (
    <>
      <Navbar />

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

          {/* Marquee logo strip */}
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
                <label className={labelClass}>First Name<span className="req-star">*</span></label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Last Name<span className="req-star">*</span></label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className={inputClass}
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
              />
            </div>

            {/* Company Name */}
            <div className="mb-5">
              <label className={labelClass}>Company Name<span className="req-star">*</span></label>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Primary location */}
            <div className="mb-5">
              <label className={labelClass}>Primary location<span className="req-star">*</span></label>
              <div className="select-wrapper">
                <select
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  className={selectClass}
                >
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
              <label className={labelClass}>Organisation type<span className="req-star">*</span></label>
              <div className="select-wrapper">
                <select
                  name="orgType"
                  value={form.orgType}
                  onChange={handleChange}
                  className={selectClass}
                >
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
              <label className={labelClass}>Number of lawyers<span className="req-star">*</span></label>
              <input
                name="lawyers"
                value={form.lawyers}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* How did you hear about us */}
            <div className="mb-5">
              <label className={labelClass}>How did you hear about us?<span className="req-star">*</span></label>
              <div className="select-wrapper">
                <select
                  name="hearAbout"
                  value={form.hearAbout}
                  onChange={handleChange}
                  className={selectClass}
                >
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
              accordance with our <span className="privacy-link">Privacy Policy</span>
            </p>

            {/* Submit */}
            <div className="justify-end" style={{ display: "flex" }}>
              <button
                type="button"
                onClick={handleSubmit}
                className="btn-primary"
              >
                Book a demo
              </button>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}