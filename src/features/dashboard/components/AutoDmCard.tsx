import { ZapIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export function AutoDmCard() {
  return (
    <Card className="w-full h-[275px] hover:border-[2px] hover:border-primary cursor-pointer transition-all duration-150 bg-card border-muted">
      <CardHeader>
        <CardTitle className="text-xl font-black">
          Auto-DM from comments
        </CardTitle>
        <CardDescription>
          Send a message when people comment on a post or reel
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1"></CardContent>
      <CardFooter>
        <div className="flex gap-x-2 items-center text-primary">
          <ZapIcon />
          <span>Quick Automation</span>
        </div>
      </CardFooter>
    </Card>
  );
}
