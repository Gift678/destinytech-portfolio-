
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageSrc?: string;
};

const projects: Project[] = [
  {
    title: "Network Monitoring Dashboard",
    description: "A real-time network monitoring system built with Python and Flask, providing insights into network performance and alerting for potential issues.",
    technologies: ["Python", "Flask", "SNMP", "JavaScript", "Chart.js"],
    githubUrl: "#",
  },
  {
    title: "Smart Home Automation",
    description: "IoT project that connects various home devices to a central system for automated control and monitoring, using Raspberry Pi as the main controller.",
    technologies: ["Python", "Raspberry Pi", "MQTT", "React", "Node.js"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Network Topology Mapper",
    description: "Automated tool to discover and map network devices and connections, generating visual representations of complex network infrastructures.",
    technologies: ["Python", "NetworkX", "D3.js", "Packet Tracer Integration"],
    githubUrl: "#",
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className={`slide-up-animation slide-up-delay-${index}`}>
              <CardContent className="p-6 pt-8">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3 px-6 pb-6">
                {project.githubUrl && (
                  <Button size="sm" variant="outline" asChild className="flex items-center gap-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button size="sm" asChild className="flex items-center gap-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
