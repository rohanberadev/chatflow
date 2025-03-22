"use client";

import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";

export function EditableInput({
  className,
  placeholder,
  inputValue,
  setInputValue,
  isEditing,
  setIsEditing,
}: {
  autoSaveFn?: () => void;
  className?: string;
  placeholder?: string;
  inputValue: string;
  setInputValue: (value: string) => void;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}) {
  if (isEditing) {
    return (
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={() => setIsEditing(false)}
        autoFocus
        className="w-full"
        placeholder={placeholder}
      />
    );
  }

  return (
    <div className={cn(className)} onClick={() => setIsEditing(true)}>
      {inputValue}
    </div>
  );
}
