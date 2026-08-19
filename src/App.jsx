import { useEffect, useState } from "react";
import "./App.css";

const editions = [
  { id: "clay", name: "Clay", label: "terracota suave", color: "#de765b", dark: "#3d1f24" },
  { id: "tide", name: "Tide", label: "azul mineral", color: "#6bc5c1", dark: "#153b43" },
  { id: "moss", name: "Moss", label: "verde musgo", color: "#9aaf83", dark: "#253a32" },
];

const steps = [
  {
    number: "01",
    title: "Gire o anel",
    copy: "Um gesto simples escolhe a atmosfera que combina com o momento — sem menus, sem notificações.",
    visual: "focus",
  },
  {
    number: "02",
    title: "Escolha o ritmo",
    copy: "Três paisagens de luz organizam a presença do Halo no seu espaço: começar, mergulhar ou desacelerar.",
    visual: "flow",
  },
  {
    number: "03",
    title: "Deixe o espaço responder",
    copy: "A luz se ajusta suavemente ao longo do tempo, criando uma transição que você percebe — não uma tela que interrompe.",
    visual: "rest",
  },
];

const faqs = [
  {
    question: "O Halo é uma luminária comum?",
    answer: "Não exatamente. Ele combina luz ambiente, um anel de controle tátil e três ritmos pré-configurados em um objeto compacto. A ideia é criar uma experiência de espaço, não apenas iluminar uma mesa.",
  },
  {
    question: "Preciso instalar algum aplicativo?",
    answer: "Não. O Halo foi pensado para funcionar sozinho, direto na tomada. Você escolhe o ritmo pelo anel superior e pode deixar o objeto fazer o resto.",
  },
  {
    question: "Qual é o tamanho do produto?",
    answer: "O Halo tem 18 cm de altura e 16 cm de diâmetro. Cabe ao lado do monitor, em uma estante ou sobre uma mesa de cabeceira sem dominar o ambiente.",
  },
  {
    question: "O que vem na caixa?",
    answer: "Você recebe o Halo, a base de cerâmica, cabo USB-C revestido em tecido, adaptador de tomada e um pequeno cartão com três rituais para começar.",
  },
];

const reviews = [
  { quote: "Ele mudou o jeito como eu começo a escrever. O espaço fica pronto antes de mim.", name: "Marina S.", role: "diretora de arte, São Paulo" },
  { quote: "Parece um objeto de design, mas funciona com uma simplicidade rara. É só girar e pronto.", name: "Caio R.", role: "arquiteto, Recife" },
  { quote: "Meu canto de leitura ganhou uma assinatura. A luz do fim do dia é especialmente bonita.", name: "Lívia M.", role: "editora, Belo Horizonte" },
];

