import React from "react";
import {
  Code,
  ImageIcon,
  MessageSquare,
  MusicIcon,
  VideoIcon,
} from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { FlipWords } from "@/components/ui/flip-words";

const DashboardPage = () => {
  const words = ["Precision", "Power", "Creativity"];

  return (
    <div>
      <div className=" max-w-5xl mx-auto mb-6">
        <h1 className=" text-2xl md:text-4xl font-bold text-neutral-200">
          AI Tools: <FlipWords className=" text-blue-500" words={words} />
          <br /> from the Hashira Masters.
        </h1>
      </div>
      <BentoGrid className=" max-w-5xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 0 ? "md:col-span-2" : ""}
            url={item.url}
          />
        ))}
      </BentoGrid>
    </div>
  );
};
const Conversation = () => (
  <div className=" w-full h-full rounded-md overflow-hidden">
    <img
      src="/hashira1.jpg"
      alt="hashira1"
      className=" w-full h-full object-cover object-top "
    />
  </div>
);
const ImageGeneration = () => (
  <div className=" w-full h-full rounded-md overflow-hidden">
    <img
      src="/hashira2.jpg"
      alt="hashira2"
      className=" w-full h-full object-cover object-top "
    />
  </div>
);
const VideoGeneration = () => (
  <div className=" w-full h-full rounded-md overflow-hidden">
    <img
      src="/hashira3.jpg"
      alt="hashira3"
      className=" w-full h-full object-cover object-top "
    />
  </div>
);
const MusicGeneration = () => (
  <div className=" w-full h-full rounded-md overflow-hidden">
    <img
      src="/hashira4.jpg"
      alt="hashira4"
      className=" w-full h-full object-cover object-top "
    />
  </div>
);
const CodeGeneration = () => (
  <div className=" w-full h-full rounded-md overflow-hidden">
    <img
      src="/hashira5.jpg"
      alt="hashira5"
      className=" w-full h-full object-cover object-top "
    />
  </div>
);
const items = [
  {
    title: "Conversation",
    description:
      "Experience blazing-fast conversational AI with Kyojuro Rengoku's precision and intensity.",
    header: <Conversation />,
    icon: <MessageSquare className="h-4 w-4 text-neutral-500" />,
    url: "/conversation",
  },
  {
    title: "Image Generation",
    description:
      "Unlock artistic mastery with Muichiro Tokito's image generation AI tool.",
    header: <ImageGeneration />,
    icon: <ImageIcon className="h-4 w-4 text-neutral-500" />,
    url: "/image",
  },
  {
    title: "Video Generation",
    description:
      "Create captivating videos with Mitsuri Kanroji's AI tool, merging beauty with technology.",
    header: <VideoGeneration />,
    icon: <VideoIcon className="h-4 w-4 text-neutral-500" />,
    url: "/video",
  },
  {
    title: "Music Generation",
    description:
      "Compose powerful music with Sanemi Shinazugawa's AI tool, blending intensity.",
    header: <MusicGeneration />,
    icon: <MusicIcon className="h-4 w-4 text-neutral-500" />,
    url: "/music",
  },
  {
    title: "Code Generation",
    description:
      "Craft elegant code with Shinobu Kocho's AI tool, combining precision and grace.",
    header: <CodeGeneration />,
    icon: <Code className="h-4 w-4 text-neutral-500" />,
    url: "/code",
  },
];

export default DashboardPage;
