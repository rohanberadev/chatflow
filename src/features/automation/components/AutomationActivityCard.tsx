import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export function AutomationActivityCard() {
  return (
    <Card className="w-full min-h-[350px] h-full transition-all duration-150 bg-card border-muted">
      <CardHeader>
        <CardTitle className="text-xl font-black">Automated Activity</CardTitle>
        <CardDescription>
          View your workflows, triggers, and executions for the month!
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1"></CardContent>
      <CardFooter>
        <div className="flex max-lg:flex-col gap-2 items-center w-full justify-evenly">
          <div className="flex flex-col w-full justify-center">
            <p className="text-sm">Comments</p>
            <span className="text-4xl text-primary font-black">0</span>
            <p className="text-sm">Out of 0</p>
          </div>

          <div className="flex flex-col w-full justify-center">
            <p className="text-sm">Story replies</p>
            <span className="text-4xl text-primary font-black">0</span>
            <p className="text-sm">Out of 0</p>
          </div>

          <div className="flex flex-col w-full justify-center">
            <p className="text-sm">DMs</p>
            <span className="text-4xl text-primary font-black">0</span>
            <p className="text-sm">Out of 0</p>
          </div>

          <div className="flex flex-col w-full justify-center">
            <p className="text-sm">Story mentons</p>
            <span className="text-4xl text-primary font-black">0</span>
            <p className="text-sm">Out of 0</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
