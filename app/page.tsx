import Link from "next/link"
import { Mail, Github, BookOpen, Target, Users, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { publications, typeLabels } from "@/lib/publications"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b-8 border-foreground bg-primary relative overflow-hidden">
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute top-12 left-[10%] w-12 h-12 bg-secondary border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            style={{ animation: "float-1 8s ease-in-out infinite" }}
          />
          <div
            className="absolute top-20 right-[15%] w-16 h-10 bg-accent border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            style={{ animation: "float-2 10s ease-in-out infinite" }}
          />
          <div
            className="absolute bottom-16 left-[20%] w-10 h-16 bg-card border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            style={{ animation: "float-3 9s ease-in-out infinite" }}
          />
          <div
            className="absolute bottom-20 right-[25%] w-14 h-14 bg-secondary border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            style={{ animation: "slide-diagonal 7s ease-in-out infinite" }}
          />
          <div
            className="absolute top-1/2 left-[5%] w-8 h-8 bg-accent border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            style={{ animation: "float-1 11s ease-in-out infinite reverse" }}
          />
        </div>

        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <div className="flex items-center gap-6 mb-6">
            <img
              src="/logo.png"
              alt="RegTech4AI logo"
              className="w-20 h-20 md:w-28 md:h-28 flex-shrink-0 border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full bg-white"
            />
            <h1 className="text-5xl md:text-7xl font-black text-foreground">RegTech4AI</h1>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-6">Bringing AI Law into Practice</p>
          <p className="text-lg md:text-xl font-semibold text-foreground max-w-3xl">
            An NGF-funded research initiative making EU AI regulation work in practice through regulatory technology. We
            develop technical methods to implement GDPR and the AI Act, bridging the gap between legal requirements and
            real-world applications.
          </p>
        </div>
      </header>

      <section className="py-12 md:py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-10 h-10 text-foreground" />
            <h2 className="text-3xl md:text-5xl font-black text-foreground">Research Focus</h2>
          </div>

          <div className="max-w-4xl space-y-6">
            <Card className="p-6 border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-card">
              <h3 className="text-xl font-black mb-3 text-foreground">GDPR & AI Act Implementation</h3>
              <p className="text-base font-semibold leading-relaxed">
                Developing practical tools and frameworks to help organizations comply with European data protection and
                AI regulations through automated technical solutions.
              </p>
            </Card>

            <Card className="p-6 border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-card">
              <h3 className="text-xl font-black mb-3 text-foreground">Interdisciplinary Approach</h3>
              <p className="text-base font-semibold leading-relaxed">
                Combining expertise from law, computer science, HCI, and NLP to create RegTech solutions that work at
                the intersection of technology and legal compliance.
              </p>
            </Card>

            <Card className="p-6 border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-card">
              <h3 className="text-xl font-black mb-3 text-foreground">Open Research & Tools</h3>
              <p className="text-base font-semibold leading-relaxed">
                Publishing our findings openly and building accessible tools that help the broader community understand
                and implement AI regulation effectively.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-10 h-10 text-foreground" />
            <h2 className="text-3xl md:text-5xl font-black text-foreground">The Humans</h2>
          </div>
          <p className="text-lg font-bold mb-10 text-foreground max-w-3xl">
            Our team brings together researchers from computer science, law, HCI, and NLP at Maastricht University.
          </p>

          <div className="mb-10">
            <h3 className="text-2xl font-black mb-6 text-foreground">Research Team</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <TeamMember
                name="Konrad Kollnig"
                role="Project Lead & Associate Professor in CS and Law"
                image="/team/konrad.jpg"
              />
              <TeamMember name="Kamil Szostak" role="PhD Student" image="/team/kamil.jpg" />
              <TeamMember name="Bram Rijsbosch" role="PhD Student" image="/team/bram.jpg" />
              <TeamMember
                name="Lucas Giovanni Uberti-Bona Marin"
                role="PhD Student"
                image="/team/lucas.jpg"
              />
              <TeamMember name="Ishitaa Narwane" role="PhD Student" image="/team/ishitaa.jpg" />
              <TeamMember name="Qian Li" role="Postdoc" image="/team/qian.jpg" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black mb-6 text-foreground">Supporting Faculty</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <FacultyMember name="Gijs van Dijck" role="Professor" />
              <FacultyMember name="Johanna T. Gunawan" role="Assistant Professor in CS/HCI/Law" />
              <FacultyMember name="Marta Kołacz" role="Assistant Professor in Law" />
              <FacultyMember name="Jerry Spanakis" role="Assistant Professor in NLP and Law" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-secondary-foreground">Publications</h2>
          <p className="text-lg font-bold mb-8 text-secondary-foreground max-w-3xl">
            Our latest research on AI regulation, data protection, and compliance technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {publications.map((pub) => (
              <Card
                key={pub.id}
                className="h-full p-6 border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all bg-card"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-xs font-black px-3 py-1 bg-primary text-foreground border-2 border-foreground">
                    {typeLabels[pub.type]}
                  </span>
                  <span className="text-xs font-bold text-muted-foreground">{pub.year}</span>
                </div>
                <h3 className="text-lg font-black mb-3 leading-tight text-balance">{pub.title}</h3>
                <p className="text-sm font-semibold mb-3 text-muted-foreground">{pub.authors.join(", ")}</p>
                <p className="text-sm font-bold mb-4 text-foreground">{pub.venue}</p>
                {pub.url && (
                  <Button
                    asChild
                    size="sm"
                    className="mt-auto self-start bg-foreground text-background hover:bg-foreground/90 font-black border-2 border-foreground"
                  >
                    <Link href={pub.url} target="_blank" rel="noopener noreferrer">
                      Read Paper
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                )}
              </Card>
            ))}
          </div>

          <div className="max-w-4xl flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 font-black text-lg border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <Link href="https://regtech4ai.substack.com/" target="_blank" rel="noopener noreferrer">
                <BookOpen className="w-5 h-5 mr-2" />
                Substack
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 font-black text-lg border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <Link href="https://github.com/RegTech4AI" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t-8 border-foreground py-8 bg-accent">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 font-black border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              asChild
            >
              <Link href="mailto:contact@regtech4ai.com">
                <Mail className="w-5 h-5 mr-2" />
                Contact
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 font-black border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              asChild
            >
              <Link href="https://github.com/RegTech4AI" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

function TeamMember({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <Card className="overflow-hidden border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all bg-card">
      <div className="aspect-square relative overflow-hidden bg-muted">
        <img src={image || "/placeholder.svg"} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="p-3 bg-card">
        <h3 className="font-black text-sm mb-1 text-pretty leading-tight">{name}</h3>
        <p className="text-xs font-bold text-muted-foreground">{role}</p>
      </div>
    </Card>
  )
}

function FacultyMember({ name, role }: { name: string; role: string }) {
  return (
    <Card className="p-4 border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-card">
      <h3 className="font-black text-sm mb-1 text-pretty leading-tight">{name}</h3>
      <p className="text-xs font-bold text-muted-foreground">{role}</p>
    </Card>
  )
}
