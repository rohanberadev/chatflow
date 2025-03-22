"use client";

import { SquarePenIcon } from "lucide-react";
import { useState } from "react";
import { EditableInput } from "~/components/editable-input";

export function AutomationInputTitle() {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("Untitled Automation");

  return (
    <>
      <SquarePenIcon className="size-6" />
      <EditableInput
        className="text-2xl font-bold"
        placeholder="Untitled Automation"
        inputValue={inputValue}
        setInputValue={setInputValue}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
    </>
  );
}
