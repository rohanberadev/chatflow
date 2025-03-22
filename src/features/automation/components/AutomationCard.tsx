import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

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
        {/* <div className="py-2 px-8 rounded-xl flex items-center justify-center bg-gradient-to-r from-blue-500 to-primary">
          Smart AI
        </div> */}
      </CardFooter>
    </Card>
  );
}
