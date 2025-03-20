import { relations } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { AutomationTable } from "./automation";

export const KeywordTable = pgTable("keywords", {
  id,
  keyword: text().notNull(),
  automationId: text("automation_id").references(() => AutomationTable.id),
  createdAt,
  updatedAt,
});

export const KeywordRelationships = relations(KeywordTable, ({ one }) => ({
  automation: one(AutomationTable, {
    fields: [KeywordTable.automationId],
    references: [AutomationTable.id],
  }),
}));
