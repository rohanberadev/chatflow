import { and, desc, eq, isNull } from "drizzle-orm";
import { db } from "~/drizzle/db";
import { AutomationTable } from "~/drizzle/schema";
import {
  CACHE_TAGS,
  dbCache,
  getIdTag,
  getUserTag,
  revalidateDbCache,
} from "~/lib/cache";
import { AutomationFilterType } from "../schemas/automations";

export async function getAutomations(
  userId: Parameters<typeof getAutomationsInternal>[0],
  { pagination, filter }: Parameters<typeof getAutomationsInternal>[1]
) {
  const cacheFn = dbCache(getAutomationsInternal, {
    tags: [getUserTag(userId, CACHE_TAGS.automations)],
  });

  return cacheFn(userId, { pagination, filter });
}

export async function insertAutomation({
  userId,
  name,
}: {
  userId: string;
  name: string;
}) {
  const [newAutomation] = await db
    .insert(AutomationTable)
    .values({
      userId,
      name,
    })
    .returning({ id: AutomationTable.id });

  if (!newAutomation) throw new Error("Failed to insert automation");

  revalidateDbCache({
    tag: CACHE_TAGS.automations,
    userId,
    id: newAutomation.id,
  });

  return newAutomation;
}

export async function updateAutomation(
  { id, userId }: { id: string; userId: string },
  data: Partial<typeof AutomationTable.$inferSelect>
) {
  const { rowCount } = await db
    .update(AutomationTable)
    .set(data)
    .where(and(eq(AutomationTable.id, id), eq(AutomationTable.userId, userId)));

  if (rowCount > 0) {
    revalidateDbCache({
      tag: CACHE_TAGS.automations,
      userId,
      id,
    });
  }

  return rowCount > 0;
}

export async function getAutomation({
  id,
  userId,
}: {
  id: string;
  userId: string;
}) {
  const cacheFn = dbCache(getAutomationInternal, {
    tags: [getIdTag(id, CACHE_TAGS.automations)],
  });

  return cacheFn({ userId, id });
}

function getAutomationsInternal(
  userId: string,
  {
    pagination,
    filter,
  }: {
    pagination?: { page: number; pageSize: number };
    filter?: AutomationFilterType;
  }
) {
  return db.query.AutomationTable.findMany({
    columns: {
      id: true,
      name: true,
      active: true,
      createdAt: true,
      updatedAt: true,
    },
    where: and(
      eq(AutomationTable.userId, userId),
      isNull(AutomationTable.deletedAt)
    ),
    orderBy: [desc(AutomationTable.createdAt)],
    limit: pagination?.pageSize,
    offset: ((pagination?.page ?? 1) - 1) * (pagination?.pageSize ?? 5),
  });
}

function getAutomationInternal({ userId, id }: { userId: string; id: string }) {
  return db.query.AutomationTable.findFirst({
    columns: {
      id: true,
      name: true,
      active: true,
      createdAt: true,
      updatedAt: true,
    },
    where: and(eq(AutomationTable.id, id), eq(AutomationTable.userId, userId)),
  });
}
