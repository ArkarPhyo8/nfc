import LoginForm from "@/components/(auth)/LoginForm";
import React from "react";

const page = () => {
  return (
    <div className="space-y-10 px-5 pt-[80px] min-h-screen w-[425px] mx-auto bg-[#FFFFFF] text- font-sans text-[#040404]">
      <div className="space-y-3">
        <div>
          <h1 className="text-[30px] font-bold bg-gradient-to-r from-[#040404] to-[#7195DF] bg-clip-text text-transparent uppercase leading-8">
            Customize
          </h1>
          <h1 className="text-[30px] font-bold bg-gradient-to-t from-[#7195DF] to-[#040404] bg-clip-text text-transparent uppercase leading-8">
            your
          </h1>
          <h1 className="text-[30px] font-bold bg-gradient-to-tr from-[#7195DF] to-[#040404] bg-clip-text text-transparent uppercase leading-8">
            profile
          </h1>
        </div>
        <p className="text-[#696868] text-[16px] font-normal">
          Please login to manage your NFC card profile.
        </p>
      </div>

      <div>
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
