import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";

// default user roles. can add / remove based on the project as needed
export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  MEMBER: "member",
} as const;

export const roleValidator = v.union(
  v.literal(ROLES.ADMIN),
  v.literal(ROLES.USER),
  v.literal(ROLES.MEMBER),
);
export type Role = Infer<typeof roleValidator>;

const schema = defineSchema(
  {
    // default auth tables using convex auth.
    ...authTables, // do not remove or modify

    // the users table is the default users table that is brought in by the authTables
    users: defineTable({
      name: v.optional(v.string()), // name of the user. do not remove
      image: v.optional(v.string()), // image of the user. do not remove
      email: v.optional(v.string()), // email of the user. do not remove
      emailVerificationTime: v.optional(v.number()), // email verification time. do not remove
      isAnonymous: v.optional(v.boolean()), // is the user anonymous. do not remove

      role: v.optional(roleValidator), // role of the user. do not remove
    }).index("email", ["email"]), // index for the email. do not remove or modify

    // Portfolio data tables
    projects: defineTable({
      title: v.string(),
      description: v.string(),
      technologies: v.array(v.string()),
      features: v.array(v.string()),
      liveUrl: v.optional(v.string()),
      githubUrl: v.optional(v.string()),
      imageUrl: v.optional(v.string()),
      featured: v.boolean(),
      order: v.number(),
    }).index("by_featured", ["featured"])
      .index("by_order", ["order"]),

    skills: defineTable({
      name: v.string(),
      category: v.string(), // "frontend", "backend", "database", "tools"
      proficiency: v.number(), // 1-5 scale
      order: v.number(),
    }).index("by_category", ["category"])
      .index("by_order", ["order"]),

    experiences: defineTable({
      title: v.string(),
      company: v.string(),
      location: v.optional(v.string()),
      startDate: v.string(),
      endDate: v.optional(v.string()),
      description: v.string(),
      responsibilities: v.array(v.string()),
      technologies: v.array(v.string()),
      order: v.number(),
    }).index("by_order", ["order"]),

    education: defineTable({
      degree: v.string(),
      institution: v.string(),
      location: v.optional(v.string()),
      startYear: v.string(),
      endYear: v.optional(v.string()),
      gpa: v.optional(v.string()),
      description: v.optional(v.string()),
      order: v.number(),
    }).index("by_order", ["order"]),

    certifications: defineTable({
      name: v.string(),
      issuer: v.string(),
      date: v.string(),
      description: v.optional(v.string()),
      credentialUrl: v.optional(v.string()),
      order: v.number(),
    }).index("by_order", ["order"]),

    // Add achievements table
    achievements: defineTable({
      title: v.string(),
      description: v.string(),
      order: v.number(),
    }).index("by_order", ["order"]),

    contact: defineTable({
      name: v.string(),
      email: v.string(),
      phone: v.optional(v.string()),
      location: v.string(),
      githubUrl: v.string(),
      linkedinUrl: v.optional(v.string()),
      websiteUrl: v.string(),
      bio: v.string(),
      profileImage: v.optional(v.string()),
    }),
  },
  {
    schemaValidation: false,
  },
);

export default schema;