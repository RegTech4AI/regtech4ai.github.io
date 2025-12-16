import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-tagline">Making AI law work in practice.</p>
            <p className="footer-affil">
              Part of <a href="https://www.maastrichtuniversity.nl/about-um/faculties/law/research/law-and-tech-lab" target="_blank" rel="noreferrer">Law & Tech Lab</a>, Maastricht University
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-col">
              <span className="col-title">Navigate</span>
              <a href="#about">About</a>
              <a href="#team">Team</a>
              <Link to="/publications">Publications</Link>
            </div>
            <div className="footer-col">
              <span className="col-title">Connect</span>
              <a href="mailto:contact@regtech4ai.com">Email</a>
              <a href="https://github.com/RegTech4AI" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://regtech4ai.substack.com/" target="_blank" rel="noreferrer">Substack</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()}</span>
          <span className="footer-funding">Funded by NGF AiNed</span>
        </div>
      </div>
    </footer>
  );
}
