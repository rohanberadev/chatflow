import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { EditAutomationNameForm } from "~/features/automation/components/form/EditAutomationNameForm";
import { getAutomation } from "~/features/automation/db/automations";
import { AddTriggerForm } from "~/features/trigger/components/form/AddTriggerForm";

export default async function EditAutomationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  if (!user?.publicMetadata.dbId) redirect("/error");

  const automation = await getAutomation({
    id,
    userId: user?.publicMetadata.dbId,
  });

  if (!automation) redirect("/not-found");

  return (
    <div className="w-full h-full px-20 max-lg:px-8 max-sm:px-0">
      <div className="flex items-center gap-x-4 mb-8">
        <EditAutomationNameForm automation={automation} />
      </div>
      <div className="flex w-full h-full border-2 rounded-lg p-6 flex-col gap-4">
        <h1 className="text-xl font-bold flex items-center gap-x-2">When...</h1>
        <AddTriggerForm />
      </div>
    </div>
  );
}
