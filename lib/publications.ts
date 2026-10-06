// GENERATED FILE — do not edit by hand.
// Written by tools/sync_pubs.py in the kollnig.net repo from the
// RegTech4AI-tagged subset of the shared lab feed. Regenerate with:
//   python3 tools/sync_pubs.py

export interface Publication {
  id: number
  title: string
  authors: string[]
  venue: string
  year: number
  type: "journal" | "conference" | "report" | "preprint"
  url?: string
}

export const publications: Publication[] = [
  {
    id: 1,
    title: "\" If I Had to Buy Just ONE: Galaxy S26 Ultra\": Auditing AI-Generated Product Recommendations",
    authors: ["L. Marin", "T. Bertaglia", "G. Astante", "B. Rijsbosch", "G. van Dijck", "A. Hannák", "...", "et al."],
    venue: "arXiv",
    year: 2026,
    type: "preprint",
    url: "https://doi.org/10.48550/arxiv.2609.18729",
  },
  {
    id: 2,
    title: "Building AI (In)dependence through EU's AI Factories",
    authors: ["D. Halil", "B. Rijsbosch", "K. Kollnig"],
    venue: "SSRN",
    year: 2026,
    type: "preprint",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6725720",
  },
  {
    id: 3,
    title: "Can the GPC standard eliminate consent banners in the EU?",
    authors: ["S. Zimmeck", "H. Pandit", "F. Borgesius", "C. Santos", "K. Kollnig", "R. Berjon"],
    venue: "Computer Law & Security Review",
    year: 2026,
    type: "journal",
    url: "https://doi.org/10.2139/ssrn.5891642",
  },
  {
    id: 4,
    title: "Drowning in AI Slop: How Social Media Platforms (Do Not) Label AI and Deepfake Content under EU law",
    authors: ["B. Rijsbosch", "L. Bekavac", "H. Tari", "G. van Dijck", "K. Kollnig"],
    venue: "arXiv",
    year: 2026,
    type: "preprint",
    url: "https://doi.org/10.48550/arxiv.2609.38571",
  },
  {
    id: 5,
    title: "Exploring the \"Banality\" of Deception in Generative AI",
    authors: ["I. Narwane", "J. Gunawan", "K. Kollnig"],
    venue: "arXiv",
    year: 2026,
    type: "preprint",
    url: "https://doi.org/10.48550/arxiv.2605.07012",
  },
  {
    id: 6,
    title: "Is your AI Model Accurate Enough? The Difficult Choices Behind Rigorous AI Development and the EU AI Act",
    authors: ["L. Uberti-Bona Marin", "B. Rijsbosch", "K. Meding", "G. Spanakis", "G. van Dijck", "...", "et al."],
    venue: "ACM FAccT",
    year: 2026,
    type: "conference",
    url: "https://doi.org/10.1145/3805689.3806436",
  },
  {
    id: 7,
    title: "Missing the Mark: Adoption of Watermarking for Generative AI Systems in Practice and Implications Under the New EU AI Act",
    authors: ["B. Rijsbosch", "G. van Dijck", "K. Kollnig"],
    venue: "Policy & Internet",
    year: 2026,
    type: "journal",
    url: "https://doi.org/10.1002/poi3.70041",
  },
  {
    id: 8,
    title: "SoK: Measuring Compliance With Privacy and Data Protection Laws After the GDPR",
    authors: ["N. Reitinger", "N. Apthorpe", "K. Kollnig", "A. Tamò-Larrieux", "M. Xiao", "S. Egelman", "...", "et al."],
    venue: "Northwestern Law & Econ Research Paper, 26-33",
    year: 2026,
    type: "journal",
    url: "https://doi.org/10.2139/ssrn.7307500",
  },
  {
    id: 9,
    title: "Are Companies Taking AI Risks Seriously? A Systematic Analysis of Companies' AI Risk Disclosures in SEC 10-K forms",
    authors: ["L. Marin", "B. Rijsbosch", "G. Spanakis", "K. Kollnig"],
    venue: "PKDD/ECML Workshops",
    year: 2025,
    type: "conference",
    url: "https://doi.org/10.1007/978-3-032-19096-3_6",
  },
  {
    id: 10,
    title: "Big is Not Bad, but Big AI Might Be: EU Merger Law and the Future of AI Competition",
    authors: ["D. Halil", "K. Kollnig"],
    venue: "SSRN",
    year: 2025,
    type: "preprint",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5942396",
  },
  {
    id: 11,
    title: "Data portability strategies in the EU: Moving beyond individual rights",
    authors: ["Y. Chao", "M. Xu", "A. Tamò-Larrieux", "K. Kollnig"],
    venue: "Computer Law & Security Review",
    year: 2025,
    type: "journal",
    url: "https://doi.org/10.2139/ssrn.5401709",
  },
  {
    id: 12,
    title: "Mind the Competitiveness Gap: Measuring the AI Act's Extraterritorial Reach",
    authors: ["K. Szostak", "G. van Dijck", "K. Kollnig"],
    venue: "Computer Law & Security Review",
    year: 2025,
    type: "journal",
    url: "https://doi.org/10.1016/j.clsr.2026.106357",
  },
  {
    id: 13,
    title: "Regulating pressing systemic risks: But not too soon?",
    authors: ["D. Halil", "K. Kollnig", "A. Tamò-Larrieux"],
    venue: "Internet Policy Review",
    year: 2025,
    type: "journal",
    url: "https://doi.org/10.2139/ssrn.4959049",
  },
  {
    id: 14,
    title: "Legal, Technical, and Social Limitations of Data Portability through Decentralized Applications",
    authors: ["Y. Chao", "M. Xu", "A. Tamò-Larrieux", "K. Garcia", "K. Kollnig"],
    venue: "Solid Symposium 2024",
    year: 2024,
    type: "conference",
  },
]

export const typeLabels: Record<Publication["type"], string> = {
  journal: "Journal Article",
  conference: "Conference Paper",
  report: "Report",
  preprint: "Preprint",
}
