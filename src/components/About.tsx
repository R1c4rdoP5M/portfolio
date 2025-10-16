import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, BookOpen } from "lucide-react";

const About = () => {
  const academics = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Bachelor's Degree",
      institution: "University of Debrecen",
      period: "2023 - 2026",
      description: "Computer Science major with focus on web development and software engineering",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Coding Bootcamp",
      institution: "Epam",
      period: "2024",
      description: "Intensive Java development program focusing on modern frameworks",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Certifications",
      institution: "Nvidia, Certiport, Microsoft Azure",
      period: "2024 - 2025",
      description: "Professional certifications in AI, cloud computing, and enterprise technologies",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey in technology and education
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4">My Story</h3>
            <p className="text-muted-foreground">
              I discovered my passion for coding during my first year at university. What started as curiosity
              quickly turned into a dedication to mastering web development and creating meaningful digital experiences.
            </p>
            <p className="text-muted-foreground">
              Throughout my academic journey, I've balanced theoretical knowledge with practical application,
              working on various projects that challenged me to think creatively and solve complex problems.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4">Quick Facts</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">▸</span>
                <span>3+ years of coding experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">▸</span>
                <span>10+ completed projects</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">▸</span>
                <span>Active open-source contributor</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">▸</span>
                <span>Always learning new technologies</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {academics.map((item, index) => (
            <Card key={index} className="card-glow border-border bg-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-primary mb-1">{item.institution}</p>
                <p className="text-xs text-muted-foreground mb-3">{item.period}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
