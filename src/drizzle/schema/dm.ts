import { relations } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { AutomationTable } from "./automation";

export const DmsTable = pgTable("dms_table", {
  id,
  automationId: text("automation_id").references(() => AutomationTable.id),
  senderId: text("sender_id").notNull(),
  recipientId: text("recipient_id").notNull(),
  content: text().notNull(),
  createdAt,
  updatedAt,
});

export const DmsRelationships = relations(DmsTable, ({ one }) => ({
  automation: one(AutomationTable, {
    fields: [DmsTable.automationId],
    references: [AutomationTable.id],
  }),
}));
