import { motion } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import PortfolioNavbar from "@/components/PortfolioNavbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import FooterSection from "@/components/FooterSection";
import { Loader2 } from "lucide-react";
import AchievementsSection from "@/components/AchievementsSection";

export default function Landing() {
  const contact = useQuery(api.portfolio.getContact);
  const projects = useQuery(api.portfolio.getProjects);
  const skills = useQuery(api.portfolio.getSkills);
  const experiences = useQuery(api.portfolio.getExperiences);
  const education = useQuery(api.portfolio.getEducation);
  const certifications = useQuery(api.portfolio.getCertifications);
  const achievements = useQuery(api.portfolio.getAchievements);

  const isLoading = contact === undefined || projects === undefined || skills === undefined || 
                   experiences === undefined || education === undefined || certifications === undefined || achievements === undefined;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <PortfolioNavbar contact={contact || undefined} />
      
      <main>
        <HeroSection contact={contact || undefined} />
        <AboutSection contact={contact || undefined} />
        <AchievementsSection achievements={achievements || []} />
        <ExperienceSection experiences={experiences || []} />
        <ProjectsSection projects={projects || []} />
        <SkillsSection skills={skills || []} />
        <EducationSection 
          education={education || []} 
          certifications={certifications || []} 
        />
      </main>

      <FooterSection contact={contact || undefined} />
    </motion.div>
  );
}