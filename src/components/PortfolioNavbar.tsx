import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";

interface PortfolioNavbarProps {
  contact?: {
    githubUrl: string;
    websiteUrl: string;
  };
}

export default function PortfolioNavbar({ contact }: PortfolioNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Achievements", id: "achievements" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Education", id: "education" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <img
              src="./logo.svg"
              alt="Portfolio Logo"
              width={32}
              height={32}
              className="rounded-lg mr-2"
            />
            <span className="font-bold text-lg tracking-tight">Tanuj</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* External Links */}
          <div className="hidden md:flex items-center space-x-4">
            {contact?.githubUrl && (
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="cursor-pointer"
              >
                <a
                  href={contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            )}
            {contact?.websiteUrl && (
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="cursor-pointer"
              >
                <a
                  href={contact.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-background/95 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left justify-start cursor-pointer"
                >
                  {item.label}
                </Button>
              ))}
              <div className="flex space-x-2 pt-2">
                {contact?.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="cursor-pointer"
                  >
                    <a
                      href={contact.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                )}
                {contact?.websiteUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="cursor-pointer"
                  >
                    <a
                      href={contact.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Website
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}