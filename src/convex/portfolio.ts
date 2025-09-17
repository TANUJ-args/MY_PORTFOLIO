import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Contact Info
export const getContact = query({
  args: {},
  handler: async (ctx) => {
    const contact = await ctx.db.query("contact").first();
    return contact;
  },
});

// Projects
export const getProjects = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("projects")
      .withIndex("by_order")
      .order("asc")
      .collect();
  },
});

export const getFeaturedProjects = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("projects")
      .withIndex("by_featured", (q) => q.eq("featured", true))
      .order("asc")
      .collect();
  },
});

// Skills
export const getSkills = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("skills")
      .withIndex("by_order")
      .order("asc")
      .collect();
  },
});

export const getSkillsByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("skills")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .order("asc")
      .collect();
  },
});

// Experience
export const getExperiences = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("experiences")
      .withIndex("by_order")
      .order("asc")
      .collect();
  },
});

// Education
export const getEducation = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("education")
      .withIndex("by_order")
      .order("asc")
      .collect();
  },
});

// Certifications
export const getCertifications = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("certifications")
      .withIndex("by_order")
      .order("asc")
      .collect();
  },
});

// Add achievements query
export const getAchievements = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("achievements")
      .withIndex("by_order")
      .order("asc")
      .collect();
  },
});