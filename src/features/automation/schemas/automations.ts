import { z } from "zod";

export const automationFilter = z.enum(["all", "active", "inactive"]);
export type AutomationFilterType = z.infer<typeof automationFilter>;

export const automationDetailsSchema = z.object({
  name: z.string().min(1).optional(),
  active: z.boolean().optional(),
});
