import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Integration } from "~/drizzle/schema";
import { getOAuthIntegrationUrl } from "../actions/integrations";

export async function IntegrationCard({
  integrationName,
  description,
  icon,
  integrationStrategy,
}: {
  integrationName: string;
  description: string;
  icon: React.ReactNode;
  integrationStrategy: Integration;
}) {
  const url = await getOAuthIntegrationUrl({ strategy: integrationStrategy });

  if (!url) return null;

  return (
    <Link href={url} className="w-full">
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
