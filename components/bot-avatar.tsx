import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";

const BotAvatar = () => {
  return (
    <Avatar className=" h-8 w-8 bg-zinc-950">
      <AvatarImage className=" p-2" src="/logo.svg" />
    </Avatar>
  );
};

export default BotAvatar;
