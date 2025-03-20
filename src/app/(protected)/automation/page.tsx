import { PlusIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { AutomationFilter } from "~/features/automation/components/AutomationFilter";
import { SearchAutomation } from "~/features/automation/components/SearchAutomation";

export default function AutomationPage() {
  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-x-4">
          <SearchAutomation className="w-[250px]" />
          <AutomationFilter className="w-[250px]" />
        </div>
        <Button className="cursor-pointer">
          <PlusIcon />
          New Automation
        </Button>
      </div>

      <Button className="mt-8 border-[1px] bg-transparent border-primary w-[250px] items-center justify-start py-6 px-4 cursor-pointer border-dashed hover:bg-transparent text-primary font-bold">
        <PlusIcon />
        New Folder
      </Button>
      <div></div>
    </div>
  );
}
