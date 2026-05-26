import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const stories = [
  {
    id: 1,
    name: "Mats Hellmark",
    title: "Partner at Vranken & Nordlax",
    quote: "I use Legora every day in a real variety of ways, and it's always aimed at how we can help the client.",
    size: "large",
    video: "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
    tags: ["M&A", "Due diligence", "Contract review"],
    story: `<p>When Mats Hellmark first heard about AI legal tools, he was skeptical — like many senior partners at established Nordic firms. But after integrating Legora into his daily workflow at Vranken & Nordlax, his perspective shifted entirely.</p><p>"The first time I ran a contract review with Legora, it flagged three clauses my team had missed after two full read-throughs," Mats recalls. "That was the moment I realized this wasn't a novelty — it was a genuine upgrade to how we practice law."</p><p>Today, Mats uses Legora across everything from M&A due diligence to client briefings, always with one goal in mind: delivering better, faster outcomes for the people who trust his firm with their most critical matters.</p><p>The productivity gains have been measurable. His team now handles 30% more matters per quarter without adding headcount, and client satisfaction scores have climbed steadily since adoption began.</p>`,
  },
  {
    id: 2,
    name: "Karin-Mia Berntsen",
    title: "Head of Legal Research at Evolog",
    quote: "Legora is my work companion. Every day I cannot see a situation where I work without Legora.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/6248461/6248461-uhd_2560_1440_25fps.mp4",
    tags: ["Legal research", "Adoption", "Productivity"],
    story: `<p>Legal research is painstaking work — hours spent sifting through precedents, statutes, and commentary that may or may not be relevant. For Karin-Mia Berntsen, Legora has fundamentally changed that equation.</p><p>"What used to take me a half-day now takes an hour," she says. "And the quality is better — Legora surfaces connections I might have missed entirely on my own."</p><p>At Evolog, she led the firm-wide adoption of Legora, training colleagues and building internal best-practice guides that have become the standard across the organization. Her work is now studied as a model for legal tech integration across Scandinavia.</p>`,
  },
  {
    id: 3,
    name: "Alexander Peep",
    title: "Managing Partner at Tschernert",
    quote: "The firms that shape what comes next will be the ones building alongside the people driving this transformation.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/5699516/5699516-uhd_2560_1440_25fps.mp4",
    tags: ["Strategy", "Innovation", "Leadership"],
    story: `<p>Alexander Peep sees the AI moment in law not as a disruption, but as a calling. "The firms that hang back waiting for certainty will find there is no ground left to stand on," he says plainly.</p><p>Under his leadership, Tschernert became an early adopter of Legora — piloting the platform across practice groups and feeding that feedback directly to the product team. That collaborative relationship has shaped several features now used by thousands of lawyers globally.</p><p>"We didn't just buy software. We joined a movement," Alexander says. "And the returns — in talent retention, client confidence, and raw output — have exceeded every projection."</p>`,
  },
  {
    id: 4,
    name: "Tommy Wachtels",
    title: "Corporate and M&A Partner, Berlin at Glenrose",
    quote: "With the help of AI, we can make the knowledge of more than 7,000 lawyers available at scale.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/7710586/7710586-uhd_2560_1440_25fps.mp4",
    tags: ["Corporate law", "Knowledge management", "Scale"],
    story: `<p>Glenrose operates across 40 jurisdictions. Coordinating institutional knowledge of that scale used to mean lengthy email chains, time zone delays, and expertise that often went untapped. Tommy Wachtels saw an opportunity.</p><p>"With Legora, I can query the collective experience of our entire firm in seconds," he explains. "A junior associate in Berlin now has access to insights that previously lived only in the heads of our most senior partners."</p><p>The results have been transformative for cross-border deals, where speed and accuracy are non-negotiable. Legora has become the connective tissue of how Glenrose delivers at scale.</p>`,
  },
  {
    id: 5,
    name: "Mabel Robertshaw",
    title: "Head of Group Commercial at Sorix Onera",
    quote: "Any technology introduced into the bank must meet uncompromising standards of security, accuracy, and intention.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/6248544/6248544-uhd_2560_1440_25fps.mp4",
    tags: ["Financial services", "Compliance", "Security"],
    story: `<p>In financial services, the bar for any new technology is extraordinarily high. Mabel Robertshaw spent six months evaluating Legora before recommending adoption — reviewing security architecture, audit trails, and accuracy benchmarks in exhaustive detail.</p><p>"We don't adopt tools because they're popular. We adopt them because they earn it," she says. "Legora earned it."</p><p>Since rolling out across Sorix Onera's legal and compliance functions, Mabel's team has reduced contract turnaround time by 40% while strengthening their audit documentation. The platform has since been approved for use across all group entities globally.</p>`,
  },
  {
    id: 6,
    name: "Thomas K. Berman",
    title: "Managing Partner at SOAN",
    quote: "Today as much as 60% of our people are active users, and as high as 30% use Legora more than ten times a day.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/5699527/5699527-uhd_2560_1440_25fps.mp4",
    tags: ["Firm-wide adoption", "Daily usage", "Culture change"],
    story: `<p>When SOAN first introduced Legora, Thomas K. Berman set a quiet internal target: 40% active adoption within a year. Within six months, they had blown past it.</p><p>"The adoption curve surprised even me," he admits. "Partners who I expected to resist were the fastest converts. Once they saw what it could do, it became indispensable."</p><p>The metrics tell the story: 60% active users firm-wide, with nearly a third using the platform more than ten times daily. For Thomas, those numbers represent something deeper than efficiency — they represent a cultural shift toward a more ambitious, AI-native way of practicing law.</p>`,
  },
  {
    id: 7,
    name: "Tommy Wachtels",
    title: "Founding Partner at Wachytelt & Partners",
    quote: "Artificial intelligence has already become as important to society as the internet.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/3195396/3195396-uhd_2560_1440_25fps.mp4",
    tags: ["Future of law", "AI strategy", "Vision"],
    story: `<p>Tommy Wachtels has built his career on reading the direction of change before others do. He made that call early on AI, and he's been proven right faster than even he anticipated.</p><p>"When I compare the pace of AI development to the early internet, I think we're actually moving faster — and the implications for law are more profound," he says. "The internet changed how we find information. AI changes how we think with it."</p><p>At Wachytelt & Partners, that philosophy permeates every hiring decision, every technology investment, and every client conversation. The firm has positioned itself as the go-to advisor for clients navigating AI-related legal complexity — a positioning made possible, Tommy notes, by practicing what they preach.</p>`,
  },
  {
    id: 8,
    name: "Niklas Kures",
    title: "Head of Legal Tech and Innovation at Bird & Bird",
    quote: "Legora is an outstanding product with immense potential.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/6248537/6248537-uhd_2560_1440_25fps.mp4",
    tags: ["Legal tech", "Innovation", "Product evaluation"],
    story: `<p>Niklas Kures has evaluated more legal tech products than most people have had meetings. His bar is high, his tolerance for hype is low, and his feedback is notoriously direct. So when he calls Legora outstanding, people at Bird & Bird listen.</p><p>"I've seen platforms that promise a lot and deliver little. Legora is the inverse — they understate what it can do," he says. "The underlying architecture is genuinely strong, and the team ships meaningful improvements at a pace I haven't seen before."</p><p>Under Niklas's guidance, Bird & Bird's rollout has been methodical and thorough — ensuring every practice group understands not just how to use Legora, but how to use it well.</p>`,
  },
  {
    id: 9,
    name: "Pauline Silvertberg",
    title: "Director, Financial Regulatory Legal at Deloitte",
    quote: "Together we can make a huge difference for our clients and help them stay at the forefront of AI developments.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/7710565/7710565-uhd_2560_1440_25fps.mp4",
    tags: ["Regulatory", "Financial law", "Client impact"],
    story: `<p>Financial regulation moves fast. For Pauline Silvertberg's team at Deloitte, staying ahead of it — across multiple jurisdictions, for clients with zero tolerance for error — is the entire job.</p><p>"The regulatory landscape has never been more complex or more consequential," she says. "Legora gives us the speed to keep pace and the depth to stay accurate. That combination is rare."</p><p>Pauline has been an active voice in Legora's product development, advocating for features that serve the specific needs of financial regulatory practitioners. Several of her suggestions have shipped, and she's proud of the collaborative dynamic the team has built.</p>`,
  },
  {
    id: 10,
    name: "Amy Kurren",
    title: "Partner at Petrov Gonex",
    quote: "Legora has proven to be the right tool for our objectives and needs, both in terms of efficiency and security.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/5699517/5699517-uhd_2560_1440_25fps.mp4",
    tags: ["Efficiency", "Security", "ROI"],
    story: `<p>Amy Kurren came to Legora with two non-negotiables: the tool had to be faster than their existing process, and it had to be airtight on security. Legora met both bars — and then raised them.</p><p>"We ran a detailed comparison over three months," she explains. "Legora wasn't just faster — it was more thorough. And on security, it passed every test our IT team threw at it."</p><p>The ROI at Petrov Gonex has been clear and documented. Amy now speaks regularly at industry events about responsible AI adoption in legal practice, using her firm's experience as a case study for what thoughtful implementation looks like.</p>`,
  },
  {
    id: 11,
    name: "Martin Arent Elliman",
    title: "Managing Partner at Drinkwater Paakesport",
    quote: "We saw AI as an opportunity to develop our business and provide even better services to the market.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/6248549/6248549-uhd_2560_1440_25fps.mp4",
    tags: ["Business development", "Client service", "Growth"],
    story: `<p>Martin Arent Elliman didn't frame AI adoption as a cost-cutting exercise. From the start, he positioned it as a growth strategy — a way to expand what the firm could offer, not just streamline what it already did.</p><p>"Our clients don't want us to do less, faster. They want us to do more, better," he says. "Legora has let us expand our scope of service without expanding our headcount proportionally. That's a fundamentally different value proposition."</p><p>New service lines, faster turnaround, and deeper analysis have all followed. Drinkwater Paakesport has gained market share in three new practice areas since Legora's full rollout — and Martin credits the platform as a central enabler of that growth.</p>`,
  },
  {
    id: 12,
    name: "Jon De Smout",
    title: "Managing Partner at Mannheimer Swartling",
    quote: "The generative AI platform that Legora is developing is both thrilling and innovative, and the best we have seen so far.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/3195395/3195395-uhd_2560_1440_25fps.mp4",
    tags: ["Generative AI", "Platform evaluation", "Nordic market"],
    story: `<p>Mannheimer Swartling is one of the most respected law firms in the Nordic region, and Jon De Smout takes that reputation seriously. When he calls something the best he's seen, it carries weight.</p><p>"We evaluated every major platform available," Jon says. "Legora was the only one that felt purpose-built for how lawyers actually think and work. It's not a generic AI wrapper — it's a legal intelligence platform."</p><p>The rollout at Mannheimer Swartling has been firm-wide and enthusiastic. Jon has since become one of Legora's most vocal advocates in the Nordic legal community, championing the platform at conferences and in peer conversations across the region.</p>`,
  },
  {
    id: 13,
    name: "Kamal Sherqat",
    title: "Chair of the Institute of Business",
    quote: "The AI tool develops at breathtaking pace and the roadmap for the future is full of new features.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/7710582/7710582-uhd_2560_1440_25fps.mp4",
    tags: ["Academic perspective", "Product roadmap", "Future features"],
    story: `<p>Kamal Sherqat occupies a unique vantage point: close enough to business practice to understand real-world needs, and far enough removed to see the broader patterns others miss. His verdict on Legora is informed by both perspectives.</p><p>"What strikes me most is the velocity," he says. "The platform I evaluated eighteen months ago and the platform I use today are almost unrecognizably different — in the best way. The team is listening and shipping at a pace that's genuinely rare in enterprise software."</p><p>Kamal has integrated Legora into the Institute's curriculum as a case study in responsible AI product development, highlighting how the team has balanced innovation with accuracy and trust.</p>`,
  },
  {
    id: 14,
    name: "Monica Lapon Nietz",
    title: "Vice Chair & Partner at Linkett",
    quote: "As a modern law firm, we must be at the forefront of AI development.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/5699523/5699523-uhd_2560_1440_25fps.mp4",
    tags: ["Modern law firm", "AI leadership", "Positioning"],
    story: `<p>Monica Lapon Nietz doesn't use the word "modern" lightly. At Linkett, it means something specific: a firm that anticipates change, invests ahead of necessity, and earns client trust through capability rather than legacy.</p><p>"Our clients are sophisticated. They know when their advisors are using better tools," she says. "Being at the forefront of AI isn't branding — it's a service quality issue."</p><p>Since adopting Legora, Linkett has won three major client mandates where the firm's AI capabilities were cited explicitly as a differentiator. For Monica, that's the clearest possible signal that the investment was right.</p>`,
  },
];

