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
    title: "Can the GPC standard eliminate consent banners in the EU?",
    authors: ["S. Zimmeck", "H. Pandit", "F. Borgesius", "C. Santos", "K. Kollnig", "R. Berjon"],
    venue: "arXiv",
    year: 2026,
    type: "preprint",
    url: "https://doi.org/10.48550/arXiv.2512.08856",
  },
  {
    id: 2,
    title: "Exploring the \"Banality\" of Deception in Generative AI",
    authors: ["I. Narwane", "J. Gunawan", "K. Kollnig"],
    venue: "arXiv",
    year: 2026,
    type: "preprint",
    url: "https://doi.org/10.48550/arXiv.2605.07012",
  },
  {
    id: 3,
    title: "Is your AI Model Accurate Enough? The Difficult Choices Behind Rigorous AI Development and the EU AI Act",
    authors: ["L. Uberti-Bona Marin", "B. Rijsbosch", "K. Meding", "G. Spanakis", "G. van Dijck", "...", "et al."],
    venue: "ACM FAccT",
    year: 2026,
    type: "conference",
    url: "https://doi.org/10.1145/3805689.3806436",
  },
  {
    id: 4,
    title: "Missing the Mark: Adoption of Watermarking for Generative AI Systems in Practice and Implications Under the New EU AI Act",
    authors: ["B. Rijsbosch", "G. van Dijck", "K. Kollnig"],
    venue: "Policy & Internet",
    year: 2026,
    type: "journal",
    url: "https://doi.org/10.1002/poi3.70041",
  },
  {
    id: 5,
    title: "Abuse of Relative Dominance by Digital Platforms: A Law and Economics Perspective",
    authors: ["Q. Li", "C. Cauffman"],
    venue: "GRUR International",
    year: 2025,
    type: "journal",
    url: "https://academic.oup.com/grurint/article/74/3/217/7989429",
  },
  {
    id: 6,
    title: "Are Companies Taking AI Risks Seriously? A Systematic Analysis of Companies' AI Risk Disclosures in SEC 10-K forms",
    authors: ["L. Marin", "B. Rijsbosch", "G. Spanakis", "K. Kollnig"],
    venue: "PKDD/ECML Workshops",
    year: 2025,
    type: "conference",
    url: "https://doi.org/10.1007/978-3-032-19096-3_6",
  },
  {
    id: 7,
    title: "Data portability strategies in the EU: Moving beyond individual rights",
    authors: ["Y. Chao", "M. Xu", "A. Tamo-Larrieux", "K. Kollnig"],
    venue: "Computer Law & Security Review",
    year: 2025,
    type: "journal",
    url: "https://doi.org/10.2139/ssrn.5401709",
  },
  {
    id: 8,
    title: "Excessive Data Collection and (Mis)use of Data: A Comparative Law and Economics Study on the Chinese Didi Case and the German Facebook Case",
    authors: ["Q. Li"],
    venue: "The Chinese Journal of Comparative Law",
    year: 2025,
    type: "journal",
    url: "https://academic.oup.com/cjcl/article/doi/10.1093/cjcl/cxae018/7950806",
  },
  {
    id: 9,
    title: "Mind the Competitiveness Gap: Measuring the AI Act's Extraterritorial Reach",
    authors: ["K. Szostak", "G. van Dijck", "K. Kollnig"],
    venue: "Computer Law & Security Review",
    year: 2025,
    type: "journal",
    url: "https://doi.org/10.1016/j.clsr.2026.106357",
  },
  {
    id: 10,
    title: "The Economics of AI-enabled Price Discrimination",
    authors: ["Q. Li"],
    venue: "Economic analysis of law in European legal scholarship",
    year: 2025,
    type: "journal",
    url: "https://doi.org/10.1007/978-3-031-84790-5_1",
  },
  {
    id: 11,
    title: "Legal, Technical, and Social Limitations of Data Portability through Decentralized Applications",
    authors: ["Y. Chao", "M. Xu", "A. Tamò-Larrieux", "K. Garcia", "K. Kollnig"],
    venue: "Solid Symposium (SoSy)",
    year: 2024,
    type: "conference",
    url: "https://ceur-ws.org/Vol-3947/short12.pdf",
  },
]

export const typeLabels: Record<Publication["type"], string> = {
  journal: "Journal Article",
  conference: "Conference Paper",
  report: "Report",
  preprint: "Preprint",
}
