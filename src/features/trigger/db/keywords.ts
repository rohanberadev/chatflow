import { db } from "~/drizzle/db";
import { KeywordTable } from "~/drizzle/schema";
import { CACHE_TAGS, revalidateDbCache } from "~/lib/cache";

export async function insertKeyword(data: typeof KeywordTable.$inferInsert) {
  const [newKeyword] = await db.insert(KeywordTable).values(data).returning();

  if (!newKeyword) throw new Error("Failed to insert keyword");

  revalidateDbCache({
    tag: CACHE_TAGS.automations,
    id: newKeyword?.automationId,
  });

  return newKeyword;
}
