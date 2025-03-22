import { relations } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { UserTable } from "./user";

export const SubscriptionTable = pgTable("subscriptions", {
  id,
  userId: uuid("user_id").references(() => UserTable.id),
  stripeCustomerId: text("stripe_customer_id"),
  stripeSubscriptionId: text("stripe_subscription_id"),
  createdAt,
  updatedAt,
});

export const SubscriptionRelationships = relations(
  SubscriptionTable,
  ({ one }) => ({
    user: one(UserTable, {
      fields: [SubscriptionTable.userId],
      references: [UserTable.id],
    }),
  })
);
