import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Connect4 Game",
      description: "Interactive Connect 4 game implementation with game logic and player vs player functionality",
      technologies: ["JavaScript", "HTML", "CSS", "Game Logic"],
      github: "https://github.com/R1c4rdoP5M/Connect4Game",
      demo: "https://github.com/R1c4rdoP5M/Connect4Game",
    },
    {
      title: "Megafone",
      description: "Mobile agency project showcasing modern mobile-first design and development practices",
      technologies: ["Web Development", "Responsive Design", "Mobile-First"],
      github: "https://github.com/R1c4rdoP5M/Megafone",
      demo: "https://github.com/R1c4rdoP5M/Megafone",
    },
    {
      title: "Flip Card",
      description: "Interactive flip card animation demonstrating CSS transforms and transitions",
      technologies: ["HTML", "CSS", "JavaScript", "Animations"],
      github: "https://github.com/R1c4rdoP5M/flip-card.github.io",
      demo: "https://github.com/R1c4rdoP5M/flip-card.github.io",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of my recent work and coding adventures
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="card-glow border-border bg-card hover:border-primary/50 transition-all">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
