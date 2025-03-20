import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export function IntegrationCard({
  integrationName,
  description,
  icon,
  href,
}: {
  integrationName: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <Link href={href} className="w-full">
      <Card className="w-full h-full hover:border-primary transition-all duration-150">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {icon}
            <span className="text-xl font-black">{integrationName}</span>
          </CardTitle>
          <CardDescription className="text-xs">{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
