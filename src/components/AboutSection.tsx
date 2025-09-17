import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Database, Globe, Lightbulb } from "lucide-react";

interface AboutSectionProps {
  contact?: {
    bio: string;
  };
}

export default function AboutSection({ contact }: AboutSectionProps) {
  const highlights = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Algorithms & Data Structures",
      description:
        "Strong foundation in problem solving with data structures and algorithms; write efficient, readable solutions and reason about complexity.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Systems Programming", 
      description:
        "Hands-on with C/C++ and Python for building utilities, understanding memory and runtime behavior, and writing reliable CLI tools.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "AI/ML & Cloud",
      description:
        "Exploring applied machine learning workflows and deploying projects to the cloud with a focus on reliability and performance.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Full-Stack Development",
      description:
        "Build complete web apps end-to-end: REST APIs, secure auth, and responsive UIs using Node.js, Express, PostgreSQL, and modern frontend tools.",
    }
  ];

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
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {"As a Computer Science student, I work across the stack and beyond web development: building REST APIs, writing systems programs in C/C++, scripting in Python, practicing data structures and algorithms, and exploring AI/ML and cloud deployment. I care about clean, reliable software and learning by shipping real projects."}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4 text-primary">
                    {highlight.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}