import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-blob hero-blob-1"></div>
      <div className="hero-blob hero-blob-2"></div>
      
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Making</span>
            <span className="title-line title-accent">AI Law</span>
            <span className="title-line">Actually Work</span>
          </h1>
          
          <p className="hero-tagline">
            RegTech4AI combines computer science and law to turn GDPR & AI Act 
            requirements into practical tools for enforcement and compliance.
          </p>
          
          <div className="hero-meta">
            <span className="hero-badge">NGF Funded</span>
            <a 
              href="https://www.maastrichtuniversity.nl/about-um/faculties/law/research/law-and-tech-lab" 
              target="_blank" 
              rel="noreferrer"
              className="hero-lab"
            >
              Part of Law & Tech Lab, Maastricht
            </a>
          </div>
          
          <div className="hero-actions">
            <a href="#about" className="hero-btn">
              What we do ↓
            </a>
            <a href="https://regtech4ai.substack.com/" target="_blank" rel="noreferrer" className="hero-btn hero-btn-alt">
              Newsletter →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
