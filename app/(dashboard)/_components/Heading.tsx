import React from "react";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const Heading = ({ title, description, icon: Icon }: HeadingProps) => {
  return (
    <div className=" px-4 flex  lg:px-8 items-center gap-x-3 mb-6">
      <Button size="icon" variant="secondary">
        <Icon className=" w-6 h-6" />
      </Button>
      <div>
        <h2 className=" text-3xl font-bold">{title}</h2>
        <p className=" text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default Heading;
