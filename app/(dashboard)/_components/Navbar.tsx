import React from "react";
import Logo from "@/components/logo";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./MobileSidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <nav className=" bg-zinc-950 fixed z-50 top-0 w-full h-14 px-4 border-b shadow-sm flex items-center">
      <div className=" md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
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
