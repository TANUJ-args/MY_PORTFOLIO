import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award } from "lucide-react";

interface Education {
  _id: string;
  degree: string;
  institution: string;
  location?: string;
  startYear: string;
  endYear?: string;
  gpa?: string;
  description?: string;
}

interface Certification {
  _id: string;
  name: string;
  issuer: string;
  date: string;
  description?: string;
  credentialUrl?: string;
}

interface EducationSectionProps {
  education: Education[];
  certifications: Certification[];
}

export default function EducationSection({ education, certifications }: EducationSectionProps) {
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
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications that support my technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <motion.div key={edu._id} variants={itemVariants}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <CardDescription className="text-base font-semibold text-primary">
                        {edu.institution}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.startYear} - {edu.endYear || "Present"}
                      </div>
                      {edu.location && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {edu.location}
                        </div>
                      )}
                      {edu.gpa && (
                        <div className="flex items-center">
                          <Badge variant="secondary">CGPA: {edu.gpa}</Badge>
                        </div>
                      )}
                      {edu.description && (
                        <p className="text-sm text-muted-foreground mt-2">
                          {edu.description}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-primary" />
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert) => (
                <motion.div key={cert._id} variants={itemVariants}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{cert.name}</CardTitle>
                      <CardDescription className="text-base font-semibold text-primary">
                        {cert.issuer}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {cert.date}
                      </div>
                      {cert.description && (
                        <p className="text-sm text-muted-foreground">
                          {cert.description}
                        </p>
                      )}
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          View Credential →
                        </a>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
