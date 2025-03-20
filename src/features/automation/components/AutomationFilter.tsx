import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { cn } from "~/lib/utils";

export function AutomationFilter({ className }: { className?: string }) {
  return (
    <Select>
      <SelectTrigger className={cn("w-[180px]", className)}>
        <SelectValue placeholder="Any Trigger states" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Any Trigger states</SelectItem>
        <SelectItem value="active">Has active states</SelectItem>
        <SelectItem value="inactive">Has inactive states</SelectItem>
      </SelectContent>
    </Select>
  );
}
