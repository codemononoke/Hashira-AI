import React from "react";
import { checkSubscription } from "@/lib/subscription";
import Heading from "../../_components/Heading";
import { Settings } from "lucide-react";
import SubscriptionButton from "@/components/subscription-button";

const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
      />
      <div className=" px-4 lg:px-8 space-y-4">
        <div className=" text-muted-foreground text-sm">
          {isPro
            ? "You are currently on a Pro Plan."
            : "You are currently on a Free Plan."}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
};

export default SettingsPage;
