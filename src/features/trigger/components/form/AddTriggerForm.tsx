"use client";

import { CirclePlusIcon, PlusIcon, XIcon } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { TriggerCard } from "~/features/automation/components/TriggerCard";
import { createTrigger } from "../../actions/triggers";

export function AddTriggerForm({ id }: { id: string }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="flex items-center gap-x-4 w-full border-[1px] border-dashed py-8 border-primary bg-primary/10 hover:bg-primary/20">
          <CirclePlusIcon className="size-6" />
          <span className="text-lg font-semibold">Add Trigger</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] flex flex-col gap-y-4">
        <TriggerCard trigger="comment" />
        <TriggerCard trigger="dm" />
        <div className="w-full flex items-center gap-x-2">
          <Badge
            variant="outline"
            className="flex items-center gap-x-2 border-primary p-2"
          >
            <span className="text-sm">Smart</span>
            <XIcon className="size-6" />
          </Badge>
        </div>
        <div className="flex items-center gap-x-2">
          <Input placeholder="Add keyword eg. 'Link'" />
          <Button variant="outline">
            <PlusIcon className="size-4" />
          </Button>
        </div>
        <Button
          className="w-full"
          onClick={async () =>
            await createTrigger({ automationId: id, type: "dm", keyword: "" })
          }
        >
          Save
        </Button>
      </PopoverContent>
    </Popover>
  );
}
