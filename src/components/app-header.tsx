"use client";

import { MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { useSidebar } from "./ui/sidebar";

export function AppHeader() {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();

  return (
    <header className="w-full h-[60px] p-6 flex items-center justify-between border-b-[1px] border-border mb-4 sticky top-0 bg-accent dark:bg-background">
      <div className="flex items-center gap-x-6">
        <Button variant={"outline"} onClick={() => toggleSidebar()}>
          <MenuIcon />
        </Button>
        <h1 className="text-2xl text-foreground font-bold">
          {pathname.replace("/", "").slice(0, 1).toUpperCase()}
          {pathname.replace("/", "").slice(1, pathname.length).toLowerCase()}
        </h1>
      </div>
      <ModeToggle />
    </header>
  );
}
