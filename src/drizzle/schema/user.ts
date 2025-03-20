import { relations } from "drizzle-orm";
import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { AutomationTable } from "./automation";
import { IntegrationTable } from "./integration";

export const userRole = ["user", "admin"] as const;
export type UserRole = (typeof userRole)[number];
export const userRoleEnum = pgEnum("user_role", userRole);

export const UserTable = pgTable("users", {
  id,
  fullname: text(),
  email: text().notNull(),
  clerkUserId: text().notNull().unique(),
  role: userRoleEnum().notNull().default("user"),
  imageUrl: text(),
  deletedAt: timestamp({ withTimezone: true }),
  createdAt,
  updatedAt,
});

export const UserRelationships = relations(UserTable, ({ many }) => ({
  automations: many(AutomationTable),

  integrations: many(IntegrationTable),
}));
