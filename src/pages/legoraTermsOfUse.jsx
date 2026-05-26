import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SECTIONS = [
  {
    num: "1",
    title: "Acceptance of Terms",
    content: `By accessing or using Legora's website, platform, and services ("Services"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, you may not access or use the Services.\n\nThese Terms apply to all users of the Services, including users who are also contributors of content, information, and other materials or services on the Services.`,
  },
  {
    num: "2",
    title: "Eligibility and Account Registration",
    content: `The Services are intended for use by companies and/or other legal entities for professional use. By using the Services, you represent and warrant that you have the authority to bind the entity on whose behalf you are using the Services.\n\nTo access certain features of the Services, you must register for an account. When you register, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.\n\nYou must notify Legora immediately of any unauthorized use of your account or any other breach of security. Legora will not be liable for any loss or damage arising from your failure to comply with this section.`,
  },
  {
    num: "3",
    title: "Use of Services",
    subsections: [
      {
        num: "3.1",
        title: "Permitted Use",
        content: `Subject to these Terms, Legora grants you a limited, non-exclusive, non-transferable, and revocable license to access and use the Services for your internal business purposes.\n\nYou may use the Services only in accordance with these Terms and all applicable laws and regulations.`,
      },
      {
        num: "3.2",
        title: "Prohibited Use",
        content: `You agree not to engage in any of the following activities:`,
        bullets: [
          { label: "Unauthorized access", text: "Attempting to gain unauthorized access to any portion of the Services or any other systems or networks connected to the Services." },
          { label: "Harmful content", text: "Uploading, posting, or transmitting any content that is unlawful, harmful, threatening, abusive, defamatory, or otherwise objectionable." },
          { label: "Reverse engineering", text: "Reverse engineering, decompiling, disassembling, or otherwise attempting to derive the source code of the Services." },
          { label: "Automated access", text: "Using any automated means, including robots, crawlers, or scrapers, to access or collect data from the Services without Legora's prior written consent." },
          { label: "Interference", text: "Interfering with or disrupting the integrity or performance of the Services or the data contained therein." },
        ],
      },
    ],
  },
  {
    num: "4",
    title: "Intellectual Property",
    content: `The Services and their entire contents, features, and functionality — including but not limited to all information, software, text, displays, images, video, and audio — are owned by Legora, its licensors, or other providers of such material and are protected by applicable intellectual property laws.\n\nThese Terms do not grant you any right, title, or interest in the Services, others' content in the Services, Legora's trademarks, logos or other brand features. Any feedback, comments, or suggestions you may provide regarding Legora or the Services is entirely voluntary and Legora will be free to use such feedback, comments, or suggestions without any obligation to you.`,
  },
  {
    num: "5",
    title: "Content and Data",
    subsections: [
      {
        num: "5.1",
        title: "Your Content",
        content: `You retain ownership of any content, data, or materials you submit, upload, or transmit through the Services ("Your Content"). By submitting Your Content, you grant Legora a worldwide, non-exclusive, royalty-free license to use, process, and store Your Content solely to the extent necessary to provide the Services to you.\n\nYou represent and warrant that you have all rights necessary to grant the above license and that Your Content does not violate any applicable laws or third-party rights.`,
      },
      {
        num: "5.2",
        title: "AI-Generated Output",
        content: `The Services may use artificial intelligence and machine learning technologies to generate responses, analysis, or other output ("Output"). You acknowledge that Output is generated automatically and may not always be accurate, complete, or suitable for your specific needs.\n\nYou are solely responsible for reviewing, verifying, and determining the suitability of any Output before relying on it for any purpose. Legora does not warrant that any Output constitutes legal advice or is free from errors.`,
      },
    ],
  },
  {
    num: "6",
    title: "Payment and Subscription",
    content: `Access to certain features of the Services requires a paid subscription. By subscribing, you agree to pay the applicable fees as described in your Subscriber Agreement.\n\nAll fees are exclusive of applicable taxes unless stated otherwise. Legora reserves the right to change its pricing at any time upon reasonable notice. Continued use of the Services after a price change constitutes your acceptance of the new pricing.\n\nSubscriptions automatically renew unless cancelled prior to the renewal date in accordance with your Subscriber Agreement. Refunds are issued only as required by applicable law or as expressly stated in your Subscriber Agreement.`,
  },
  {
    num: "7",
    title: "Confidentiality",
    content: `Each party agrees to keep confidential all non-public information disclosed by the other party in connection with the Services that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and circumstances of disclosure ("Confidential Information").\n\nEach party agrees to use the other party's Confidential Information only for the purposes of these Terms and to protect it with the same degree of care used to protect its own confidential information, but in no event less than reasonable care.\n\nThe obligations of confidentiality do not apply to information that: (a) is or becomes publicly known through no breach of these Terms; (b) was rightfully known before disclosure; (c) is independently developed without use of the Confidential Information; or (d) must be disclosed by law or court order.`,
  },
  {
    num: "8",
    title: "Disclaimers and Limitation of Liability",
    subsections: [
      {
        num: "8.1",
        title: "Disclaimer of Warranties",
        content: `THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.\n\nLegora does not warrant that the Services will be uninterrupted, error-free, or completely secure. You acknowledge that there are risks inherent in internet connectivity that could result in the loss of your privacy, confidential information, and property.`,
      },
      {
        num: "8.2",
        title: "Limitation of Liability",
        content: `TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, LEGORA SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR YOUR USE OF THE SERVICES.\n\nLEGORA'S TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE FEES PAID BY YOU TO LEGORA IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.`,
      },
    ],
  },
  {
    num: "9",
    title: "Indemnification",
    content: `You agree to indemnify, defend, and hold harmless Legora and its officers, directors, employees, agents, and successors from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with:\n\n(a) your access to or use of the Services;\n\n(b) your violation of these Terms;\n\n(c) your violation of any third-party rights, including intellectual property rights or privacy rights; or\n\n(d) any claim that Your Content caused damage to a third party.`,
  },
  {
    num: "10",
    title: "Termination",
    content: `Legora may suspend or terminate your access to the Services at any time, with or without cause or notice, including if Legora reasonably believes that you have violated these Terms.\n\nUpon termination, your right to use the Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.\n\nYou may terminate your account at any time by following the account cancellation procedures set forth in your Subscriber Agreement or by contacting Legora support.`,
  },
  {
    num: "11",
    title: "Governing Law and Dispute Resolution",
    content: `These Terms shall be governed by and construed in accordance with the laws of Sweden, without regard to its conflict of law provisions.\n\nAny dispute arising out of or in connection with these Terms, including any question regarding their existence, validity, or termination, shall be referred to and finally resolved by arbitration in Stockholm, Sweden, in accordance with the Arbitration Rules of the Arbitration Institute of the Stockholm Chamber of Commerce.\n\nNotwithstanding the foregoing, either party may seek injunctive or other equitable relief in any court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation, or violation of that party's intellectual property rights.`,
  },
  {
    num: "12",
    title: "Changes to Terms",
    content: `Legora reserves the right to modify these Terms at any time. When we make changes, we will update the "Last updated" date at the top of this page and, where appropriate, notify you by email or through the Services.\n\nYour continued use of the Services after any changes to these Terms constitutes your acceptance of the revised Terms. If you do not agree to the revised Terms, you must stop using the Services.`,
  },
  {
    num: "13",
    title: "Contact Us",
    content: `If you have any questions about these Terms of Use, please contact us at legal@legora.com or via mail.`,
    contactBlock: true,
  },
];

