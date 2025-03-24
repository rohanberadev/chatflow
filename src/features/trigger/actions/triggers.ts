"use server";

import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { z } from "zod";
import { db } from "~/drizzle/db";
import { TriggerTable } from "~/drizzle/schema";
import { getAutomation } from "~/features/automation/db/automations";
import { insertKeyword } from "../db/keywords";
import { insertTrigger } from "../db/triggers";
import { triggerDetailsSchema } from "../schemas/triggers";

export async function createTrigger(
  unsafeData: z.infer<typeof triggerDetailsSchema>
) {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  const errorMessage = "Falied to create trigger";

  const { success, data } = triggerDetailsSchema.safeParse(unsafeData);

  if (
    !user.publicMetadata.dbId ||
    !success ||
    !data ||
    !data.automationId ||
    !data.type ||
    !data.keyword
  ) {
    return {
      error: true,
      message: errorMessage,
    };
  }

  const automation = await getAutomation({
    id: data.automationId,
    userId: user.publicMetadata.dbId,
  });

  if (!automation) {
    return {
      error: true,
      message: errorMessage,
    };
  }

  const trigger = await insertTrigger({
    automationId: data.automationId,
    type: data.type,
  });

  try {
    const keyword = await insertKeyword({
      keyword: data.keyword,
      automationId: automation.id,
    });

    return { ...trigger, keyword: keyword.keyword };
  } catch (error) {
    await db.delete(TriggerTable).where(eq(TriggerTable.id, trigger.id));

    return {
      error: true,
      message: errorMessage,
    };
  }
}
