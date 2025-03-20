import { eq } from "drizzle-orm";
import "server-only";
import { db } from "~/drizzle/db";
import { UserTable } from "~/drizzle/schema";

export async function insertUser(data: typeof UserTable.$inferInsert) {
  const [newUser] = await db
    .insert(UserTable)
    .values(data)
    .returning()
    .onConflictDoUpdate({ target: [UserTable.clerkUserId], set: data });

  if (!newUser) throw new Error("Failed to insert user");

  return newUser;
}

export async function updateUser(
  { clerkUserId }: { clerkUserId: string },
  data: Partial<typeof UserTable.$inferInsert>
) {
  const [updateUser] = await db
    .update(UserTable)
    .set(data)
    .where(eq(UserTable.clerkUserId, clerkUserId))
    .returning();

  if (!updateUser) throw new Error("Failed to update user");

  return updateUser;
}

export async function deleteUser({ clerkUserId }: { clerkUserId: string }) {
  const [deletedUser] = await db
    .update(UserTable)
    .set({ deletedAt: new Date(), clerkUserId: "deleted user" })
    .where(eq(UserTable.clerkUserId, clerkUserId))
    .returning();

  if (!deleteUser) throw new Error("Failed to delete user");

  return deletedUser;
}
