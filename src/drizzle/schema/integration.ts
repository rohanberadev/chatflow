import { relations } from "drizzle-orm";
import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { UserTable } from "./user";

export const integration = ["instagram"] as const;
export type Integration = (typeof integration)[number];
export const integrationEnum = pgEnum("integration", integration);

export const IntegrationTable = pgTable("integrations", {
  id,
  name: integrationEnum().notNull().default("instagram"),
  userId: text("user_id").references(() => UserTable.id),
  token: text().notNull(),
  platformUserId: text("platform_user_id").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt,
  updatedAt,
});

export const IntegrationRelationships = relations(
  IntegrationTable,
  ({ one }) => ({
    user: one(UserTable, {
      fields: [IntegrationTable.userId],
      references: [UserTable.id],
    }),
  })
);
