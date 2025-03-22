"use client";

import { PlusIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { createAutomation } from "../actions/automations";

export function CreateAutomationButton() {
  return (
    <Button
      onClick={async () => await createAutomation()}
      className="cursor-pointer w-[200px] py-2 px-6 flex items-center gap-x-2 max-sm:w-full bg-primary rounded-lg text-white"
    >
      <PlusIcon />
      <span className="text-nowrap font-semibold">New Automation</span>
    </Button>
  );
}
