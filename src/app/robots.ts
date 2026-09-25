import type { MetadataRoute } from "next";

// Moteurs classiques et IA explicitement autorisés (GEO)
const ia = ["GPTBot", "OAI-SearchBot", "OAI-AdsBot", "ChatGPT-User", "ClaudeBot", "Claude-Web", "anthropic-ai", "PerplexityBot", "Google-Extended", "Applebot-Extended", "CCBot", "Meta-ExternalAgent"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }, ...ia.map((userAgent) => ({ userAgent, allow: "/" }))],
    sitemap: "https://petitchalet.fr/sitemap.xml",
    host: "https://petitchalet.fr",
  };
}