function renderBold(text) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((p, i) =>
    i % 2 === 1 ? <strong key={i} style={{ fontWeight: 600, color: "#111" }}>{p}</strong> : p
  );
}

function renderContent(text) {
  return text.split("\n\n").map((para, i) => (
    <p key={i} style={{ margin: "0 0 16px 0", color: "#444", fontSize: "15px", lineHeight: "1.75" }}>
      {renderBold(para)}
    </p>
  ));
}

function SectionBlock({ sec, active, onToggle }) {
  return (
    <div style={{ borderBottom: "1px solid #e8e8e8" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%", background: "none", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", gap: "0",
          padding: "0", textAlign: "left",
        }}
      >
        <div style={{
          width: "56px", minWidth: "56px",
          padding: "22px 0",
          display: "flex", alignItems: "center", justifyContent: "center",
          borderRight: "1px solid #e8e8e8",
        }}>
          <span style={{ fontSize: "13px", color: "#999", fontFamily: "inherit" }}>{sec.num}</span>
        </div>
        <div style={{
          flex: 1, padding: "22px 24px", display: "flex", alignItems: "center",
          justifyContent: "space-between",
        }}>
          <span style={{ fontSize: "15px", fontWeight: 500, color: "#111", fontFamily: "inherit" }}>
            {sec.title}
          </span>
          <span style={{
            fontSize: "20px", color: "#999", lineHeight: 1,
            transform: active ? "rotate(45deg)" : "none",
            transition: "transform 0.2s",
            marginLeft: "16px",
          }}>+</span>
        </div>
      </button>

      {active && (
        <div style={{ padding: "0 24px 28px 80px" }}>
          {sec.content && renderContent(sec.content)}

          {sec.list && (
            <ul style={{ paddingLeft: "20px", margin: "0 0 16px 0" }}>
              {sec.list.map((item, i) => (
                <li key={i} style={{ color: "#444", fontSize: "15px", lineHeight: "1.75", marginBottom: "6px" }}>{item}</li>
              ))}
            </ul>
          )}

          {sec.boldList && (
            <div style={{ marginTop: "4px" }}>
              {sec.boldList.map((item, i) => (
                <p key={i} style={{ color: "#444", fontSize: "15px", lineHeight: "1.75", marginBottom: "12px" }}>
                  <strong style={{ fontWeight: 600, color: "#111" }}>{item.term}</strong>
                  {": "}{item.text}
                </p>
              ))}
            </div>
          )}

          {sec.subsections && sec.subsections.map((sub, si) => (
            <div key={si} style={{ marginBottom: "24px" }}>
              <h5 style={{ fontSize: "14px", fontWeight: 600, color: "#111", margin: "0 0 12px 0", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {sub.num} — {sub.title}
              </h5>
              {renderContent(sub.content)}
              {sub.bullets && (
                <ul style={{ paddingLeft: "20px", margin: "0 0 8px 0" }}>
                  {sub.bullets.map((b, bi) => (
                    <li key={bi} style={{ color: "#444", fontSize: "15px", lineHeight: "1.75", marginBottom: "8px" }}>
                      <em style={{ fontStyle: "italic", color: "#111" }}>{b.label}</em>{": "}{b.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {sec.afterContent && renderContent(sec.afterContent)}

          {sec.contactBlock && (
            <div style={{ marginTop: "8px" }}>
              <p style={{ fontWeight: 600, color: "#111", fontSize: "15px", margin: "0 0 6px 0" }}>Controller's Contact Information:</p>
              <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.75", margin: 0 }}>
                Legora AB, 559338-6872<br />
                Box 7242<br />
                103 89 Stockholm<br />
                Sweden<br />
                <a href="mailto:legal@legora.com" style={{ color: "#111", fontWeight: 500 }}>legal@legora.com</a>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function LegoraTermsOfUse() {
  const [activeSection, setActiveSection] = useState(null);
  const toggle = (num) => setActiveSection(a => a === num ? null : num);

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", background: "#fff", color: "#111", minHeight: "100vh" }}>
      <Navbar />

      <div style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ padding: "48px 0 40px" }} />
          <h1 style={{
            fontSize: "clamp(56px, 8vw, 96px)",
            fontWeight: 700,
            color: "#111",
            margin: "0 0 80px 0",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}>
            Terms of Use
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
        <main style={{ maxWidth: "780px", marginLeft: "auto", paddingTop: "56px", paddingBottom: "80px" }}>
          <p style={{ fontSize: "13px", color: "#999", margin: "0 0 28px 0" }}>Last updated February 28, 2025</p>

          <p style={{ fontSize: "15px", color: "#444", lineHeight: "1.75", margin: "0 0 14px 0" }}>
            These Terms of Use ("Terms") govern your access to and use of Legora's website, platform, plug-ins, and related services (collectively, the <strong style={{ color: "#111" }}>"Services"</strong>), operated by <strong style={{ color: "#111" }}>Legora AB</strong>. Please read these Terms carefully before using the Services.
          </p>
          <p style={{ fontSize: "15px", color: "#444", lineHeight: "1.75", margin: "0 0 40px 0" }}>
            If you have any questions about these Terms, please{" "}
            <a href="mailto:legal@legora.com" style={{ color: "#111", textDecoration: "underline" }}>contact us</a>.
          </p>

          <div style={{ border: "1px solid #e8e8e8", borderRadius: "12px", overflow: "hidden" }}>
            {SECTIONS.map((sec) => (
              <SectionBlock
                key={sec.num}
                sec={sec}
                active={activeSection === sec.num}
                onToggle={() => toggle(sec.num)}
              />
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}