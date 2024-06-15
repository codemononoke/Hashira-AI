"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useProModal } from "@/hooks/use-pro-modal";
import { Badge } from "./ui/badge";
import {
  Check,
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  VideoIcon,
  Zap,
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import axios from "axios";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
  },

  {
    label: "Image Generation",
    icon: ImageIcon,
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
  },
  {
    label: "Code Generation",
    icon: Code,
  },
];

const ProModal = () => {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      console.log("STRIPE_CLIENT_ERROR", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className=" flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className=" flex items-center gap-x-2 font-bold pb-2">
              Upgrade to Hashira-AI
              <Badge className=" uppercase text-sm py-1">Pro</Badge>
            </div>
          </DialogTitle>
          <DialogDescription className=" text-center pt-2 space-y-2 font-medium">
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className=" p-3 flex items-center justify-between bg-zinc-900"
              >
                <div className=" flex items-center gap-x-4">
                  <div className=" p-2 w-fit rounded-md">
                    <tool.icon className=" w-6 h-6" />
                  </div>
                  <div className=" font-semibold text-sm">{tool.label}</div>
                </div>
                <Check className=" text-primary h-5 w-5" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={onSubscribe}
            disabled={loading}
            size="lg"
            className=" w-full font-bold"
          >
            Upgrade
            <Zap className=" h-4 w-4 ml-2 fill-black" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
