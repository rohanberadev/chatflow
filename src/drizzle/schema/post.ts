import { relations } from "drizzle-orm";
import { pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { AutomationTable } from "./automation";

export const mediaType = ["image", "video", "carousel"] as const;
export type MediaType = (typeof mediaType)[number];
export const mediaTypeEnum = pgEnum("media_type", mediaType);

export const PostTable = pgTable("posts", {
  id,
  postId: text("post_id").notNull(),
  caption: text(),
  mediaUrl: text(),
  mediaType: mediaTypeEnum(),
  automationId: uuid("automation_id").references(() => AutomationTable.id),
  createdAt,
  updatedAt,
});

export const PostRelationships = relations(PostTable, ({ one }) => ({
  automation: one(AutomationTable, {
    fields: [PostTable.automationId],
    references: [AutomationTable.id],
  }),
}));
