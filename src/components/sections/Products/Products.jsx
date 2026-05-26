import { useState } from 'react'
import './Products.css'

const products = [
  {
    name: 'Systemutveckling',
    tag: 'Platform',
    desc: 'Vi utvecklar skräddarsydda system som effektiviserar arbetsflöden, automatiserar processer och samlar allt på ett ställe för en smidigare verksamhet.',
    img: 'https://picsum.photos/seed/aos/600/340',
    modalDesc: 'Vi bygger system som passar just er verksamhet — inga generiska lösningar, inga onödiga kompromisser. Från idé till driftsatt produkt hjälper vi er att kartlägga behov, designa arkitektur och leverera ett system som faktiskt fungerar i vardagen. Resultatet? Färre manuella steg, snabbare processer och ett team som kan fokusera på det som verkligen skapar värde.',
  },
  {
    name: 'AI-lösningar',
    tag: 'Automation',
    desc: 'Smarta AI-lösningar som automatiserar repetitiva uppgifter, förbättrar kundupplevelsen och hjälper ditt företag att arbeta snabbare och mer effektivt.',
    img: 'https://picsum.photos/seed/agent/600/340',
    modalDesc: 'AI är inte längre något för morgondagen — det är ett konkurrensmedel redan idag. Vi hjälper er att identifiera var AI gör störst skillnad i er verksamhet och implementerar lösningar som faktiskt används. Oavsett om det handlar om att automatisera kundtjänst, analysera data eller effektivisera interna flöden, ser vi till att tekniken passar er — inte tvärtom.',
  },
  {
    name: 'IT-drift',
    tag: 'Compliance',
    desc: 'Stabil och säker IT-drift med övervakning, support och molnlösningar som säkerställer att era system alltid fungerar optimalt.',
    img: 'https://picsum.photos/seed/monitors/600/340',
    modalDesc: 'Ni ska kunna lita på att era system fungerar — punkt. Vi tar hand om övervakning, underhåll, säkerhetsuppdateringar och support så att ni slipper. Med proaktiv drift fångar vi problem innan de påverkar er verksamhet, och med våra molnlösningar skalar ni upp eller ner efter behov utan krångel. Er IT, alltid i trygga händer.',
  },
  {
    name: 'Appar',
    tag: 'Coming soon',
    desc: 'Moderna och användarvänliga appar för webb och mobil som stärker er digitala närvaro och förenklar vardagen för både kunder och personal.',
    img: 'https://picsum.photos/seed/lists/600/340',
    soon: true,
  },
]

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(null)

  return (
    <>
      <section className="products-section">
        <div className="products-header">
          <h6 className="section-headline">Skräddarsydda lösningar</h6>
          <p className="section-sub">
            Välj Techknigts skräddarsydda IT-lösningar för att driva ditt företag framåt. Kontakta oss idag för ett kostnadsfritt möte och upptäck hur vi kan digitalisera och effektivisera era befintliga arbetsflöden.
          </p>
        </div>
        <div className="products-grid">
          {products.map(p => (
            <div
              className={`product-card ${p.soon ? 'product-card--soon' : ''}`}
              key={p.name}
            >
              <div className="product-card-img">
                <img src={p.img} alt={p.name} />
              </div>
              <div className="product-card-body">
                <div className="product-card-top">
                  <span className="product-tag">{p.tag}</span>
                  {p.soon && <span className="product-badge">Soon</span>}
                </div>
                <h3 className="product-name">{p.name}</h3>
                <p className="product-desc">{p.desc}</p>
                {!p.soon && (
                  <button
                    className="product-link"
                    onClick={() => setActiveProduct(p)}
                  >
                    Läs mer
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {activeProduct && (
        <div className="modal-overlay" onClick={() => setActiveProduct(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProduct(null)} aria-label="Stäng">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="modal-img">
              <img src={activeProduct.img} alt={activeProduct.name} />
            </div>
            <div className="modal-body">
              <span className="product-tag">{activeProduct.tag}</span>
              <h2 className="modal-title">{activeProduct.name}</h2>
              <p className="modal-desc">{activeProduct.modalDesc}</p>
              <a href="#book" className="modal-cta">Boka ett möte</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}