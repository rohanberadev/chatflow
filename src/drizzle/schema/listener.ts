import { relations } from "drizzle-orm";
import { bigint, pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { AutomationTable } from "./automation";

export const listenerType = ["message", "smartReply"] as const;
export type ListenerType = (typeof listenerType)[number];
export const listenerTypeEnum = pgEnum("listener_type", listenerType);

export const ListenerTable = pgTable("listeners", {
  id,
  type: listenerTypeEnum().notNull().default("message"),
  prompt: text().notNull(),
  commentReply: text("comment_reply"),
  dmCount: bigint("dm_count", { mode: "number" }).notNull().default(0),
  commentCount: bigint("comment_count", { mode: "number" })
    .notNull()
    .default(0),
  automationId: uuid("automation_id")
    .notNull()
    .references(() => AutomationTable.id),
  createdAt,
  updatedAt,
});

export const ListenerRelationships = relations(ListenerTable, ({ one }) => ({
  automation: one(AutomationTable, {
    fields: [ListenerTable.automationId],
    references: [AutomationTable.id],
  }),
}));
