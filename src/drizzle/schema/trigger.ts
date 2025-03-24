import { relations } from "drizzle-orm";
import { pgEnum, pgTable, uuid } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { AutomationTable } from "./automation";

export const triggerType = ["comment", "dm"] as const;
export type TriggerType = (typeof triggerType)[number];
export const triggerTypeEnum = pgEnum("trigger_type", triggerType);

export const TriggerTable = pgTable("triggers", {
  id,
  type: triggerTypeEnum().notNull(),
  automationId: uuid("automation_id")
    .notNull()
    .references(() => AutomationTable.id),
  createdAt,
  updatedAt,
});

export const TriggerRelationships = relations(TriggerTable, ({ one }) => ({
  automation: one(AutomationTable, {
    fields: [TriggerTable.automationId],
    references: [AutomationTable.id],
  }),
}));
