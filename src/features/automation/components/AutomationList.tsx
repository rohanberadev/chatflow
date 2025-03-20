import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { AutomationPagePagination } from "./AutomationPagePagination";

export function AutomationCard() {
  return (
    <Card className="w-full h-full bg-card hover:border-primary/40 transition-all duration-150">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-4xl font-bold">Test Automation</CardTitle>
          <span className="text-xs text-muted-foreground">
            {new Date().toDateString()}
          </span>
        </div>
        <CardDescription className="text-muted-foreground text-sm">
          This is from the comment
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center justify-between">
        <div className="py-2 px-4 rounded-xl flex items-center justify-center border-[2px] border-amber-600 inset-shadow-sm inset-shadow-amber-600/60 bg-amber-600/20">
          Smart
        </div>
        <div className="py-2 px-8 rounded-xl flex items-center justify-center border-[2px]">
          Standard
        </div>
      </CardFooter>
    </Card>
  );
}

export function AutomationList() {
  return (
    <div className="w-full h-full flex flex-col gap-y-8">
      {Array.from({ length: 5 }).map((_, index) => (
        <Link href={`/automations/${index}`} key={index}>
          <AutomationCard />
        </Link>
      ))}

      <div className="w-full flex justify-end">
        <AutomationPagePagination />
      </div>
    </div>
  );
}
