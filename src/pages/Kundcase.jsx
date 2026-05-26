import { useState } from "react";
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
  },
  {
    id: 2,
    name: "Karin-Mia Berntsen",
    title: "Head of Legal Research at Evolog",
    quote: "Legora is my work companion. Every day I cannot see a situation where I work without Legora.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/6248461/6248461-uhd_2560_1440_25fps.mp4",
  },
  {
    id: 3,
    name: "Alexander Peep",
    title: "Managing Partner at Tschernert",
    quote: "The firms that shape what comes next will be the ones building alongside the people driving this transformation.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/5699516/5699516-uhd_2560_1440_25fps.mp4",
  },
  {
    id: 4,
    name: "Tommy Wachtels",
    title: "Corporate and M&A Partner, Berlin at Glenrose",
    quote: "With the help of AI, we can make the knowledge of more than 7,000 lawyers available at scale.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/7710586/7710586-uhd_2560_1440_25fps.mp4",
  },
  {
    id: 5,
    name: "Mabel Robertshaw",
    title: "Head of Group Commercial at Sorix Onera",
    quote: "Any technology introduced into the bank must meet uncompromising standards of security, accuracy, and intention.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/6248544/6248544-uhd_2560_1440_25fps.mp4",
  },
  {
    id: 6,
    name: "Thomas K. Berman",
    title: "Managing Partner at SOAN",
    quote: "Today as much as 60% of our people are active users, and as high as 30% use Legora more than ten times a day.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/5699527/5699527-uhd_2560_1440_25fps.mp4",
  },
  {
    id: 7,
    name: "Tommy Wachtels",
    title: "Founding Partner at Wachytelt & Partners",
    quote: "Artificial intelligence has already become as important to society as the internet.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/3195396/3195396-uhd_2560_1440_25fps.mp4",
  },
  {
    id: 8,
    name: "Niklas Kures",
    title: "Head of Legal Tech and Innovation at Bird & Bird",
    quote: "Legora is an outstanding product with immense potential.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/6248537/6248537-uhd_2560_1440_25fps.mp4",
  },
  {
    id: 9,
    name: "Pauline Silvertberg",
    title: "Director, Financial Regulatory Legal at Deloitte",
    quote: "Together we can make a huge difference for our clients and help them stay at the forefront of AI developments.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/7710565/7710565-uhd_2560_1440_25fps.mp4",
  },
  {
    id: 10,
    name: "Amy Kurren",
    title: "Partner at Petrov Gonex",
    quote: "Legora has proven to be the right tool for our objectives and needs, both in terms of efficiency and security.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/5699517/5699517-uhd_2560_1440_25fps.mp4",
  },
  {
    id: 11,
    name: "Martin Arent Elliman",
    title: "Managing Partner at Drinkwater Paakesport",
    quote: "We saw AI as an opportunity to develop our business and provide even better services to the market.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/6248549/6248549-uhd_2560_1440_25fps.mp4",
  },
  {
    id: 12,
    name: "Jon De Smout",
    title: "Managing Partner at Mannheimer Swartling",
    quote: "The generative AI platform that Legora is developing is both thrilling and innovative, and the best we have seen so far.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/3195395/3195395-uhd_2560_1440_25fps.mp4",
  },
  {
    id: 13,
    name: "Kamal Sherqat",
    title: "Chair of the Institute of Business",
    quote: "The AI tool develops at breathtaking pace and the roadmap for the future is full of new features.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/7710582/7710582-uhd_2560_1440_25fps.mp4",
  },
  {
    id: 14,
    name: "Monica Lapon Nietz",
    title: "Vice Chair & Partner at Linkett",
    quote: "As a modern law firm, we must be at the forefront of AI development.",
    size: "medium",
    video: "https://videos.pexels.com/video-files/5699523/5699523-uhd_2560_1440_25fps.mp4",
  },
];

function StoryCard({ story, large }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
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
    {
      value: "$6.4m",
      description: "potential additional billing per 100 lawyers",
    },
    {
      value: "30%",
      description: "Legora users report a 30% measured average boost in productivity",
    },
    {
      value: "16hrs",
      description: "Experienced lawyers still 16 hours from their prime in high-value work monthly",
    },
    {
      value: "85%",
      description: "average reduction in document creation time vs. manual review",
    },
    {
      value: "4+hrs",
      description: "weekly time savings by 400% of Legora's users",
    },
    {
      value: "97%",
      description: "find that Legora speeds up document analysis substantially",
    },
  ];

  return (
    <section
      style={{
        background: "#e8ede8",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;450&display=swap');
      `}</style>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
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
            <div
              style={{
                fontSize: 12,
                color: "#7a7268",
                lineHeight: 1.6,
                letterSpacing: "-0.005em",
                maxWidth: 200,
              }}
            >
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Kundcase() {
  const large = stories[0];
  const rest = stories.slice(1);

  return (
    <>
      <Navbar />

    
      <section
        style={{
          background: "#f0f0ea",
          padding: "80px 48px 100px",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
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
            <StoryCard story={large} large={true} />
            {rest.map((story) => (
              <StoryCard key={story.id} story={story} large={false} />
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      <TrustedBySection />

      <Footer />
    </>
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
    <section
      style={{
        background: "#FAFAF9",
        padding: "64px 48px 80px",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
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
        <div
          style={{
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
            }}
          >
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