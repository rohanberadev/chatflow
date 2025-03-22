"use server";

import { Integration } from "~/drizzle/schema";

export async function getOAuthIntegrationUrl({
  strategy,
}: {
  strategy: Integration;
}) {
  if (strategy === "instagram") {
    return "/";
  }
}
