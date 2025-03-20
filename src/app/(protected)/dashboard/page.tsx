import { currentUser } from "@clerk/nextjs/server";
import { AutomationActivityCard } from "~/features/automation/components/AutomationActivityCard";
import { QuickAutomationAccessCard } from "~/features/dashboard/components/QuickAutomationAccessCard";

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <div>
      <h1 className="text-4xl font-bold text-foreground mb-14">
        Hello, {user?.firstName ?? user?.username}!
      </h1>

      <div className="w-full flex max-lg:flex-col gap-4">
        <QuickAutomationAccessCard
          href="#"
          title="Auto-DM from comments"
          description="Send a message when people comment on a post or reel"
        />
        <QuickAutomationAccessCard
          href="#"
          title="Auto-reply from comments"
          description="Reply on comments when people comment on a post or reel"
        />
        <QuickAutomationAccessCard
          href="#"
          title="Auto-DM from Direct Messages"
          description="Send a message when people sends you a direct message"
        />
      </div>

      <div className="w-full mt-16">
        <AutomationActivityCard />
      </div>
    </div>
  );
}
