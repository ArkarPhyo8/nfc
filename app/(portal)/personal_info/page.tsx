import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import React from "react";
import PersonalInfoForm from "./_components/Form";

const page = () => {
  return (
    <div className="px-5 py-[20px] min-h-screen w-[425px] mx-auto bg-[#F9FBFC] font-sans text-[#040404]">
      {/**Nav bar*/}
      <div className="border-b border-b-border pb-3 flex items-center justify-between">
        <div className="flex gap-1 items-center">
          <ChevronLeft className="cursor-pointer" />
          <h1>Personal Information</h1>
        </div>
        <Button className="cursor-pointer bg-gradient-to-r from-[#977DFF] to-[#0163E0] rounded-[12px] text-[#FFFFFF] text-[16px]">
          Preview
        </Button>
      </div>
      {/**Header */}
      <div className="mt-[30px]">
        <h1 className="text-[#000000] text-[18px] font-semibold">
          Profile Picture
        </h1>
        <p className="text-[#696868] text-[13px] font-normal">
          *Please upload transparent background image.
        </p>
      </div>

      {/**Form */}
      <PersonalInfoForm/>
    </div>
  );
};

export default page;
