import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Database, Globe, Smartphone, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      skills: ["Java", "Python", "C", "C#", "REST APIs"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "Firebase", "MySQL", "Redis"],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "PWA"],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design",
      skills: ["Figma", "UI/UX", "Adobe XD", "Prototyping", "Design Systems"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Agile/Scrum"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-glow border-border bg-card">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