function Icon({ name, size = 18 }) {
  const paths = {
    arrow: <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
    arrowUp: <><path d="M12 19V5" /><path d="m6 11 6-6 6 6" /></>,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
    minus: <path d="M5 12h14" />,
    check: <path d="m5 12 4 4L19 6" />,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    close: <><path d="m6 6 12 12" /><path d="M18 6 6 18" /></>,
    spark: <><path d="m12 3 1.4 5.6L19 10l-5.6 1.4L12 17l-1.4-5.6L5 10l5.6-1.4L12 3Z" /><path d="m19 16 .6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6L19 16Z" /></>,
    sun: <><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
    wave: <><path d="M3 12c2.4-4 4.8-4 7.2 0s4.8 4 7.2 0 4.8-4 7.2 0" /></>,
    leaf: <><path d="M20 4C11 4 5 8 5 14c0 3 2 5 5 5 6 0 10-6 10-15Z" /><path d="M4 21c3-5 7-8 12-10" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function ProductVisual({ edition = "clay", compact = false, mode = "focus" }) {
  const current = editions.find((item) => item.id === edition) || editions[0];
  return (
    <div className={`product-visual product-visual--${mode} ${compact ? "product-visual--compact" : ""}`} style={{ "--product-color": current.color, "--product-dark": current.dark }} aria-label={`Ilustração do Lumea Halo na edição ${current.name}`}>
      <div className="visual-grid" />
      <span className="visual-orbit visual-orbit--a" />
      <span className="visual-orbit visual-orbit--b" />
      <span className="visual-glow" />
      <div className="halo-object">
        <div className="halo-top"><span className="halo-dial" /><span className="halo-notch" /></div>
        <div className="halo-body"><span className="halo-light" /><span className="halo-mark">L</span></div>
        <div className="halo-base" />
      </div>
      <div className="visual-shadow" />
      <span className="visual-coordinate">18° 31&apos; 12&quot; S</span>
      {!compact && <span className="visual-caption">LUMEA / HALO / 01</span>}
    </div>
  );
}

function SectionLabel({ number, children, light = false }) {
  return <div className={`section-label ${light ? "section-label--light" : ""}`}><span>{number}</span><span>{children}</span></div>;
}

function Button({ children, variant = "primary", onClick, href, type = "button", className = "" }) {
  const classes = `button button--${variant} ${className}`;
  if (href) return <a className={classes} href={href} onClick={onClick}>{children}<Icon name="arrow" size={16} /></a>;
  return <button className={classes} onClick={onClick} type={type}>{children}<Icon name="arrow" size={16} /></button>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(steps[0]);
  const [activeEdition, setActiveEdition] = useState(editions[0]);
  const [openFaq, setOpenFaq] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setModalOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site-shell">
      <div className="announcement"><span className="announcement-dot" /> Pré-venda aberta · envio a partir de 12 de setembro <a href="#oferta">garanta o seu <Icon name="arrow" size={13} /></a></div>

      <header className="navbar">
        <a className="wordmark" href="#top" aria-label="Lumea início"><span className="wordmark-symbol"><i /><i /><i /></span><span>Lumea</span></a>
        <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`} aria-label="Navegação principal">
          <a href="#produto" onClick={closeMenu}>O objeto</a>
          <a href="#ritual" onClick={closeMenu}>Como funciona</a>
          <a href="#historias" onClick={closeMenu}>Histórias</a>
          <a href="#faq" onClick={closeMenu}>Dúvidas</a>
          <Button variant="small" href="#oferta" onClick={closeMenu}>Conhecer o Halo</Button>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? "close" : "menu"} /></button>
      </header>

      <main id="top">
        <section className="hero section-dark">
          <div className="hero-grid" />
          <div className="hero-inner page-width">
            <div className="hero-copy reveal-up">
              <p className="eyebrow eyebrow--coral"><span className="eyebrow-line" /> objeto de luz responsiva</p>
              <h1>Acenda o seu <em>próximo foco.</em></h1>
              <p className="hero-description">Lumea Halo transforma a luz do seu espaço em um ritual simples para começar, mergulhar e desacelerar.</p>
              <div className="hero-actions"><Button href="#produto">Conhecer o Halo</Button><a className="text-link" href="#ritual">Ver como funciona <Icon name="arrow" size={15} /></a></div>
              <div className="hero-meta"><span><strong>3</strong> ritmos de luz</span><span><strong>18</strong> cm de presença</span><span><strong>0</strong> apps necessários</span></div>
            </div>
            <div className="hero-art reveal-up reveal-up--delay"><ProductVisual /></div>
          </div>
          <a className="scroll-cue" href="#produto"><span>role para explorar</span><Icon name="arrowUp" size={16} /></a>
        </section>

        <div className="marquee" aria-hidden="true"><div className="marquee-track"><span>Make room for a better mood</span><i>✳</i><span>Make room for a better mood</span><i>✳</i><span>Make room for a better mood</span><i>✳</i><span>Make room for a better mood</span><i>✳</i></div></div>

        <section className="intro section-light page-width" id="produto">
          <SectionLabel number="01">o objeto</SectionLabel>
          <div className="intro-layout">
            <h2>Uma pausa que <span>ganha forma.</span></h2>
            <div className="intro-copy"><p>O Halo nasceu para os espaços entre uma coisa e outra: a primeira página em branco, a última reunião do dia, o café que pede silêncio.</p><p>Um objeto tátil, silencioso e intencional — feito para sinalizar ao ambiente que agora é hora de estar presente.</p><a className="underlined-link" href="#beneficios">Descubra os detalhes <Icon name="arrow" size={15} /></a></div>
          </div>
          <div className="intro-stats"><div><strong>01</strong><span>objeto, muitos<br />começos</span></div><div><strong>360°</strong><span>luz que abraça<br />o espaço</span></div><div><strong>USB-C</strong><span>energia simples,<br />sem excesso</span></div></div>
        </section>

        <section className="benefits section-cream" id="beneficios">
          <div className="page-width"><SectionLabel number="02">por que halo</SectionLabel><div className="section-heading-row"><h2>Menos ruído.<br /><span>Mais intenção.</span></h2><p>Detalhes pensados para desaparecer no uso e aparecer no seu espaço.</p></div>
            <div className="benefit-grid">
              <article className="benefit-card benefit-card--dark"><div className="card-icon"><Icon name="spark" size={25} /></div><span className="card-number">01 / atmosfera</span><h3>Três humores, uma assinatura.</h3><p>Uma luz quente para iniciar, uma presença clara para focar e um brilho baixo para fechar o dia.</p><a href="#ritual">Explorar os ritmos <Icon name="arrow" size={15} /></a></article>
              <article className="benefit-card"><div className="card-icon card-icon--coral"><Icon name="sun" size={25} /></div><span className="card-number">02 / matéria</span><h3>Cerâmica que segura a luz.</h3><p>A base artesanal recebe o brilho e o devolve em um halo suave, sem pontos estourados ou reflexos agressivos.</p><a href="#oferta">Ver acabamentos <Icon name="arrow" size={15} /></a></article>
              <article className="benefit-card"><div className="card-icon card-icon--mint"><Icon name="leaf" size={25} /></div><span className="card-number">03 / presença</span><h3>Bonito quando está desligado.</h3><p>Um volume escultural, compacto e honesto. O Halo não pede atenção — ele melhora o que já existe ao redor.</p><a href="#historias">Ler histórias <Icon name="arrow" size={15} /></a></article>
            </div>
          </div>
        </section>

        <section className="ritual section-dark" id="ritual">
          <div className="page-width"><SectionLabel number="03" light>o ritual</SectionLabel><div className="section-heading-row section-heading-row--light"><h2>Você escolhe<br />o <span>ritmo.</span></h2><p>Sem telas. Sem alertas. Apenas um gesto e uma mudança gradual no ambiente.</p></div>
            <div className="ritual-layout"><div className="steps-list">{steps.map((step) => <button key={step.number} className={`step-item ${activeStep.number === step.number ? "step-item--active" : ""}`} onClick={() => setActiveStep(step)}><span className="step-number">{step.number}</span><span className="step-title">{step.title}</span><span className="step-arrow"><Icon name="arrow" size={16} /></span>{activeStep.number === step.number && <span className="step-copy">{step.copy}</span>}</button>)}</div><div className="ritual-art"><ProductVisual edition={activeEdition.id} mode={activeStep.visual} compact /><div className="ritual-art-label"><span>ritmo selecionado</span><strong>{activeStep.title}</strong></div></div></div>
          </div>
        </section>

        <section className="stories section-light" id="historias">
          <div className="page-width"><SectionLabel number="04">de quem já acendeu</SectionLabel><div className="stories-heading"><h2>Pequenas mudanças<br /><span>fazem espaço.</span></h2><div className="rating"><strong>4.9</strong><div><span className="stars">★★★★★</span><small>124 primeiras histórias</small></div></div></div><div className="reviews-grid">{reviews.map((review) => <article className="review" key={review.name}><span className="quote-mark">“</span><p>{review.quote}</p><div className="review-author"><span className="avatar">{review.name.charAt(0)}</span><span><strong>{review.name}</strong><small>{review.role}</small></span></div></article>)}</div></div>
        </section>

        <section className="offer section-coral" id="oferta">
          <div className="page-width"><SectionLabel number="05" light>edição inaugural</SectionLabel><div className="offer-layout"><div className="offer-visual"><ProductVisual edition={activeEdition.id} mode="offer" /><div className="edition-switcher"><span>escolha o acabamento</span><div>{editions.map((edition) => <button key={edition.id} className={activeEdition.id === edition.id ? "is-selected" : ""} style={{ "--swatch": edition.color }} onClick={() => setActiveEdition(edition)} aria-label={`Escolher edição ${edition.name}`} aria-pressed={activeEdition.id === edition.id}><i /></button>)}</div><strong>{activeEdition.name} <small>· {activeEdition.label}</small></strong></div></div><div className="offer-copy"><span className="offer-kicker">Lumea Halo / 01</span><h2>Um novo jeito<br />de chegar <em>ao agora.</em></h2><p className="offer-description">A edição inaugural inclui o Halo em cerâmica, acessórios essenciais e acesso antecipado às próximas paisagens de luz.</p><div className="price-row"><div><span>por tempo limitado</span><strong>R$ 389<sup>90</sup></strong></div><del>R$ 459,90</del></div><ul className="included-list"><li><Icon name="check" size={15} /> Halo + base de cerâmica</li><li><Icon name="check" size={15} /> Cabo USB-C em tecido</li><li><Icon name="check" size={15} /> Garantia de 2 anos</li></ul><Button variant="light" onClick={() => { setSubmitted(false); setModalOpen(true); }}>Quero o meu Halo</Button><p className="offer-note">Pagamento seguro · envio para todo o Brasil</p></div></div></div>
        </section>

        <section className="faq section-cream" id="faq"><div className="page-width"><SectionLabel number="06">dúvidas honestas</SectionLabel><div className="faq-layout"><div><h2>Antes de<br /><span>acender.</span></h2><p>Se a sua pergunta não estiver aqui, escreva para <a href="mailto:oi@lumea.halo">oi@lumea.halo</a>.</p></div><div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${openFaq === index ? "faq-item--open" : ""}`} key={faq.question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{faq.question}</span><span className="faq-icon"><Icon name={openFaq === index ? "minus" : "plus"} size={17} /></span></button><div className="faq-answer"><p>{faq.answer}</p></div></div>)}</div></div></div></section>

        <section className="final-cta section-dark"><div className="final-cta-orbit" /><div className="page-width"><p className="eyebrow eyebrow--coral">um pouco mais de presença</p><h2>Faça espaço<br /><em>para o agora.</em></h2><Button href="#oferta">Conhecer o Lumea Halo</Button><span className="final-note">Edição inaugural · poucas unidades</span></div></section>
      </main>

      <footer className="footer"><div className="page-width"><div className="footer-top"><a className="wordmark wordmark--dark" href="#top"><span className="wordmark-symbol"><i /><i /><i /></span><span>Lumea</span></a><p>objetos para um dia<br />com mais intenção.</p><a className="back-top" href="#top">voltar ao topo <Icon name="arrowUp" size={15} /></a></div><div className="footer-bottom"><span>© 2024 Lumea Studio</span><div><a href="#produto">O objeto</a><a href="#ritual">Como funciona</a><a href="#faq">Dúvidas</a></div><span>feito com calma no Brasil</span></div></div></footer>

      {modalOpen && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setModalOpen(false); }}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={() => setModalOpen(false)} aria-label="Fechar"><Icon name="close" /></button>{submitted ? <div className="modal-success"><div className="success-icon"><Icon name="check" size={26} /></div><span className="eyebrow eyebrow--coral">pedido recebido</span><h2>Seu espaço já está<br /><em>se preparando.</em></h2><p>Obrigado por entrar para a primeira edição do Halo. Em breve, enviaremos os próximos passos para o seu e-mail.</p><button className="button button--primary" onClick={() => setModalOpen(false)}>Voltar para a página <Icon name="arrow" size={16} /></button></div> : <><div className="modal-header"><span className="eyebrow eyebrow--coral">edição {activeEdition.name}</span><h2 id="modal-title">Reserve seu<br /><em>Halo.</em></h2><p>Deixe seus dados para simular a reserva da edição inaugural.</p></div><form onSubmit={handleSubmit}><label>Seu nome<input required type="text" placeholder="Como podemos chamar você?" /></label><label>Seu melhor e-mail<input required type="email" placeholder="voce@exemplo.com" /></label><button className="button button--primary" type="submit">Confirmar reserva <Icon name="arrow" size={16} /></button><small>Sem compromisso. Você poderá cancelar a qualquer momento.</small></form></>}</div></div>}
    </div>
  );
}

export default App;
