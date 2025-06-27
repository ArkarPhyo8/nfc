"use client";
import { Button } from "@/components/ui/button";
import { companyData } from "@/lib/data";
import { cardDataType, companyDataType, serviceType } from "@/types";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaTelegramPlane, FaUserAlt } from "react-icons/fa";

const Option1 = ({ cardData }: { cardData: cardDataType }) => {
  return (
    <div className="h-fit relative max-w-[425px] mx-auto bg-gradient-to-b from-gradient-primary to-gradient-secondary font-sans">
      <div className="flex justify-end">
        <Button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/api/contact";
            link.download = "contact.vcf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="text-[#FFFEFE] text-[13px] font-bold px-3 py-2 rounded-full uppercase top-[30px] right-5 absolute z-50 bg-[#4A2CED] hover:bg-[#4A2CED]/90 shadow-[inset_2px_2px_10px_#FFFFFF47] cursor-pointer"
        >
          Save Contact
        </Button>
      </div>
      <div>
        {/* Profile Image */}
        <div className=" relative w-full h-70 px-5 flex flex-col items-center justify-center">
          <Image
            src={cardData.user.image}
            alt={cardData.user.username}
            width={400}
            height={400}
            className="absolute bottom-0 mx-auto w-[250px] h-[250px] object-cover"
          />
          {/* Bottom Fade Effect */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gradient_1 to-transparent" />
        </div>

        <div className="h-[85vh] bg-gradient-to-b from-gradient_1 to-gradient_2 px-5">
          <div className="flex flex-col items-center">
            {/* Name */}
            <h1 className="mt-6 text-[34px] font-bold text-primary-text drop-shadow-md drop-shadow-shadow_primary">
              {cardData.user.username}
            </h1>

            {/* Age & Location */}
            <p className="text-text_1 text-[14px] font-light flex items-center gap-2">
              <span>{cardData.user.age} years old</span>
              <span className="opacity-80">|</span>
              <span>{cardData.user.address}</span>
            </p>

            {/* Email */}
            <div className="mt-2 flex items-center gap-2 text-sm">
              <Mail className="text-text_7 opacity-80" />
              <a
                href="mailto:bennyzepix11@gmail.com"
                className="text-text_2 text-[16px] font-medium hover:underline"
              >
                {cardData.user.email}
              </a>
            </div>

            {/* Phone */}
            <p className="text-text_1 text-[14px] font-medium mt-1">
              {cardData.user.phoneNo}
            </p>
          </div>
          {/* Roles */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {cardData.user.service.map(
              (service: serviceType, index: number) => (
                <span
                  key={index}
                  className="bg-[#AEBBE9] px-4 py-1 rounded-xl border border-border_primary "
                >
                  <span className="text-[14px] text-text_primary font-bold drop-shadow-sm drop-shadow-shadow_primary">
                    {service.name}
                  </span>
                </span>
              )
            )}
          </div>
          {/* Companies */}
          <div className="mt-10">
            <h2 className="mb-3 text-[16px] text-text_1 font-bold uppercase">
              Company
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {companyData.map((item: companyDataType, index: number) => (
                <Link
                  key={index}
                  href={`${cardData.cardUUID}/${cardData.themes}/${item.id}`}
                >
                  <div className="flex flex-col h-full items-center text-center gap-1 rounded-md px-4 py-3 border border-border_primary shadow-[inset_0_0_4px_#F1FEFFA6]">
                    <div className="w-10 h-10 bg-white rounded-full overflow-hidden flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p className="text-[12px] font-normal text-text_primary text-nowrap">
                      {item.name.length > 10
                        ? item.name.substring(0, 10) + "..."
                        : item.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-10 pb-8">
            <h2 className="mb-3 text-[16px] text-text_1 font-bold uppercase">
              SOCIAL LINKS
            </h2>
            <div className="flex gap-4 text-text1 text-xl">
              <a
                href="#"
                className="border border-text_primary inset-shadow-2xs shadow-[inset_0_0_2px_#FFFFFF] rounded-full p-3"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="border border-text_primary inset-shadow-2xs shadow-[inset_0_0_2px_#FFFFFF] rounded-full p-3"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="#"
                className="border border-text_primary inset-shadow-2xs shadow-[inset_0_0_2px_#FFFFFF] rounded-full p-3"
              >
                <FaUserAlt />
              </a>
              <a
                href="#"
                className="border border-text_primary inset-shadow-2xs shadow-[inset_0_0_2px_#FFFFFF] rounded-full p-3"
              >
                <AiOutlineInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Option1;
