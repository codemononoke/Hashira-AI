import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import Link from "next/link";

const headingFont = localFont({
  src: "../public/fonts/Japanese.ttf",
});

const Logo = () => {
  return (
    <Link href="/">
      <div className=" hover:opacity-75 transition items-center gap-x-2 flex">
        <Image
          src="/logo.svg"
          alt="hashira ai"
          height={30}
          width={30}
          aria-hidden
        />
        <p className={cn("text-lg text-neutral-200", headingFont.className)}>
          Hashira-AI
        </p>
      </div>
    </Link>
  );
};

export default Logo;
