import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "3usq0tzq",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});
