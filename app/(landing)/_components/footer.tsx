import Logo from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" fixed bottom-0 w-full p-4 border-t bg-zinc-950">
      <div className=" md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className=" space-x-4 md:block md:w-auto flex items-center">
          <Link
            href="#"
            className={buttonVariants({ size: "sm", variant: "ghost" })}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className={buttonVariants({ size: "sm", variant: "ghost" })}
          >
            Terms of service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
