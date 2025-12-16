import { newsItems } from '../data/news';
import './News.css';

export default function News() {
  const recentNews = newsItems.slice(0, 3);

  return (
    <section id="news" className="news">
      <div className="news-header">
        <span className="news-tag">Latest</span>
        <h2>What's happening</h2>
      </div>
      
      <div className="news-marquee">
        <div className="marquee-track">
          {[...recentNews, ...recentNews].map((item, i) => (
            <div key={i} className="marquee-item">
              <span className="marquee-date">{item.date}</span>
              <span className="marquee-title">{item.title}</span>
              {item.link && <a href={item.link} target="_blank" rel="noreferrer">→</a>}
            </div>
          ))}
        </div>
      </div>
      
      <div className="news-cta">
        <a href="https://regtech4ai.substack.com/" target="_blank" rel="noreferrer" className="cta-link">
          <span className="cta-text">Subscribe for updates</span>
          <span className="cta-arrow">→</span>
        </a>
      </div>
    </section>
  );
}
