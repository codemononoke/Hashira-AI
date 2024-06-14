import React from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";

const FreeCounter = ({ apiLimitCount = 0 }: { apiLimitCount: number }) => {
  return (
    <div className=" px-3 w-full">
      <Card className=" bg-zinc-900 border-0">
        <CardContent className=" py-6">
          <div className=" text-center text-sm text-white mb-4 space-y-2">
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
            </p>
            <Progress
              className=" h-3"
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
            />
          </div>
          <Button className=" w-full">
            Upgrade
            <Zap className=" h-4 w-4 ml-2 " />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;
