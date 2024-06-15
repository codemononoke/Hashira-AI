"use client";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("8c5a7063-5b5d-4dbb-9ec9-7229640cf335");
  }, []);

  return null;
};
