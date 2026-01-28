import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  sourceType: z.enum(["UPLOAD", "YOUTUBE"]),
  sourceUrl: z.string().url().optional().or(z.literal("")),
});

export const affiliateTrackSchema = z.object({
  code: z.string().min(1),
});
