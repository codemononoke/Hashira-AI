import React from "react";
import Link from "next/link";
import Logo from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  return (
    <nav className=" bg-zinc-950 fixed z-50 top-0 w-full h-14 px-4 border-b shadow-sm flex items-center">
      <div className=" md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <MobileSidebar />
        <div className=" hidden md:flex">
          <Logo />
        </div>
        <div className=" ml-auto">
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30,
                },
              },
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
