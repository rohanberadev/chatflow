import { z } from "zod";

export const AutomationFilter = z.enum(["all", "active", "inactive"]);
export type AutomationFilterType = z.infer<typeof AutomationFilter>;
