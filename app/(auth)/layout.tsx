import React, { type PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className=" h-full flex items-center justify-center flex-col gap-y-5">
      {children}
    </div>
  );
};

export default AuthLayout;
