import { ActivityCard } from "~/features/dashboard/components/ActivityCard";
import { AutoDmCard } from "~/features/dashboard/components/AutoDmCard";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-foreground mb-14">
        Hello, Rohan!
      </h1>

      <div className="w-full flex max-lg:flex-col gap-4">
        <AutoDmCard />
        <AutoDmCard />
        <AutoDmCard />
      </div>

      <div className="w-full mt-16">
        <ActivityCard />
      </div>
    </div>
  );
}
