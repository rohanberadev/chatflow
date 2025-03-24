"use client";

import { SquarePenIcon } from "lucide-react";
import { useState } from "react";
import { EditableInput } from "~/components/editable-input";
import { AutomationTable } from "~/drizzle/schema";
import { updateAutomation } from "../../actions/automations";

export function EditAutomationNameForm({
  automation,
}: {
  automation: Partial<typeof AutomationTable.$inferSelect>;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(
    automation.name ?? "Untitled Automation"
  );

  return (
    <>
      <SquarePenIcon className="size-6" onClick={() => setIsEditing(true)} />
      <EditableInput
        className="text-2xl font-bold"
        placeholder="Untitled Automation"
        inputValue={inputValue}
        setInputValue={setInputValue}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        onSubmit={async (e) => {
          e.preventDefault();
          setIsEditing(false);
          await updateAutomation(automation.id!, { name: inputValue });
        }}
      />
    </>
  );
}
