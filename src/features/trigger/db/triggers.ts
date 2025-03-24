import { eq } from "drizzle-orm";
import { db } from "~/drizzle/db";
import { TriggerTable } from "~/drizzle/schema";
import { CACHE_TAGS, dbCache, getIdTag, revalidateDbCache } from "~/lib/cache";

export async function insertTrigger(data: typeof TriggerTable.$inferInsert) {
  const [newTrigger] = await db.insert(TriggerTable).values(data).returning();

  if (!newTrigger) throw new Error("Falied to insert trigger");

  revalidateDbCache({
    tag: CACHE_TAGS.automations,
    id: newTrigger.automationId,
  });

  return newTrigger;
}

export async function getTrigger({ automationId }: { automationId: string }) {
  const cacheFn = dbCache(getTriggerInternal, {
    tags: [getIdTag(automationId, CACHE_TAGS.automations)],
  });

  return cacheFn({ automationId });
}

function getTriggerInternal({ automationId }: { automationId: string }) {
  return db.query.TriggerTable.findFirst({
    where: eq(TriggerTable.automationId, automationId),
  });
}
