import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import React from "react";
import Cards from "./_components/Cards";

const page = () => {
  return (
    <div className="px-5 py-[20px] min-h-screen w-[425px] mx-auto bg-[#F9FBFC] font-sans text-[#040404]">
      <div className="flex gap-5 items-center justify-between border-b border-b-border pb-2">
        <h1 className="text-[18px] font-bold bg-gradient-to-t from-[#7195DF] to-[#040404] bg-clip-text text-transparent uppercase leading-7">
          Manage your profilE information
        </h1>
        <div className="bg-[#DADBFF] cursor-pointer w-fit p-2 rounded-full border border-[#0163E0]/20">
          <LogOut size={20} />
        </div>
      </div>

      <div className="mt-[17px] flex gap-4 items-center">
        <Button className="bg-[#0163E0] hover:bg-[#0163E0]/90 border border-[#977DFF]/20 cursor-pointer rounded-full">
          <span className="text-[#FFFFFF] text-[14px] text-medium">
            Profile Design
          </span>
        </Button>
        <Button
          variant={"ghost"}
          className="border border-[#5D5D5D] cursor-pointer rounded-full"
        >
          <span className="text-[#5D5D5D] text-[14px] text-medium">
            Customize Theme
          </span>
        </Button>
      </div>

      <div>
        <Cards />
      </div>
    </div>
  );
};

export default page;
