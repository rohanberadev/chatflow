"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { insertAutomation } from "../db/automations";

export async function createAutomation() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  if (!user.publicMetadata.dbId)
    throw new Error("Failed to create automations");

  const newAutomation = await insertAutomation({
    userId: user.publicMetadata.dbId,
    name: "New Automation",
  });

  redirect(`/automations/${newAutomation.id}/edit`);
}
