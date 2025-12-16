import { teamMembers } from '../data/team';
import './Team.css';

export default function Team() {
  const lead = teamMembers.find(m => m.category === 'Lead');
  const researchers = teamMembers.filter(m => m.category === 'Researcher');
  const advisors = teamMembers.filter(m => m.category === 'Advisor');

  return (
    <section id="team" className="team">
      <div className="team-intro">
        <h2>The<br/>Humans</h2>
        <p>
          Interdisciplinary researchers in law, ML, and data science. 
          Based at <a href="https://www.maastrichtuniversity.nl/about-um/faculties/law/research/law-and-tech-lab" target="_blank" rel="noreferrer">Law & Tech Lab</a>, Maastricht.
        </p>
      </div>
      
      {lead && (
        <div className="team-lead">
          <div className="lead-img">
            {lead.imageUrl && <img src={lead.imageUrl} alt={lead.name} />}
          </div>
          <div className="lead-info">
            <span className="lead-label">Project Lead</span>
            <h3>{lead.name}</h3>
            <p>{lead.role}</p>
          </div>
        </div>
      )}
      
      <div className="team-grid">
        <div className="team-group">
          <span className="group-label">Research Team</span>
          <div className="members">
            {researchers.map(m => (
              <div key={m.id} className="member">
                <div className="member-img">
                  {m.imageUrl && <img src={m.imageUrl} alt={m.name} />}
                </div>
                <span className="member-name">{m.name}</span>
                <span className="member-role">{m.role}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="team-group">
          <span className="group-label">Advisors</span>
          <div className="members">
            {advisors.map(m => (
              <div key={m.id} className="member">
                <div className="member-img">
                  {m.imageUrl && <img src={m.imageUrl} alt={m.name} />}
                </div>
                <span className="member-name">{m.name}</span>
                <span className="member-role">{m.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
