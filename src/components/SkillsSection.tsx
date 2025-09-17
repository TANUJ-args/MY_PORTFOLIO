import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface Skill {
  _id: string;
  name: string;
  category: string;
  proficiency: number;
}

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const categories = {
    frontend: { title: "Frontend", icon: "🎨" },
    backend: { title: "Backend", icon: "⚙️" },
    database: { title: "Database", icon: "🗄️" },
    tools: { title: "Tools & Others", icon: "🛠️" },
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build modern web applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {Object.entries(categories).map(([categoryKey, categoryInfo]) => {
            const categorySkills = groupedSkills[categoryKey] || [];
            
            return (
              <motion.div key={categoryKey} variants={itemVariants}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="text-3xl mb-2">{categoryInfo.icon}</div>
                    <CardTitle className="text-lg">{categoryInfo.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {categorySkills.map((skill) => (
                      <div key={skill._id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {skill.proficiency}/5
                          </Badge>
                        </div>
                        <Progress 
                          value={(skill.proficiency / 5) * 100} 
                          className="h-2"
                        />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
