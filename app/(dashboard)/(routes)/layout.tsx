import React, { type PropsWithChildren } from "react";
import Sidebar from "../_components/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

const RoutesLayout = async ({ children }: PropsWithChildren) => {
  const apiLimitCount = await getApiLimitCount();
  return (
    <main className=" px-4 max-w-screen-2xl mx-auto ">
      <div className=" flex gap-x-7 ">
        <div className=" pt-20 md:pt-24 pr-4 w-64 shrink-0 hidden md:block border-r-[1px] h-screen ">
          <Sidebar apiLimitCount={apiLimitCount} />
        </div>
        <div className=" pt-20 md:pt-24 w-full">{children}</div>
      </div>
    </main>
  );
};

export default RoutesLayout;