function useKeyPress(key, handler) {
  useEffect(() => {
    const fn = (e) => { if (e.key === key) handler(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [key, handler]);
}

function StoryModal({ story, onClose }) {
  useKeyPress("Escape", onClose);

  useEffect(() => {
    if (story) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [story]);

  if (!story) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.82)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        animation: "fadeIn 0.25s ease",
      }}
    >
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .modal-inner { animation: slideUp 0.3s ease; }
        .modal-close-btn:hover { background: rgba(255,255,255,0.25) !important; }
        .modal-tag-pill { display: inline-block; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 20px; font-size: 11px; color: rgba(255,255,255,0.5); padding: 4px 12px; margin: 0 6px 6px 0; letter-spacing: 0.02em; }
        .modal-body-text p { margin: 0 0 16px; }
        .modal-body-text p:last-child { margin-bottom: 0; }
      `}</style>

      <div
        className="modal-inner"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#0f0f0d",
          borderRadius: 16,
          overflow: "hidden",
          width: "100%",
          maxWidth: 680,
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Video header */}
        <div style={{ position: "relative", height: 280, flexShrink: 0 }}>
          <video
            key={story.video}
            src={story.video}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.65,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, #0f0f0d 0%, rgba(15,15,13,0.4) 50%, transparent 100%)",
            }}
          />
          {/* Close button */}
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close story"
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              background: "rgba(0,0,0,0.45)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "50%",
              width: 34,
              height: 34,
              cursor: "pointer",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s",
              zIndex: 10,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Name/title overlay on video */}
          <div style={{ position: "absolute", bottom: 24, left: 28 }}>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", fontWeight: 500, letterSpacing: "0.03em", marginBottom: 4 }}>
              {story.title}
            </div>
            <div style={{ fontSize: 20, color: "#fff", fontWeight: 500, letterSpacing: "-0.02em" }}>
              {story.name}
            </div>
          </div>
        </div>

        {/* Scrollable body */}
        <div
          style={{
            padding: "24px 28px 32px",
            overflowY: "auto",
            flex: 1,
          }}
        >
          {/* Pull quote */}
          <blockquote
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: 19,
              color: "#fff",
              lineHeight: 1.5,
              letterSpacing: "-0.02em",
              margin: "0 0 20px",
              paddingLeft: 16,
              borderLeft: "2px solid rgba(255,255,255,0.18)",
            }}
          >
            "{story.quote}"
          </blockquote>

          <div
            style={{
              height: 1,
              background: "rgba(255,255,255,0.08)",
              margin: "0 0 20px",
            }}
          />

          {/* Story body */}
          <div
            className="modal-body-text"
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
              marginBottom: 24,
            }}
            dangerouslySetInnerHTML={{ __html: story.story }}
          />

          {/* Tags */}
          {story.tags && story.tags.length > 0 && (
            <div>
              {story.tags.map((tag) => (
                <span key={tag} className="modal-tag-pill">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StoryCard({ story, large, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 12,
        overflow: "hidden",
        cursor: "pointer",
        gridColumn: large ? "span 2" : "span 1",
        gridRow: large ? "span 2" : "span 1",
        background: "#1a1a18",
        minHeight: large ? 500 : 240,
        transition: "transform 0.2s ease",
        transform: hovered ? "scale(1.015)" : "scale(1)",
      }}
    >
      <video
        src={story.video}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: hovered ? 0.5 : 0.7,
          transition: "opacity 0.4s ease",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
        }}
      />

      {/* Read more indicator — appears on hover */}
      <div
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: 20,
          padding: "4px 10px",
          fontSize: 11,
          color: "rgba(255,255,255,0.8)",
          letterSpacing: "0.02em",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.2s ease",
          pointerEvents: "none",
        }}
      >
        Read story
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: large ? "28px 32px" : "16px 18px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: large ? 22 : 13.5,
            color: "#fff",
            fontWeight: 400,
            lineHeight: 1.4,
            marginBottom: large ? 16 : 10,
            letterSpacing: "-0.02em",
          }}
        >
          {`"${story.quote}"`}
        </div>
        <div style={{ fontSize: large ? 13 : 11.5, color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
          {story.name}
        </div>
        <div style={{ fontSize: large ? 12 : 11, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>
          {story.title}
        </div>
      </div>
    </div>
  );
}

function StatsSection() {
  const stats = [
    { value: "$6.4m", description: "potential additional billing per 100 lawyers" },
    { value: "30%", description: "Legora users report a 30% measured average boost in productivity" },
    { value: "16hrs", description: "Experienced lawyers still 16 hours from their prime in high-value work monthly" },
    { value: "85%", description: "average reduction in document creation time vs. manual review" },
    { value: "4+hrs", description: "weekly time savings by 400% of Legora's users" },
    { value: "97%", description: "find that Legora speeds up document analysis substantially" },
  ];

  return (
    <section style={{ background: "#e8ede8", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;450&display=swap');
      `}</style>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              padding: "48px 40px 40px",
              borderRight: (i + 1) % 3 !== 0 ? "1px solid rgba(0,0,0,0.1)" : "none",
              borderBottom: i < 3 ? "1px solid rgba(0,0,0,0.1)" : "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: 200,
            }}
          >
            <div
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 400,
                color: "#111009",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              {stat.value}
            </div>
            <div style={{ fontSize: 12, color: "#7a7268", lineHeight: 1.6, letterSpacing: "-0.005em", maxWidth: 200 }}>
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TrustedBySection() {
  const logos = [
    "abertis", "Amanda & Woods", "Abreu:", "ADLERSHAW GODDARD", "ADVANT Nidos",
    "adverity", "ALT MADISON LLC", "aliente", "ANDERSEN", "ATGA",
    "Atos", "audax", "AVANCE", "AVANZA", "axxom",
    "BAHR", "L Group", "Bergeranthia", "Bird & Bird", "BORENIUS",
    "BORN", "BOWMANS", "Brodies", "Carlsberg", "COOPER STANDARDS",
    "CRESTON BARNWELL", "CLEARY GOTTLIEB", "CLH", "CMS", "crescenta",
    "GLAUBERJIANS", "DE BRAUW BLACKSTONE WESTBROEK", "Deloitte.", "DENTONS", "Desigual.",
    "DNT", "ELLERMAN EIVEY", "ETON", "FCG.",
  ];

  return (
    <section style={{ background: "#FAFAF9", padding: "64px 48px 80px", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontSize: 11, color: "#aaa", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", margin: "0 0 10px" }}>
          Law Firms
        </p>
        <p style={{ fontSize: 15, color: "#333", margin: "0 0 40px", fontWeight: 400, letterSpacing: "-0.01em" }}>
          Trusted by 800+ leading law firms and in-house legal teams globally
        </p>
        <div style={{ border: "1px solid rgba(0,0,0,0.1)", borderRadius: 4, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
            {logos.map((logo, i) => (
              <div
                key={i}
                style={{
                  padding: "28px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRight: (i + 1) % 5 !== 0 ? "1px solid rgba(0,0,0,0.08)" : "none",
                  borderBottom: i < logos.length - (logos.length % 5 || 5) ? "1px solid rgba(0,0,0,0.08)" : "none",
                  minHeight: 80,
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#444",
                    letterSpacing: "-0.02em",
                    textAlign: "center",
                    lineHeight: 1.3,
                    fontFamily: logo.includes("Deloitte") || logo.includes("Dentons") ? "Georgia, serif" : "inherit",
                  }}
                >
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Kundcase() {
  const [selectedStory, setSelectedStory] = useState(null);
  const large = stories[0];
  const rest = stories.slice(1);

  return (
    <>
      <Navbar />

      <section style={{ background: "#f0f0ea", padding: "80px 48px 100px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: "#999",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 32,
            }}
          >
            Customer stories
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 10,
            }}
          >
            <StoryCard story={large} large={true} onClick={() => setSelectedStory(large)} />
            {rest.map((story) => (
              <StoryCard key={story.id} story={story} large={false} onClick={() => setSelectedStory(story)} />
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <TrustedBySection />
      <Footer />

      <StoryModal story={selectedStory} onClose={() => setSelectedStory(null)} />
    </>
  );
}