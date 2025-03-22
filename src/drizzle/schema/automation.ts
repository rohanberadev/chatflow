import { relations } from "drizzle-orm";
import { boolean, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { DmsTable } from "./dm";
import { KeywordTable } from "./keyword";
import { PostTable } from "./post";
import { TriggerTable } from "./trigger";
import { UserTable } from "./user";

export const AutomationTable = pgTable("automations", {
  id,
  name: text().notNull(),
  userId: uuid("user_id").references(() => UserTable.id),
  active: boolean().notNull().default(false),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
  createdAt,
  updatedAt,
});

export const AutomationRelationships = relations(
  AutomationTable,
  ({ one, many }) => ({
    user: one(UserTable, {
      fields: [AutomationTable.userId],
      references: [UserTable.id],
    }),

    triggers: many(TriggerTable),

    keywords: many(KeywordTable),

    posts: many(PostTable),

    dms: many(DmsTable),
  })
);
