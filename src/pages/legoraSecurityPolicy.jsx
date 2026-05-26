import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SECTIONS = [
  {
    num: "1",
    title: "Introduction",
    content: `Legora is committed to maintaining the highest standards of security to protect our customers' data and ensure the integrity, confidentiality, and availability of our Services. This Security Policy describes the technical and organizational measures Legora implements to safeguard the information processed through our platform.\n\nThis policy applies to all Legora systems, infrastructure, personnel, and third-party service providers involved in the delivery of our Services.`,
  },
  {
    num: "2",
    title: "Information Security Governance",
    content: `Legora maintains a comprehensive information security program that is aligned with industry-recognized frameworks and standards, including ISO/IEC 27001 and SOC 2.\n\nOur security program is overseen by dedicated security leadership and reviewed regularly to ensure it remains effective and up to date with evolving threats and regulatory requirements.\n\nAll Legora employees are required to complete security awareness training upon onboarding and on an ongoing basis. Personnel with access to sensitive systems undergo additional role-specific security training.`,
  },
  {
    num: "3",
    title: "Data Security",
    subsections: [
      {
        num: "3.1",
        title: "Encryption",
        content: `All data transmitted between users and Legora's Services is encrypted in transit using TLS 1.2 or higher. Data stored within Legora's systems is encrypted at rest using AES-256 encryption.\n\nEncryption keys are managed through dedicated key management services and are rotated on a regular schedule. Access to encryption keys is strictly controlled and audited.`,
      },
      {
        num: "3.2",
        title: "Data Isolation",
        content: `Legora implements strict logical separation between customer data. Each customer's data is isolated to prevent unauthorized access or cross-contamination between tenants.\n\nOur infrastructure is designed so that no customer can access another customer's data, and all data access is governed by role-based access controls.`,
      },
      {
        num: "3.3",
        title: "Data Residency",
        content: `Legora processes and stores customer data within the European Union (EU) and European Economic Area (EEA) by default. Any transfer of data outside the EU/EEA is conducted in accordance with applicable data protection laws and our Privacy Policy.\n\nCustomers with specific data residency requirements should contact Legora to discuss available options.`,
      },
    ],
  },
  {
    num: "4",
    title: "Access Controls",
    subsections: [
      {
        num: "4.1",
        title: "Authentication",
        content: `Access to Legora's Services requires authentication through secure credentials. Legora supports multi-factor authentication (MFA) and strongly recommends its use for all accounts.\n\nPasswords are stored using industry-standard hashing algorithms. Legora enforces password complexity requirements and account lockout policies to prevent brute-force attacks.`,
      },
      {
        num: "4.2",
        title: "Role-Based Access Control",
        content: `Access to systems and data within Legora is governed by the principle of least privilege. Employees are granted access only to the systems and data necessary to perform their job functions.\n\nAccess rights are reviewed regularly and revoked promptly upon change of role or termination of employment. All privileged access is logged and monitored.`,
      },
      {
        num: "4.3",
        title: "Third-Party Access",
        content: `Third-party service providers who require access to Legora systems or customer data are subject to thorough security assessments prior to engagement. All third parties must agree to Legora's security requirements and data processing terms.\n\nThird-party access is limited to what is strictly necessary and is monitored and audited on an ongoing basis.`,
      },
    ],
  },
  {
    num: "5",
    title: "Infrastructure Security",
    subsections: [
      {
        num: "5.1",
        title: "Cloud Infrastructure",
        content: `Legora's Services are hosted on leading cloud infrastructure providers that hold certifications including ISO 27001, SOC 2 Type II, and CSA STAR. Our cloud environments are configured in accordance with security best practices and provider-recommended hardening guidelines.\n\nLegora uses infrastructure-as-code practices to ensure consistent, auditable, and reproducible deployments.`,
      },
      {
        num: "5.2",
        title: "Network Security",
        content: `Legora employs multiple layers of network security controls, including firewalls, intrusion detection and prevention systems, and Web Application Firewalls (WAF).\n\nNetwork traffic is continuously monitored for anomalies and potential threats. All internal services are isolated within private network segments and are not directly accessible from the public internet.`,
      },
      {
        num: "5.3",
        title: "Vulnerability Management",
        content: `Legora conducts regular vulnerability assessments and penetration tests of its infrastructure and applications, performed by qualified internal teams and independent third-party security firms.\n\nIdentified vulnerabilities are triaged according to severity and remediated within defined timelines. Critical vulnerabilities are addressed on an expedited basis.`,
      },
    ],
  },
  {
    num: "6",
    title: "Application Security",
    content: `Security is integrated into Legora's software development lifecycle (SDLC). Our development practices include:\n\nCode reviews with security considerations are mandatory for all changes before deployment. Automated static analysis and dependency scanning tools are run as part of our continuous integration pipeline to identify potential security issues early.\n\nLegora's engineering teams receive secure coding training and follow established secure development guidelines. All third-party dependencies are monitored for known vulnerabilities and updated promptly when security patches are released.`,
    bullets: [
      { label: "Secure SDLC", text: "Security requirements are defined at the design stage and reviewed throughout development." },
      { label: "Code Review", text: "All code changes undergo peer review with security considerations before merging." },
      { label: "Automated Scanning", text: "Static analysis, dependency scanning, and secret detection tools run on every code commit." },
      { label: "Penetration Testing", text: "Regular third-party penetration tests are conducted against production and staging environments." },
      { label: "Bug Bounty", text: "Legora operates a responsible disclosure program to allow security researchers to report vulnerabilities." },
    ],
  },
  {
    num: "7",
    title: "Incident Response",
    content: `Legora maintains a documented incident response plan that defines procedures for detecting, containing, investigating, and recovering from security incidents.\n\nOur incident response team is available around the clock to respond to security events. In the event of a confirmed security incident affecting customer data, Legora will notify affected customers in accordance with applicable legal requirements and contractual obligations.\n\nAll security incidents are documented, investigated, and reviewed to identify root causes and implement preventive measures. Legora conducts regular incident response drills to ensure readiness.`,
  },
  {
    num: "8",
    title: "Business Continuity and Disaster Recovery",
    content: `Legora maintains business continuity and disaster recovery plans to ensure the availability and resilience of its Services. Our infrastructure is designed with redundancy across multiple availability zones to minimize the risk of service disruption.\n\nRegular backups of customer data are performed and stored securely. Backup integrity is verified through regular restoration tests. Recovery time objectives (RTO) and recovery point objectives (RPO) are defined and tested periodically.\n\nLegora's uptime and incident history are published on our status page, providing customers with real-time visibility into the availability of our Services.`,
  },
  {
    num: "9",
    title: "Physical Security",
    content: `Legora's Services are hosted in data centers operated by leading cloud infrastructure providers. These facilities implement stringent physical security controls including:\n\nAccess to data center facilities is restricted to authorized personnel only and is enforced through multi-factor physical authentication mechanisms. All physical access is logged and monitored by security personnel and CCTV systems operating around the clock.\n\nData center providers hold certifications including ISO 27001, SOC 2, and relevant local regulatory approvals, demonstrating their commitment to physical and environmental security.`,
    bullets: [
      { label: "Perimeter security", text: "Fencing, security guards, and surveillance systems protect facility perimeters." },
      { label: "Access control", text: "Biometric and badge-based access controls restrict entry to authorized personnel." },
      { label: "Environmental controls", text: "Temperature, humidity, and power systems are continuously monitored and controlled." },
      { label: "Redundant power", text: "Uninterruptible power supplies and backup generators ensure continuous operation." },
    ],
  },
  {
    num: "10",
    title: "Compliance and Certifications",
    content: `Legora is committed to meeting applicable legal, regulatory, and contractual security requirements. Our security program is aligned with internationally recognized standards and frameworks.\n\nLegora undergoes regular independent audits to verify the effectiveness of our security controls. Audit reports and certifications are available to customers under non-disclosure agreement upon request.`,
    boldList: [
      { term: "GDPR", text: "Legora processes personal data in accordance with the General Data Protection Regulation and implements appropriate technical and organizational measures to ensure compliance." },
      { term: "ISO/IEC 27001", text: "Legora's information security management system is aligned with the ISO/IEC 27001 standard for information security management." },
      { term: "SOC 2 Type II", text: "Legora undergoes annual SOC 2 Type II audits covering the security, availability, and confidentiality trust service criteria." },
      { term: "NIS2 Directive", text: "Legora monitors and prepares for compliance with the EU Network and Information Security Directive (NIS2) as applicable to our Services." },
    ],
  },
  {
    num: "11",
    title: "Responsible Disclosure",
    content: `Legora values the security research community and encourages responsible disclosure of potential vulnerabilities in our Services. If you believe you have discovered a security vulnerability, please report it to us at security@legora.com.\n\nWe ask that you:\n\n(a) Provide us with reasonable time to investigate and remediate the issue before any public disclosure;\n\n(b) Avoid accessing, modifying, or deleting customer data;\n\n(c) Refrain from performing actions that could negatively impact Legora or its customers.\n\nLegora will acknowledge receipt of your report promptly and keep you informed of our progress. We will not pursue legal action against researchers who act in good faith in accordance with this policy.`,
  },
  {
    num: "12",
    title: "Contact Us",
    content: `If you have any questions about this Security Policy or wish to report a security concern, please contact our security team at security@legora.com.`,
    contactBlock: true,
    contactEmail: "security@legora.com",
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
          display: "flex", alignItems: "center",
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

          {sec.bullets && (
            <ul style={{ paddingLeft: "20px", margin: "0 0 16px 0" }}>
              {sec.bullets.map((b, bi) => (
                <li key={bi} style={{ color: "#444", fontSize: "15px", lineHeight: "1.75", marginBottom: "8px" }}>
                  <em style={{ fontStyle: "italic", color: "#111" }}>{b.label}</em>{": "}{b.text}
                </li>
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
            </div>
          ))}

          {sec.contactBlock && (
            <div style={{ marginTop: "8px" }}>
              <p style={{ fontWeight: 600, color: "#111", fontSize: "15px", margin: "0 0 6px 0" }}>Security Contact:</p>
              <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.75", margin: 0 }}>
                Legora AB, 559338-6872<br />
                Box 7242<br />
                103 89 Stockholm<br />
                Sweden<br />
                <a href={`mailto:${sec.contactEmail}`} style={{ color: "#111", fontWeight: 500 }}>{sec.contactEmail}</a>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function LegoraSecurityPolicy() {
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
            Security Policy
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
        <main style={{ maxWidth: "780px", marginLeft: "auto", paddingTop: "56px", paddingBottom: "80px" }}>
          <p style={{ fontSize: "13px", color: "#999", margin: "0 0 28px 0" }}>Last updated February 28, 2025</p>

          <p style={{ fontSize: "15px", color: "#444", lineHeight: "1.75", margin: "0 0 14px 0" }}>
            At <strong style={{ color: "#111" }}>Legora</strong>, security is not an afterthought — it is a core part of how we build and operate our Services. This Security Policy outlines the measures we take to protect your data and maintain the trust you place in us.
          </p>
          <p style={{ fontSize: "15px", color: "#444", lineHeight: "1.75", margin: "0 0 40px 0" }}>
            If you have any security concerns or wish to report a vulnerability, please{" "}
            <a href="mailto:security@legora.com" style={{ color: "#111", textDecoration: "underline" }}>contact our security team</a>.
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