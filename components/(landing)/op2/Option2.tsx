"use client";
import { Button } from "@/components/ui/button";
import { cardDataType } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Option2 = ({ cardData }: { cardData: cardDataType }) => {
  return (
    <div className="min-h-screen max-w-[425px] mx-auto bg-bg-primary text-white font-sans">
      {/* Header */}
      <div className="bg-bg-secondary p-6 h-56 space-y-7">
        <div className="flex justify-between items-center">
          <h1 className="text-text-primary font-bold text-[13px]">MYPROFILE</h1>
          <Button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/api/contact";
              link.download = "contact.vcf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="bg-transparent hover:bg-transparent cursor-pointer text-text-primary text-[13px] px-4 py-2 rounded-[8px] font-bold border border-text-primary"
          >
            Save Contact
          </Button>
        </div>

        {/* Profile Card */}
        <div className="bg-bg-2 h-44 rounded-xl flex gap-4 overflow-auto border border-border-primary">
          <Image
            src="/assets/images/hero1.png"
            alt="profile"
            width={200}
            height={200}
            className="w-[40%] h-full object-cover"
          />
          <div className="w-[60%] flex flex-col justify-center gap-2">
            <h2 className="text-text-primary text-[22px] font-bold">
              {cardData.user.username}
            </h2>
            <p className="text-text-secondary text-[13px] font-normal">
              {cardData.user.age} years old | {cardData.user.address}
            </p>
            <p className="text-text-secondary text-[13px] font-normal">
              {cardData.user.email}
            </p>
            <p className="text-text-secondary text-[13px] font-normal">
              {cardData.user.phoneNo}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 mt-5">
        {/* Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
          {["UX Designer", "Branding", "Manager"].map((tag) => (
            <span
              key={tag}
              className="bg-bg-3/50 text-white px-3 py-[6px] rounded-[8px] shadow-[inset_2px_2px_4px_#F1FEFFA6]"
            >
              <span className="text-text-primary font-medium text-[14px]">
                {tag}
              </span>
            </span>
          ))}
        </div>

        {/* Line */}
        <div className="mt-[35px] flex justify-center">
          <Image
            src="/assets/images/line.png"
            alt="profile"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Me */}
        <div className="mt-[30px]">
          <h3 className="text-text-primary font-bold text-[16px] uppercase">
            About me
          </h3>
          <p className="text-text-1 text-[14px] font-normal mt-2">
            Lorem ipsum dolor sit amet consectetur. Et facilisis ac mus lorem.
            Sed eu nisl adipiscing enim mattis. Sagittis elit diam turpis netus
            sed neque risus hendrerit. Ridiculus pulvinar dui et neque turpis
            interdum lectus.
          </p>
        </div>

        {/* COMPANY SECTION */}
        <div className="mt-[40px]">
          <h2 className="text-text-primary font-bold text-[16px] uppercase">
            Company
          </h2>
          <div className="grid grid-cols-3 gap-3 mt-3">
            {[
              { name: "Ocean Bright", src: "/assets/images/logo1.png" },
              { name: "Apple", src: "/assets/images/logo2.png" },
              { name: "Pepsi Myanmar", src: "/assets/images/logo3.png" },
            ].map((company) => (
              <Link key={company.name} href={"/option/profile"}>
                <div className="bg-bg-4 h-full px-4 py-3 rounded-[12px] flex flex-col items-center shadow-[inset_1px_1px_3px_#F1FEFFA6]">
                  <div className="w-10 h-10 bg-white rounded-full overflow-hidden flex items-center justify-center">
                    <Image
                      src={company.src}
                      alt={company.name}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="text-text-primary text-[12px] font-normal mt-1 text-nowrap">
                    {company.name.length > 10
                      ? company.name.substring(0, 10) + "..."
                      : company.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SOCIAL LINKS SECTION */}
        <div className="mt-[40px]">
          <h2 className="text-text-primary font-bold text-[16px] uppercase mb-3">
            SOCIAL LINKS
          </h2>
          <div className="flex gap-4">
            {[
              {
                name: "Telegram",
                src: "/assets/icons/telegram.png",
              },
              {
                name: "Facebook",
                src: "/assets/icons/facebook.png",
              },
              {
                name: "Instagram",
                src: "/assets/icons/instagram.png",
              },
            ].map((social) => {
              return (
                <div
                  key={social.name}
                  className={`relative w-12 h-12 rounded-xl  flex items-center justify-center ${
                    social.name == "Instagram"
                      ? "shadow-[inset_0_0_6px_#BE0DFC]"
                      : "shadow-[inset_0_0_6px_#287EFF52]"
                  } opacity-70 hover:scale-105 transition-transform overflow-auto`}
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={100}
                    height={100}
                    className="w-6 h-6"
                  />
                  <div
                    className={`absolute bottom-1/6 translate-y-1/2 w-6 h-3 rounded-full bg-gradient-to-br ${
                      social.name == "Instagram"
                        ? "from-[#BE0DFC] via-[#BE0DFC] to-[#BE0DFC]"
                        : "from-[#287EFF] via-[#287EFF] to-[#287EFF]"
                    }  blur-sm`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Option2;
