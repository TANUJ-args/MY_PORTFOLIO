import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, ExternalLink, Mail, Phone, MapPin } from "lucide-react";

interface HeroSectionProps {
  contact?: {
    name: string;
    email: string;
    phone?: string;
    location: string;
    githubUrl: string;
    websiteUrl: string;
    bio: string;
  };
}

export default function HeroSection({ contact }: HeroSectionProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">
                  {contact?.name?.split(' ').map(n => n[0]).join('').slice(0, 2) || 'TG'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              {contact?.name || "Margana Tanuj Pavan Sri Ganesh"}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Full-Stack Developer & Computer Science Student
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {contact?.location || "Visakhapatnam, Andhra Pradesh"}
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                {contact?.email || "tanujmargana@gmail.com"}
              </div>
              {contact?.phone && (
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-1" />
                  {contact.phone}
                </div>
              )}
            </div>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            {contact?.bio || "I'm a curious and resourceful Computer Science student and full-stack developer. Beyond building web apps with Node.js, Express, and PostgreSQL, I enjoy working with data structures and algorithms, systems programming in C/C++, scripting in Python, and exploring AI/ML and cloud deployment. I care about writing clean, reliable software and learning by shipping real projects."}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="cursor-pointer"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            
            {contact?.githubUrl && (
              <Button
                variant="outline"
                size="lg"
                asChild
                className="cursor-pointer"
              >
                <a
                  href={contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            )}

            {contact?.websiteUrl && (
              <Button
                variant="outline"
                size="lg"
                asChild
                className="cursor-pointer"
              >
                <a
                  href={contact.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Project
                </a>
              </Button>
            )}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}