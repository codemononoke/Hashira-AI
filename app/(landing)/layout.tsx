import React, { type PropsWithChildren } from "react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

const LandingLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className=" h-full">
      <Navbar />
      <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.15] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
        <div className=" z-10">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingLayout;
