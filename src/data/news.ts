export interface NewsItem {
  id: number;
  date: string;
  title: string;
  description?: string;
  link?: string;
  linkText?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    date: "August 2025",
    title: "New Paper: Are Companies Taking AI Risks Seriously?",
    description: "Lucas Uberti-Bona Marin, Bram Rijsbosch, Jerry Spanakis, and Konrad Kollnig present the first large-scale analysis of AI risk disclosures in SEC 10-K filings, examining over 30,000 filings from 7,000+ companies. To be published at ECML PKDD SoGood workshop.",
    link: "https://arxiv.org/abs/2508.19313",
    linkText: "Read the paper"
  },
  {
    id: 2,
    date: "May 2025",
    title: "Euractiv Panel: The AI-driven Future of the EU",
    description: "Konrad Kollnig speaks at Euractiv's panel on 'Transforming Compliance with Regulatory Technologies' discussing how RegTech can help implement EU AI regulation.",
    link: "https://www.euractiv.com/video/the-ai-driven-future-of-the-eu-transforming-compliance-with-regulatory-technologies-media-partnership/",
    linkText: "Watch the video"
  },
  {
    id: 3,
    date: "March 2025",
    title: "New Paper: AI Watermarking under the EU AI Act",
    description: "Bram Rijsbosch, Gijs van Dijck, and Konrad Kollnig analyse the adoption of watermarking for generative AI systems and its implications under the EU AI Act. The study finds only 38% of AI image generators implement adequate watermarking.",
    link: "https://arxiv.org/abs/2503.18156",
    linkText: "Read the paper"
  },
  {
    id: 4,
    date: "November 2024",
    title: "First RegTech4AI Hackathon",
    description: "We ran the first RegTech4AI hackathon, working on building legal data infrastructure with a team of 8 researchers.",
  },
  {
    id: 5,
    date: "October 2024",
    title: "Kamil and Lucas Join the Team",
    description: "Kamil brings deep understanding of law and tech, with advanced degrees in both subjects. Lucas brings cutting-edge data science and AI expertise.",
  },
  {
    id: 6,
    date: "September 2024",
    title: "Bram Joins from Dutch Ministry",
    description: "Bram has joined as a PhD student from the Dutch Ministry of Economic Affairs, where he worked on the AI Act.",
  },
  {
    id: 7,
    date: "August 2024",
    title: "Project Officially Starts",
    description: "The project has officially started with a talk by Siddhartha Datta (Oxford) on rethinking content moderation.",
    link: "https://regtech4ai.substack.com/p/talk-using-ai-to-rethink-platform",
    linkText: "Read about the talk"
  },
  {
    id: 8,
    date: "April 2024",
    title: "Interview with Maastricht Law Faculty",
    description: "Talked to Maastricht Law Faculty about bridging theory and practice in AI regulation.",
    link: "https://www.maastrichtuniversity.nl/news/regtech4ai-bridging-theory-and-practice-ai-regulation",
    linkText: "Read the interview"
  },
  {
    id: 9,
    date: "March 2024",
    title: "Project Awarded",
    description: "RegTech4AI has been awarded funding through the AiNed Fellowship Grants programme for retaining AI talent in the Netherlands.",
    link: "http://ained.nl/en/vijf-nieuwe-toekenningen-ained-fellowship-grants-voor-behoud-ai-talent-voor-nederland/",
    linkText: "View press release"
  }
];
