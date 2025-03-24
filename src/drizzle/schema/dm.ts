import { relations } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { AutomationTable } from "./automation";

export const DmsTable = pgTable("dms_table", {
  id,
  automationId: uuid("automation_id")
    .notNull()
    .references(() => AutomationTable.id),
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
