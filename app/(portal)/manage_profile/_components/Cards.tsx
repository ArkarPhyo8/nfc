import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const cardData = [
  {
    name: "Personal information",
    description: "Manage your name, profile pictures, contact information",
    src: "/assets/icons/personal_vector.png",
    link: "/personal_info",
  },
  {
    name: "Professional Work",
    description: "Highlight your best work and keep your audience.",
    src: "/assets/icons/work_vector.png",
    link: "/professional_work",
  },
  {
    name: "About me",
    description: "Show your information brife",
    src: "/assets/icons/about_vector.png",
    link: "/about_me",
  },
  {
    name: "Business Profile",
    description: "Add your business profiles",
    src: "/assets/icons/business_vector.png",
    link: "/business_profile",
  },
  {
    name: "Social Links",
    description: "Link and show your social media accounts in profile",
    src: "/assets/icons/social_vector.png",
    link: "/social_links",
  },
];

const Cards = () => {
  return (
    <div className="mt-[30px]">
      <div className="space-y-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] border border-[#E6E9EE] flex items-center justify-between rounded-[8px] py-4 px-2"
          >
            <div className="flex gap-4 items-center">
              <div className="min-w-[50px] min-h-[50px] bg-[linear-gradient(120deg,_#0163E0,_#B9BDFF,_#4AB0B8)] rounded-full p-1">
                <Image
                  src={card.src}
                  width={100}
                  height={100}
                  alt={"image"}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col">
                <h1 className="text-[#000000] text-[16px] font-semibold">
                  {card.name}
                </h1>
                <h1 className="text-[#5D5D5D] text-[13px] font-normal">
                  {card.description}
                </h1>
              </div>
            </div>
            <Link key={index} href={card.link}>
              <div className="bg-[#E2E2E2] cursor-pointer p-1 rounded-full">
                <ChevronRight size={20} className="text-[#0E0E0F]" />
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Button className="mt-[54px] cursor-pointer float-right bg-gradient-to-r from-[#977DFF] to-[#0163E0] rounded-[12px]">
        <span className="text-[#FFFFFF] text-[14px] font-medium">
          Preview Your profile
        </span>
      </Button>
    </div>
  );
};

export default Cards;
