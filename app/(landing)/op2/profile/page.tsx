import { CircleChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-[425px] mx-auto min-h-screen bg-bg-primary px-4 py-6 font-sans">
      <div className="max-w-sm mx-auto rounded-xl relative">
        <div className="flex items-center justify-between">
          {/* Back Button */}
          <Link href={"/option"}>
            <CircleChevronLeft className="text-text-primary" />
          </Link>
          {/* Contact Button */}
          <button className="text-text-primary text-[13px] px-4 py-2 rounded-[8px] font-bold border border-text-primary">
            Save Contact
          </button>
        </div>

        {/* Top Banner & Logo */}
        <div className="mt-12 bg-bg-secondary h-40 rounded-xl flex items-end justify-center">
          <div className="w-28 h-28 rounded-full p-1 -mb-10 shadow-md">
            <Image
              src="/assets/images/logo2.png"
              alt="logo"
              className="rounded-full"
              width={200}
              height={200}
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-14 text-center">
          <h1 className="text-text-primary text-[23px] font-bold drop-shadow-md drop-shadow-shadow-primary">
            OCEAN BRIGHT
          </h1>
          <p className="text-text-2 text-[16px] font-normal mt-1">
            Personal | Agency
          </p>

          <p className="mt-2">
            <span className="px-4 py-2 rounded-[32px] text-text-2 text-[16px] border border-border-secondary">
              oceanbright23@gmail.com
            </span>
          </p>
        </div>

        {/* Line */}
        <div className="mt-[16px] flex justify-center">
          <Image
            src="/assets/images/line.png"
            alt="profile"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Us */}
        <div className="mt-6 bg-bg-1 text-white text-sm p-4 rounded-xl border border-border-1">
          <h2 className="text-text-primary text-[18px] font-bold mb-2 uppercase">
            About us
          </h2>
          <p className="text-text-1 text-[14px] font-normal">
            Lorem ipsum dolor sit amet consectetur. Et facilisis ac mus lorem.
            Sed eu nisl adipiscing enim mattis. Sagittis elit diam turpis netus
            sed neque risus hendrerit. Ridiculus pulvinar dui et neque turpis
            interdum lectus.
          </p>
        </div>

        {/* Services */}
        <div className="mt-[37px]">
          <h3 className="mb-3 text-text-primary text-[16px] font-semibold uppercase">
            Our Services
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Software Designs", "Websites", "Mobile", "Hosting Services"].map(
              (service) => (
                <span
                  key={service}
                  className="bg-bg-3/80 text-xs px-3 py-[6px] rounded-[8px] border border-border-secondary shadow-[inset_0_0_8px_#8D899C80]"
                >
                  <span className="text-text-primary drop-shadow-sm drop-shadow-shadow-primary">
                    {service}
                  </span>
                </span>
              )
            )}
          </div>
        </div>

        {/* SOCIAL LINKS SECTION */}
        <div className="mt-[35px]">
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

export default page;
