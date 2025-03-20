import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";

export function SearchAutomation({ className }: { className?: string }) {
  return (
    <Input placeholder="Search all Automations" className={cn("", className)} />
  );
}
