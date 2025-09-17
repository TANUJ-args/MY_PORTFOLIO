import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, ExternalLink, Mail, Phone, MapPin, Heart } from "lucide-react";

interface FooterSectionProps {
  contact?: {
    name: string;
    email: string;
    phone?: string;
    location: string;
    githubUrl: string;
    websiteUrl: string;
  };
}

export default function FooterSection({ contact }: FooterSectionProps) {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                <a 
                  href={`mailto:${contact?.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {contact?.email}
                </a>
              </div>
              {contact?.phone && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  <a 
                    href={`tel:${contact.phone}`}
                    className="hover:text-primary transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              )}
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                {contact?.location}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Education'].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  size="sm"
                  className="justify-start p-0 h-auto text-sm text-muted-foreground hover:text-primary cursor-pointer"
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {contact?.githubUrl && (
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="cursor-pointer"
                >
                  <a
                    href={contact.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {contact?.websiteUrl && (
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="cursor-pointer"
                >
                  <a
                    href={contact.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
              <Button
                variant="outline"
                size="icon"
                asChild
                className="cursor-pointer"
              >
                <a
                  href={`mailto:${contact?.email}`}
                >
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t mt-8 pt-8 text-center"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by {contact?.name || "Tanuj"}
            <span className="mx-2">•</span>
            © {new Date().getFullYear()} All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
