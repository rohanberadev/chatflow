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
    <Card className="w-full min-h-[350px] max-lg:min-h-[400px] h-full transition-all duration-150 bg-card border-muted">
      <CardHeader>
        <CardTitle className="text-xl font-black">Automated Activity</CardTitle>
        <CardDescription>
          View your workflows, triggers, and executions for the month!
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1"></CardContent>
      <CardFooter>
        <div className="flex gap-2 items-center w-full justify-evenly max-lg:grid max-lg:grid-cols-2 max-lg:gap-8">
          <div className="flex flex-col w-full justify-center">
            <p className="text-sm max-lg:text-xs">Comments</p>
            <span className="text-4xl max-lg:text-3xl text-primary font-black">
              0
            </span>
            <p className="text-sm max-lg:text-xs">Out of 0</p>
          </div>

          <div className="flex flex-col w-full justify-center">
            <p className="text-sm max-lg:text-xs">Story replies</p>
            <span className="text-4xl max-lg:text-3xl text-primary font-black">
              0
            </span>
            <p className="text-sm max-lg:text-xs">Out of 0</p>
          </div>

          <div className="flex flex-col w-full justify-center">
            <p className="text-sm max-lg:text-xs">DMs</p>
            <span className="text-4xl max-lg:text-3xl text-primary font-black">
              0
            </span>
            <p className="text-sm max-lg:text-xs">Out of 0</p>
          </div>

          <div className="flex flex-col w-full justify-center">
            <p className="text-sm max-lg:text-xs">Story mentons</p>
            <span className="text-4xl max-lg:text-3xl text-primary font-black">
              0
            </span>
            <p className="text-sm max-lg:text-xs">Out of 0</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
