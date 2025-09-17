import { mutation } from "./_generated/server";

export const seedPortfolioData = mutation({
  args: {},
  handler: async (ctx) => {
    // Clear existing data
    // Clear contact
    const existingContact = await ctx.db.query("contact").first();
    if (existingContact) {
      await ctx.db.delete(existingContact._id);
    }

    // Clear other portfolio tables to avoid duplicates on reseed
    const tablesToClear = [
      "projects",
      "skills",
      "experiences",
      "education",
      "certifications",
      "achievements",
    ] as const;

    for (const table of tablesToClear) {
      const rows = await ctx.db.query(table).collect();
      for (const row of rows) {
        await ctx.db.delete(row._id);
      }
    }

    // Seed contact info (update website to Smile Hub Pro live link)
    await ctx.db.insert("contact", {
      name: "Margana Tanuj Pavan Sri Ganesh",
      email: "tanujmargana@gmail.com", 
      phone: "7013006292",
      location: "Visakhapatnam, Andhra Pradesh",
      githubUrl: "https://github.com/TANUJ-args",
      websiteUrl: "https://smilehub-pro-frontend.onrender.com/", // updated to Smile Hub Pro
      bio: "I'm a curious and resourceful Computer Science student and full‑stack developer. Beyond building web apps with Node.js, Express, and PostgreSQL, I enjoy working with data structures and algorithms, systems programming in C/C++, scripting in Python, and exploring AI/ML and cloud deployment. I care about writing clean, reliable software and learning by shipping real projects.",
    });

    // Seed projects (added Smile Hub Pro and Global Tide Tracker, reordered)
    await ctx.db.insert("projects", {
      title: "Smile Hub Pro - Dental Patient Management System",
      description: "An upgraded version of Smile Hub with improved UX, performance, and deployment pipeline.",
      technologies: ["Node.js", "Express.js", "PostgreSQL", "React", "TypeScript", "TailwindCSS"],
      features: [
        "Enhanced appointment and records workflow",
        "Optimized backend with better error handling",
        "Refined UI/UX and accessibility improvements",
      ],
      liveUrl: "https://smilehub-pro-frontend.onrender.com/",
      githubUrl: "https://github.com/TANUJ-args",
      featured: true,
      order: 1,
    });

    await ctx.db.insert("projects", {
      title: "Smile Hub - Dental Patient Management System",
      description: "A comprehensive dental patient management system with a modern tech stack",
      technologies: ["Node.js", "Express.js", "PostgreSQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
      features: [
        "Developed a full-stack web application for dental professionals to manage patient records securely",
        "Engineered a RESTful API backend with complete CRUD functionality",
        "Implemented robust user authentication with password hashing and session management",
        "Built dynamic, responsive frontend using Vanilla JavaScript and Bootstrap",
        "Successfully deployed the application to the cloud (Render)"
      ],
      liveUrl: "https://smile-hub.onrender.com/",
      githubUrl: "https://github.com/TANUJ-args",
      featured: true,
      order: 2,
    });

    await ctx.db.insert("projects", {
      title: "Global Tide Tracker",
      description: "A web app to visualize global tide and ocean data in real time.",
      technologies: ["JavaScript", "HTML", "CSS", "APIs"],
      features: [
        "Displays tide data for multiple coastal locations worldwide",
        "Interactive charts and clean visualization",
        "Deployed as a fast static site"
      ],
      liveUrl: "https://global-tide-tracker-bsqr.onrender.com/",
      githubUrl: "https://github.com/TANUJ-args",
      featured: false,
      order: 3,
    });

    await ctx.db.insert("projects", {
      title: "Tip Calculator",
      description: "A responsive calculator supporting custom tip rates and split calculations",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Built a responsive calculator supporting custom tip rates and split calculations"
      ],
      githubUrl: "https://github.com/TANUJ-args",
      featured: false,
      order: 4,
    });

    await ctx.db.insert("projects", {
      title: "Speech-to-Text and Text-to-Speech",
      description: "Implemented browser-based speech recognition and synthesis to improve web accessibility",
      technologies: ["HTML", "CSS", "JavaScript", "Web Speech API"],
      features: [
        "Implemented browser-based speech recognition and synthesis to improve web accessibility"
      ],
      githubUrl: "https://github.com/TANUJ-args",
      featured: false,
      order: 5,
    });

    // Seed skills
    const frontendSkills = [
      { name: "JavaScript", proficiency: 4 },
      { name: "HTML", proficiency: 5 },
      { name: "CSS", proficiency: 4 },
      { name: "Bootstrap", proficiency: 4 },
      { name: "React", proficiency: 3 },
    ];

    const backendSkills = [
      { name: "Node.js", proficiency: 4 },
      { name: "Express.js", proficiency: 4 },
      { name: "C", proficiency: 4 },
      { name: "C++", proficiency: 3 },
      { name: "Python", proficiency: 4 },
    ];

    const databaseSkills = [
      { name: "PostgreSQL", proficiency: 4 },
      { name: "SQL", proficiency: 4 },
    ];

    const toolSkills = [
      { name: "Java", proficiency: 3 },
      { name: "SQLite", proficiency: 3 },
    ];

    let order = 1;
    for (const skill of frontendSkills) {
      await ctx.db.insert("skills", {
        name: skill.name,
        category: "frontend",
        proficiency: skill.proficiency,
        order: order++,
      });
    }

    for (const skill of backendSkills) {
      await ctx.db.insert("skills", {
        name: skill.name,
        category: "backend",
        proficiency: skill.proficiency,
        order: order++,
      });
    }

    for (const skill of databaseSkills) {
      await ctx.db.insert("skills", {
        name: skill.name,
        category: "database",
        proficiency: skill.proficiency,
        order: order++,
      });
    }

    for (const skill of toolSkills) {
      await ctx.db.insert("skills", {
        name: skill.name,
        category: "tools",
        proficiency: skill.proficiency,
        order: order++,
      });
    }

    // Seed experience
    await ctx.db.insert("experiences", {
      title: "Web Development Intern",
      company: "Brainwave Matrix Solutions",
      startDate: "01/2025",
      endDate: "03/2025",
      description: "A web development intern focused on front-end technologies and user experience enhancement",
      responsibilities: [
        "Built an e-commerce user interface and an expense tracker application using HTML, CSS, and JavaScript",
        "Implemented responsive design, input validation, and client-side state persistence"
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      order: 1,
    });

    // Seed education
    await ctx.db.insert("education", {
      degree: "B.Tech. in Computer Science and Engineering",
      institution: "Andhra University",
      startYear: "2023",
      endYear: "Present",
      gpa: "7.38",
      order: 1,
    });

    // Seed certifications
    await ctx.db.insert("certifications", {
      name: "40 Days to Python Success: Master Python Programming",
      issuer: "Online Course",
      date: "2024",
      description: "Master Python programming in just 40 days",
      order: 1,
    });

    // Seed key achievements
    await ctx.db.insert("achievements", {
      title: "Smile Hub Deployment",
      description:
        "Successfully deployed Smile Hub, a full-stack dental patient management system, demonstrating full-stack development skills and attention to user privacy.",
      order: 1,
    });

    return { success: true };
  },
});