import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-grid">
        <div className="about-label">
          <span>What</span>
          <span>We</span>
          <span>Do</span>
        </div>
        
        <div className="about-content">
          <h2 className="about-headline">
            Bridging <span className="highlight">law</span> and <span className="highlight">technology</span> to make AI regulation work.
          </h2>
          
          <p className="about-text">
            AI laws like GDPR and the AI Act set important rules—but implementing them 
            requires deep expertise in both computer science and law. We bring these 
            disciplines together to build tools that actually work.
          </p>
        </div>
      </div>
      
      <div className="aims-section">
        <div className="aim" data-num="01">
          <h3>Regulation</h3>
          <p>Assess and improve the EU's AI regulation process</p>
        </div>
        <div className="aim" data-num="02">
          <h3>Communication</h3>
          <p>Help SMEs understand what to do</p>
        </div>
        <div className="aim" data-num="03">
          <h3>Competition</h3>
          <p>Keep big tech in check</p>
        </div>
        <div className="aim" data-num="04">
          <h3>Enforcement</h3>
          <p>Tools that scale</p>
        </div>
      </div>
    </section>
  );
}
