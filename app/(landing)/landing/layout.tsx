import React from "react";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative max-w-[425px] mx-auto font-sans">
      <div className="flex justify-end">
        <button className="text-[#FFFEFE] text-[13px] font-bold px-3 py-2 rounded-full uppercase top-[30px] right-5 absolute bg-[#4A2CED] shadow-[inset_2px_2px_10px_#FFFFFF47]">
          save contact
        </button>
      </div>
      {children}
    </div>
  );
};

export default LandingPageLayout;
