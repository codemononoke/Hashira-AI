"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  Settings,
  VideoIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FreeCounter from "@/components/free-counter";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
  },

  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

const Sidebar = ({
  apiLimitCount = 0,
}: // isPro = false,
{
  apiLimitCount: number;
  // isPro: boolean;
}) => {
  const pathname = usePathname();

  return (
    <div className=" flex h-full flex-col gap-y-4">
      {routes.map((route) => (
        <Link href={route.href} key={route.href}>
          <Button
            variant={route.href === pathname ? "secondary" : "ghost"}
            className=" justify-start rounded-full w-full"
          >
            <route.icon className=" h-4 w-4 mr-2" />
            {route.label}
          </Button>
        </Link>
      ))}
      <div className="h-full flex items-end  justify-center w-full mb-4">
        <FreeCounter apiLimitCount={apiLimitCount} />
      </div>
    </div>
  );
};

export default Sidebar;
