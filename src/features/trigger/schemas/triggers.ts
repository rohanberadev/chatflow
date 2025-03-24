import { z } from "zod";
import { triggerType } from "~/drizzle/schema";

export const triggerDetailsSchema = z.object({
  automationId: z.string().uuid().optional(),
  type: z.enum(triggerType).optional(),
  keyword: z.string().min(1).optional(),
});
