import { InstagramIcon } from "lucide-react";
import { IntegrationCard } from "~/features/integration/components/IntegrationCard";

export default function IntegrationsPage() {
  return (
    <div className="flex flex-col gap-4">
      <IntegrationCard
        integrationName="Instagram"
        description="Connect your Instagram account to automate social media interactions and content management"
        icon={<InstagramIcon />}
        href="#"
      />
    </div>
  );
}
