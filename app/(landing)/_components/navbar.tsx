import Logo from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" bg-zinc-950 fixed top-0 w-full h-14 px-4 border-b shadow-sm flex items-center z-50">
      <div className=" md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className=" space-x-4 md:w-auto flex items-center ">
          <Link
            href="/sign-in"
            className={buttonVariants({ size: "sm", variant: "outline" })}
          >
            Login
          </Link>
          <Link href="/sign-up" className={buttonVariants({ size: "sm" })}>
            Get Hashira-AI for free
          </Link>
          <Link
            href="https://github.com/codemononoke/Hashira-AI"
            target="_blank"
            rel="noreferrer noopener"
            className={buttonVariants({ size: "sm" })}
          >
            <Github className=" h-4 w-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
