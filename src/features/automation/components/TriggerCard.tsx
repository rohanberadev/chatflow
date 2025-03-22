import { MessageCircleMoreIcon, SendHorizontalIcon } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { TriggerType } from "~/drizzle/schema";

export function TriggerTitle({ trigger }: { trigger: TriggerType }) {
  if (trigger === "comment") {
    return (
      <>
        <MessageCircleMoreIcon />
        <span className="text-sm font-black no-wrap">
          When user comments on a post
        </span>
      </>
    );
  }

  if (trigger === "dm") {
    return (
      <>
        <SendHorizontalIcon />
        <span className="text-sm font-black no-wrap">When user sends a DM</span>
      </>
    );
  }

  return null;
}

export function TriggerDescription({ trigger }: { trigger: TriggerType }) {
  if (trigger === "comment") {
    return (
      <span>
        If the user comments on a post that is set up to listen for keywords
        then this automation will trigger.
      </span>
    );
  }

  if (trigger === "dm") {
    return (
      <span>
        If the user sends a DM that is set up to listen for keywords then this
        automation will trigger.
      </span>
    );
  }

  return null;
}

export function TriggerCard({
  trigger,
  onClick,
}: {
  trigger: TriggerType;
  onClick?: () => {};
}) {
  return (
    <Card className="w-full h-[100px] flex flex-col justufy-center cursor-default">
      <CardHeader>
        <CardTitle className="flex items-center gap-x-4">
          <TriggerTitle trigger={trigger} />
        </CardTitle>
        <CardDescription className="text-xs">
          <TriggerDescription trigger={trigger} />
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
