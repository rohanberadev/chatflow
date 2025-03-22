import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { AutomationCard } from "~/features/automation/components/AutomationCard";
import { AutomationFilter } from "~/features/automation/components/AutomationFilter";
import { AutomationPagePagination } from "~/features/automation/components/AutomationPagePagination";
import { CreateAutomationButton } from "~/features/automation/components/CreateAutomationButton";
import { SearchAutomation } from "~/features/automation/components/SearchAutomation";
import { getAutomations } from "~/features/automation/db/automations";
import { AutomationFilterType } from "~/features/automation/schemas/automations";

export default async function AutomationsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const { page, filter } = await searchParams;

  const pageNumber = page ? parseInt(page) : 1;
  const filterValue = (filter as AutomationFilterType) ?? "all";

  return (
    <div>
      <div className="flex items-center justify-between w-full max-lg:flex-col gap-y-4">
        <div className="flex items-center gap-x-4 max-lg:w-full">
          <SearchAutomation className="w-[250px] max-lg:w-full" />
          <AutomationFilter className="w-[250px] max-lg:w-full" />
        </div>

        <CreateAutomationButton />
      </div>

      <div className="mt-16">
        <Suspense fallback={<div>Loading...</div>}>
          <AutomationList
            pagination={{ page: pageNumber, pageSize: 5 }}
            filter={filterValue}
          />
        </Suspense>
      </div>
    </div>
  );
}

async function AutomationList({
  pagination,
  filter,
}: Parameters<typeof getAutomations>[1]) {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  if (!user.publicMetadata.dbId) throw new Error("Failed to fetch automations");

  const automations = await getAutomations(user.publicMetadata.dbId, {
    pagination,
    filter,
  });

  if (automations.length === 0) {
    return (
      <div className="w-full h-full flex flex-col gap-y-8">
        <div className="text-center text-2xl font-semibold">
          No automations found
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col gap-y-8">
      {automations.map((automation) => (
        <Link href={`/automations/${automation.id}/edit`} key={automation.id}>
          <AutomationCard />
        </Link>
      ))}

      <div className="w-full flex justify-end">
        <AutomationPagePagination />
      </div>
    </div>
  );
}
