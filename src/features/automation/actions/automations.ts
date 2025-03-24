"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { AutomationTable } from "~/drizzle/schema";
import {
  insertAutomation,
  updateAutomation as updateAutomationDb,
} from "../db/automations";
import { automationDetailsSchema } from "../schemas/automations";

export async function createAutomation() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  if (!user.publicMetadata.dbId) {
    return {
      error: true,
      message: "Failed to create automation",
    };
  }

  const { id } = await insertAutomation({
    userId: user.publicMetadata.dbId,
    name: "New Automation",
  });

  redirect(`/automations/${id}/edit`);
}

export async function updateAutomation(
  id: string,
  unsafeData: Partial<typeof AutomationTable.$inferSelect>
) {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  const { success, data } = automationDetailsSchema.safeParse(unsafeData);
  const errorMessage = "There was an error updating your product";

  if (!success || !user.publicMetadata.dbId) {
    return {
      error: true,
      message: errorMessage,
    };
  }

  const isSuccess = await updateAutomationDb(
    { id, userId: user.publicMetadata.dbId },
    data
  );

  return {
    error: !isSuccess,
    message: isSuccess
      ? "Automation updated successfully"
      : "Failed to update automation",
  };
}
