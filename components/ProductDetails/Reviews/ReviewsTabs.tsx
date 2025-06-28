import { Button } from "@/components/ui/button";
import React from "react";

type tReviewsTabProps = {
  activeTab: "all" | "photo_video" | "description";
  setActiveTab: React.Dispatch<
    React.SetStateAction<"all" | "photo_video" | "description">
  >;
};
const ReviewsTabs = ({ activeTab, setActiveTab }: tReviewsTabProps) => {
  type tTab = {
    id: number;
    title: string;
    value: "all" | "photo_video" | "description";
  };
  const tabs: tTab[] = [
    {
      id: 1,
      title: "All Review",
      value: "all",
    },
    {
      id: 2,
      title: "With Photo & Video",
      value: "photo_video",
    },
    {
      id: 3,
      title: "With Description",
      value: "description",
    },
  ];
  return (
    <div className="flex gap-2 items-center w-[80%] lg:w-full flex-wrap lg:flex-nowrap">
      {tabs.map(({ id, title, value }) => {
        return (
          <Button
            key={id}
            variant={activeTab == value ? "secondary" : "ghost"}
            onClick={() => setActiveTab(value)}
            className={`border-1 ${activeTab == value ? "border-primary" : "border-secondary"}`}
          >
            {title}
          </Button>
        );
      })}
    </div>
  );
};

export default ReviewsTabs;
