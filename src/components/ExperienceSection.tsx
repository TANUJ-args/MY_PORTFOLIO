import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

interface Experience {
  _id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my development skills.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((experience, index) => (
            <motion.div key={experience._id} variants={itemVariants}>
              <Card className="relative overflow-hidden">
                {/* Timeline indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                
                <CardHeader className="pl-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl mb-1">{experience.title}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-primary">
                        {experience.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end space-y-1 mt-2 md:mt-0">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {experience.startDate} - {experience.endDate || "Present"}
                      </div>
                      {experience.location && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {experience.location}
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pl-8 space-y-4">
                  <p className="text-muted-foreground">{experience.description}</p>
                  
                  {experience.responsibilities.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {experience.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start text-sm text-muted-foreground">
                            <span className="text-primary mr-2 mt-1">•</span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {experience.technologies.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
