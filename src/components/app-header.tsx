"use client";

import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import { SidebarTrigger } from "./ui/sidebar";

export function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="w-full h-[60px] p-6 flex items-center justify-between border-b-[1px] border-border mb-4 sticky top-0 bg-accent dark:bg-background">
      <div className="flex items-center gap-x-6">
        <SidebarTrigger className="-ml-1" />
        <h1 className="text-2xl text-foreground font-bold">
          {pathname.replace("/", "").slice(0, 1).toUpperCase()}
          {pathname.replace("/", "").slice(1, pathname.length).toLowerCase()}
        </h1>
      </div>
      <ModeToggle />
    </header>
  );
}
