import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";

export const userRole = ["user", "admin"] as const;
export type UserRole = (typeof userRole)[number];
export const userRoleEnum = pgEnum("user_role", userRole);

export const UserTable = pgTable("users", {
  id,
  name: text(),
  email: text().notNull(),
  clerkUserId: text().notNull().unique(),
  role: userRoleEnum().notNull().default("user"),
  imageUrl: text(),
  deletedAt: timestamp({ withTimezone: true }),
  createdAt,
  updatedAt,
});
