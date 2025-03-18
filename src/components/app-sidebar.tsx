"use client";

import {
  ChartNoAxesCombinedIcon,
  HomeIcon,
  SettingsIcon,
  WorkflowIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import { NavUser } from "./nav-user";

// menu items
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: HomeIcon,
  },
  {
    title: "Automation",
    url: "/automation",
    icon: WorkflowIcon,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: ChartNoAxesCombinedIcon,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: SettingsIcon,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Sidebar collapsible="icon" className="border-border">
      <SidebarHeader className="bg-gray-200 dark:bg-background" />
      <SidebarContent className="bg-gray-200 dark:bg-background">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl text-primary font-black mb-4">
            <Link href="/dashboard">Chatflow</Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-gray-200 dark:bg-background">
        <NavUser user={{ name: "Rohan Bera", email: "rohan@example.com" }} />
      </SidebarFooter>
    </Sidebar>
  );
}
