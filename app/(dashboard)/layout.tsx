import React, { type PropsWithChildren } from "react";
import Navbar from "./_components/Navbar";
import CrispProvider from "@/components/crisp-provider";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <CrispProvider />
      <div className=" h-full">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default DashboardLayout;
