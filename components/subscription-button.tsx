"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Loader2, Zap } from "lucide-react";
import axios from "axios";

const SubscriptionButton = ({ isPro = false }: { isPro: boolean }) => {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);

      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      console.log("BILLING_ERROR", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant={isPro ? "secondary" : "default"}
      onClick={onClick}
      disabled={loading}
    >
      {isPro ? "Manage Subscription" : "Upgrade"}
      {!isPro &&
        (loading ? (
          <Loader2 className="ml-2 h-4 w-4 animate-spin" />
        ) : (
          <Zap className=" w-4 h-4 ml-2 fill-black" />
        ))}
    </Button>
  );
};

export default SubscriptionButton;
