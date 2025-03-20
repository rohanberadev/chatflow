import { PlusIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { AutomationFilter } from "~/features/automation/components/AutomationFilter";
import { AutomationList } from "~/features/automation/components/AutomationList";
import { SearchAutomation } from "~/features/automation/components/SearchAutomation";

export default function AutomationPage() {
  return (
    <div>
      <div className="flex items-center justify-between w-full max-lg:flex-col gap-y-4">
        <div className="flex items-center gap-x-4 max-lg:w-full">
          <SearchAutomation className="w-[250px] max-lg:w-full" />
          <AutomationFilter className="w-[250px] max-lg:w-full" />
        </div>
        <Button className="cursor-pointer w-[200px] py-2 px-6 flex items-center gap-x-2 max-sm:w-full bg-primary">
          <PlusIcon />
          New Automation
        </Button>
      </div>

      <div className="mt-16">
        <AutomationList />
      </div>
    </div>
  );
}
