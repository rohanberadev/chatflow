import { AutomationInputTitle } from "~/features/automation/components/AutomationInputTitle";
import { AddTriggerForm } from "~/features/trigger/components/AddTriggerForm";

export default function EditAutomationPage() {
  return (
    <div className="w-full h-full px-20 max-lg:px-8 max-sm:px-0">
      <div className="flex items-center gap-x-4 mb-8">
        <AutomationInputTitle />
      </div>
      <div className="flex w-full h-full border-2 rounded-lg p-6 flex-col gap-4">
        <h1 className="text-xl font-bold flex items-center gap-x-2">When...</h1>
        <AddTriggerForm />
      </div>
    </div>
  );
}
