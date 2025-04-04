
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type Skill = {
  name: string;
  proficiency: number;
  category: 'programming' | 'networking' | 'tools';
};

const skills: Skill[] = [
  { name: 'Python', proficiency: 85, category: 'programming' },
  { name: 'HTML/CSS', proficiency: 80, category: 'programming' },
  { name: 'JavaScript', proficiency: 70, category: 'programming' },
  { name: 'Packet Tracer', proficiency: 90, category: 'networking' },
  { name: 'Network Fundamentals', proficiency: 85, category: 'networking' },
  { name: 'Network Protocols', proficiency: 75, category: 'networking' },
  { name: 'Git', proficiency: 70, category: 'tools' },
  { name: 'Linux', proficiency: 65, category: 'tools' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="slide-up-animation">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Programming Languages</h3>
              
              <div className="space-y-6">
                {skills
                  .filter(skill => skill.category === 'programming')
                  .map((skill, index) => (
                    <div key={skill.name} className={cn("slide-up-animation", `slide-up-delay-${index}`)}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.proficiency}%</span>
                      </div>
                      <Progress value={skill.proficiency} className="h-2" />
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          <Card className="slide-up-animation slide-up-delay-1">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Networking</h3>
              
              <div className="space-y-6">
                {skills
                  .filter(skill => skill.category === 'networking')
                  .map((skill, index) => (
                    <div key={skill.name} className={cn("slide-up-animation", `slide-up-delay-${index + 2}`)}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.proficiency}%</span>
                      </div>
                      <Progress value={skill.proficiency} className="h-2" />
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          <Card className="slide-up-animation slide-up-delay-2 md:col-span-2">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Tools & Technologies</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills
                  .filter(skill => skill.category === 'tools')
                  .map((skill, index) => (
                    <div key={skill.name} className={cn("slide-up-animation", `slide-up-delay-${index + 4}`)}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.proficiency}%</span>
                      </div>
                      <Progress value={skill.proficiency} className="h-2" />
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
