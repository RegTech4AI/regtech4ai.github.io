export interface TeamMember {
  id: number;
  name: string;
  role: string;
  institution: string;
  imageUrl?: string;
  bio?: string;
  category: 'Lead' | 'Researcher' | 'Advisor';
  links?: {
    website?: string;
    linkedin?: string;
    twitter?: string;
    scholar?: string;
  };
}

export const teamMembers: TeamMember[] = [
  // Project Lead
  {
    id: 1,
    name: "Dr. Konrad Kollnig",
    role: "Project Lead, Assistant Professor CS/Law",
    institution: "Maastricht University",
    imageUrl: "/team/konrad.jpg",
    category: "Lead"
  },

  // PhD Students & Researchers
  {
    id: 2,
    name: "Kamil Szostak",
    role: "PhD Student",
    institution: "Maastricht University",
    imageUrl: "/team/kamil.jpg",
    category: "Researcher"
  },
  {
    id: 3,
    name: "Bram Rijsbosch",
    role: "PhD Student",
    institution: "Maastricht University",
    imageUrl: "/team/bram.jpg",
    category: "Researcher"
  },
  {
    id: 4,
    name: "Lucas Giovanni Uberti-Bona Marin",
    role: "PhD Student",
    institution: "Maastricht University",
    imageUrl: "/team/lucas.jpg",
    category: "Researcher"
  },
  {
    id: 5,
    name: "Ishitaa Narwane",
    role: "PhD Student",
    institution: "Maastricht University",
    imageUrl: "/team/ishitaa.jpg",
    category: "Researcher"
  },
  {
    id: 6,
    name: "Dr. Qian Li",
    role: "Postdoctoral Researcher",
    institution: "Maastricht University",
    imageUrl: "/team/qian.jpg",
    category: "Researcher"
  },

  // Advisors from Law & Tech Lab
  {
    id: 7,
    name: "Prof. Gijs van Dijck",
    role: "Professor of Private Law",
    institution: "Maastricht University",
    imageUrl: "/team/gijs.jpg",
    category: "Advisor"
  },
  {
    id: 8,
    name: "Dr. Johanna T. Gunawan",
    role: "Assistant Professor in CS/HCI/Law",
    institution: "Maastricht University",
    imageUrl: "/team/johanna.jpg",
    category: "Advisor"
  },
  {
    id: 9,
    name: "Dr. Marta Kołacz",
    role: "Assistant Professor in Law",
    institution: "Maastricht University",
    imageUrl: "/team/marta.jpg",
    category: "Advisor"
  },
  {
    id: 10,
    name: "Dr. Jerry Spanakis",
    role: "Assistant Professor in NLP and Law",
    institution: "Maastricht University",
    imageUrl: "/team/jerry.jpg",
    category: "Advisor"
  }
];

// Category display order and labels
export const categoryLabels: Record<TeamMember['category'], string> = {
  Lead: 'Project Leadership',
  Researcher: 'Research Team',
  Advisor: 'Law & Tech Lab Advisors'
};
