export interface Publication {
  id: number
  title: string
  authors: string[]
  venue: string
  year: number
  month?: string
  type: "journal" | "conference" | "report" | "preprint"
  abstract?: string
  doi?: string
  url?: string
  pdf?: string
  tags?: string[]
}

export const publications: Publication[] = [
  {
    id: 1,
    title:
      "Are Companies Taking AI Risks Seriously? A Systematic Analysis of Companies' AI Risk Disclosures in SEC 10-K forms",
    authors: ["Lucas G. Uberti-Bona Marin", "Bram Rijsbosch", "Gerasimos Spanakis", "Konrad Kollnig"],
    venue: "ECML PKDD SoGood (Data Science for Social Good) Workshop",
    year: 2025,
    month: "August",
    type: "conference",
    abstract:
      "This study presents the first large-scale systematic analysis of AI risk disclosures in SEC 10-K filings. We analyse over 30,000 filings from more than 7,000 companies over the past five years. Our findings reveal a sharp increase in companies mentioning AI risk, up from 4% in 2020 to over 43% in 2024. While legal and competitive AI risks are most frequently mentioned, many disclosures remain generic or lack details on mitigation strategies.",
    url: "https://arxiv.org/abs/2508.19313",
    tags: ["AI Act", "Risk Disclosure", "SEC", "Compliance"],
  },
  {
    id: 2,
    title: "Adoption of Watermarking for Generative AI Systems in Practice and Implications under the new EU AI Act",
    authors: ["Bram Rijsbosch", "Gijs van Dijck", "Konrad Kollnig"],
    venue: "arXiv preprint",
    year: 2025,
    month: "March",
    type: "preprint",
    abstract:
      "Watermarking has emerged as a primary mechanism to address the risks posed by AI-generated content and is now becoming a legal requirement under the EU AI Act. This paper provides both an empirical and legal analysis of watermarking measures. We find that only a minority of AI image generators currently implement adequate watermarking (38%) and deep fake labelling (18%) practices.",
    url: "https://arxiv.org/abs/2503.18156",
    tags: ["AI Act", "Watermarking", "Generative AI", "Deep Fakes"],
  },
  {
    id: 3,
    title: "Abuse of Relative Dominance by Digital Platforms: A Law and Economics Perspective",
    authors: ["Qian Li", "Caroline Cauffman"],
    venue: "GRUR International",
    year: 2025,
    month: "March",
    type: "journal",
    abstract:
      "This paper examines how digital platforms with significant market power can impose unfair trading terms on business partners. It discusses the challenges in proving dominance under Article 102 of the Treaty on the Functioning of the European Union (TFEU) due to the multi-sided nature of platforms and their innovative business models.",
    doi: "10.1093/grurint/ikaf001",
    url: "https://academic.oup.com/grurint/article/74/3/217/7989429",
    tags: ["Competition Law", "Digital Platforms", "Market Dominance", "EU Law"],
  },
  {
    id: 4,
    title:
      "Excessive Data Collection and (Mis)use of Data: A Comparative Law and Economics Study on the Chinese Didi Case and the German Facebook Case",
    authors: ["Qian Li"],
    venue: "The Chinese Journal of Comparative Law",
    year: 2025,
    month: "January",
    type: "journal",
    abstract:
      "This study examines the coexistence of market dominance and information asymmetry resulting from excessive data collection and misuse in digital markets. It analyzes the Chinese Didi case and the German Facebook case to evaluate different legal approaches, highlighting concerns in both competition law and data protection law.",
    doi: "10.1093/cjcl/cxae018",
    url: "https://academic.oup.com/cjcl/article/doi/10.1093/cjcl/cxae018/7950806",
    tags: ["Data Protection", "Competition Law", "Comparative Law", "Digital Markets"],
  },
  {
    id: 5,
    title: "Regulating Pressing Systemic Risks – But Not Too Soon?",
    authors: ["Defne Halil", "Konrad Kollnig", "Aurelia Tamò-Larrieux"],
    venue: "Internet Policy Review",
    year: 2025,
    month: "June",
    type: "journal",
    abstract:
      "This paper analyzes the data access provisions of the EU's Digital Services Act (DSA) and presents the results of 27 data access requests across EU member states. The findings indicate delays and challenges in obtaining meaningful data for research, emphasizing the need for timely access to address systemic risks on online platforms.",
    doi: "10.14763/2025.2.2010",
    url: "https://policyreview.info/articles/analysis/regulating-pressing-systemic-risks",
    tags: ["Digital Services Act", "Data Access", "Systemic Risk", "Platform Governance"],
  },
  {
    id: 6,
    title: "Can the GPC Standard Eliminate Consent Banners in the EU?",
    authors: [
      "Sebastian Zimmeck",
      "Harshvardhan J. Pandit",
      "Frederik Zuiderveen Borgesius",
      "Cristiana Teixeira Santos",
      "Konrad Kollnig",
      "Robin Berjon",
    ],
    venue: "arXiv preprint",
    year: 2025,
    month: "December",
    type: "preprint",
    abstract:
      "This paper explores whether the Global Privacy Control (GPC) standard can be adapted to the EU legal framework to mitigate consent fatigue caused by ubiquitous consent banners. It analyzes GPC as a technical specification and examines its compatibility with EU data protection laws, identifying areas of friction and proposing resolutions to align GPC with EU requirements.",
    url: "https://arxiv.org/abs/2512.08856",
    tags: ["Privacy", "GDPR", "Consent", "GPC"],
  },
  {
    id: 7,
    title: "Every Keystroke You Make: A Tech-Law Measurement and Analysis of Event Listeners for Wiretapping",
    authors: ["Shaoor Munir", "Nurullah Demir", "Qian Li", "Konrad Kollnig", "Zubair Shafiq"],
    venue: "arXiv preprint",
    year: 2025,
    month: "August",
    type: "preprint",
    abstract:
      "This study investigates the use of JavaScript event listeners by third-party trackers for real-time keystroke interception on websites. It conducts a tech-law analysis mapping U.S. wiretapping laws to web tracking, finding that 38.52% of websites install third-party event listeners to intercept keystrokes, with at least 3.18% transmitting intercepted information to third-party servers.",
    url: "https://arxiv.org/abs/2508.19825",
    tags: ["Privacy", "Web Tracking", "Wiretapping", "Cybersecurity"],
  },
  {
    id: 8,
    title: "Data Portability Strategies in the EU: Moving Beyond Individual Rights",
    authors: ["Yongle Chao", "Meihe Xu", "Aurelia Tamò-Larrieux", "Konrad Kollnig"],
    venue: "Computer Law & Security Review",
    year: 2025,
    month: "April",
    type: "journal",
    abstract:
      "Data portability has traditionally been considered an individual right to enhance data subjects' control over their personal data under the GDPR. This paper argues that the concept of data portability has evolved beyond its original scope of protecting individual rights, toward better access and flow for multiple stakeholders. We analyze the evolution of data portability as an important novel policy instrument in EU legislation, and contend that data interoperability is both a technical issue and a political concern.",
    doi: "10.1016/j.clsr.2025.106135",
    url: "https://www.sciencedirect.com/science/article/pii/S2212473X25000082",
    tags: ["Data Portability", "GDPR", "Data Governance", "Interoperability"],
  },
]

export const typeLabels: Record<Publication["type"], string> = {
  journal: "Journal Article",
  conference: "Conference Paper",
  report: "Report",
  preprint: "Preprint",
}
