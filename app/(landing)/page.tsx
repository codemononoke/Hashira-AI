import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Bot } from "lucide-react";
import Image from "next/image";

const headingFont = localFont({
  src: "../../public/fonts/Japanese.ttf",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const LandingPage = () => {
  return (
    <div className=" flex items-center justify-center flex-col relative">
      <Image
        src="/sword2.png"
        alt="sword"
        height={300}
        width={300}
        className=" w-[200px] md:w-[300px] absolute -z-10 right-0 opacity-40"
      />
      <Image
        src="/sword2.png"
        alt="sword"
        height={300}
        width={300}
        className=" w-[200px] md:w-[300px] absolute -z-10 left-0 opacity-40 transform -scale-x-100"
      />
      <div className={cn("flex items-center justify-center flex-col")}>
        <span className=" text-6xl mb-2">🔥</span>
        <button className=" mb-4 bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <Bot className=" h-4 w-4" />
            <span>No.1 AI Tool</span>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
        <h1
          className={cn(
            " text-3xl md:text-6xl text-center text-neutral-200 mb-6",
            headingFont.className
          )}
        >
          Harness the Power of AI with
        </h1>
        <div
          className={cn(
            " text-3xl md:text-6xl bg-gradient-to-r from-teal-200 to-teal-500 text-zinc-900 p-2 rounded-md pb-4 w-fit",
            headingFont.className
          )}
        >
          Hashira Precision
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Welcome to Hashira-AI! Inspired by Demon Slayers, our AI tools offer
        image, audio, video, and code generation to transform your ideas into
        legendary achievements.
      </div>
      <Link
        href="/sign-up"
        className={cn(buttonVariants({ size: "lg" }), "mt-6")}
      >
        Get Hashira-AI for free
      </Link>
    </div>
  );
};

export default LandingPage;
