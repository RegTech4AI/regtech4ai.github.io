import { publications, typeLabels, type Publication } from '../data/publications';
import './Publications.css';

const monthOrder: Record<string, number> = {
  'January': 1, 'February': 2, 'March': 3, 'April': 4,
  'May': 5, 'June': 6, 'July': 7, 'August': 8,
  'September': 9, 'October': 10, 'November': 11, 'December': 12
};

const sortByDate = (a: Publication, b: Publication): number => {
  if (b.year !== a.year) return b.year - a.year;
  const monthA = a.month ? monthOrder[a.month] || 0 : 0;
  const monthB = b.month ? monthOrder[b.month] || 0 : 0;
  return monthB - monthA;
};

export default function Publications() {
  const sortedPublications = [...publications].sort(sortByDate);

  const PublicationCard = ({ pub }: { pub: Publication }) => (
    <div className="publication-card">
      <div className="pub-type-badge">{typeLabels[pub.type]}</div>
      <h4 className="pub-title">{pub.title}</h4>
      <p className="pub-authors">{pub.authors.join(', ')}</p>
      <p className="pub-venue">
        <em>{pub.venue}</em> ({pub.month ? `${pub.month} ` : ''}{pub.year})
      </p>
      {pub.abstract && (
        <p className="pub-abstract">{pub.abstract}</p>
      )}
      <div className="pub-links">
        {pub.doi && (
          <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer" className="pub-link">
            DOI
          </a>
        )}
        {pub.url && (
          <a href={pub.url} target="_blank" rel="noreferrer" className="pub-link">
            View
          </a>
        )}
        {pub.pdf && (
          <a href={pub.pdf} target="_blank" rel="noreferrer" className="pub-link">
            PDF
          </a>
        )}
      </div>
    </div>
  );

  const hasPublications = publications.length > 0;

  return (
    <main className="publications-page">
      <div className="container">
        <div className="publications-header">
          <h1 className="page-title">Publications</h1>
          <p className="page-subtitle">
            Research outputs from the RegTech4AI project
          </p>
        </div>

        {hasPublications ? (
          <div className="publications-list">
            {sortedPublications.map((pub) => (
              <PublicationCard key={pub.id} pub={pub} />
            ))}
          </div>
        ) : (
          <div className="no-publications">
            <div className="no-pub-icon">📚</div>
            <h3>Publications Coming Soon</h3>
            <p>
              The RegTech4AI project is currently underway. Research publications will be 
              listed here as they become available.
            </p>
            <p>
              In the meantime, you can follow our progress on our{' '}
              <a href="https://regtech4ai.substack.com/" target="_blank" rel="noreferrer">
                Substack newsletter
              </a>.
            </p>
          </div>
        )}

        <div className="publications-cta">
          <a href="/" className="back-link">← Back to Home</a>
        </div>
      </div>
    </main>
  );
}

