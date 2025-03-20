import { ZapIcon } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export function QuickAutomationAccessCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href} className="w-full h-full">
      <Card className="w-full h-[275px] hover:border-[2px] hover:border-primary cursor-pointer transition-all duration-150 bg-card border-muted">
        <CardHeader>
          <CardTitle className="text-xl font-black">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1"></CardContent>
        <CardFooter>
          <div className="flex gap-x-2 items-center text-primary">
            <ZapIcon />
            <span>Quick Automation</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
