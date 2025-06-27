import { CircleChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaTelegramPlane, FaUserAlt } from "react-icons/fa";

const page = () => {
  return (
    <div className="relative max-w-[425px] mx-auto font-sans">
      <div className="flex justify-end">
        <button className="text-[#FFFEFE] text-[13px] font-bold px-3 py-2 rounded-full uppercase top-[30px] right-5 absolute bg-[#4A2CED] shadow-[inset_2px_2px_10px_#FFFFFF47]">
          save contact
        </button>
      </div>
      <div className="min-h-screen bg-gradient-to-b from-gradient-primary to-gradient-secondary px-4 py-6 font-sans">
        <div className="max-w-sm mx-auto rounded-xl p-4 relative">
          {/* Back Button */}
          <Link href={"/landing"}>
            <CircleChevronLeft className="text-text_4" />
          </Link>

          {/* Top Banner & Logo */}
          <div className="mt-12 bg-gradient-to-br from-gradient_3 to-gradient_4 h-40 rounded-xl flex items-end justify-center">
            <div className="w-28 h-28 rounded-full p-1 -mb-10 shadow-md">
              <Image
                src="/assets/images/logo2.png"
                alt="logo"
                className="rounded-full object-cover"
                width={200}
                height={200}
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-14 text-center">
            <h1 className="text-text_primary text-[23px] font-bold drop-shadow-md drop-shadow-shadow_primary">
              OCEAN BRIGHT
            </h1>
            <p className="text-text_1 text-[16px] font-light mt-1">
              Personal | Agency
            </p>
            <p className="text-text_1 text-[14px] font-normal mt-2">
              09657637711, 0948393893
            </p>
            <p className="mt-2">
              <span className="inline-block bg-bg_secondary px-4 py-2 rounded-[32px] text-text_primary text-sm border border-text_primary shadow-[inset_0_0_4px_#FFFFFF]">
                oceanbright23@gmail.com
              </span>
            </p>
          </div>

          {/* About Us */}
          <div className="mt-6 bg-bg_primary text-text_primary text-sm p-4 rounded-xl drop-shadow-lg shadow-[inset_0_0_4px_#FFFFFF]">
            <h2 className="text-text_primary text-[16px] font-bold mb-1 uppercase">
              About us
            </h2>
            <p className="text-text_5 text-[14px] font-normal">
              Lorem ipsum dolor sit amet consectetur. Et facilisis ac mus lorem.
              Sed eu nisl adipiscing enim mattis. Sagittis elit diam turpis
              netus sed neque risus hendrerit. Ridiculus pulvinar dui et neque
              turpis interdum lectus.
            </p>
          </div>

          {/* Services */}
          <div className="mt-6">
            <h3 className="text-text_6 text-[16px] font-bold mb-2 uppercase">
              Our Services
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Software Designs",
                "Websites",
                "Mobile",
                "Hosting Services",
              ].map((service) => (
                <span
                  key={service}
                  className="bg-bg_1/20  text-xs px-3 py-[6px] rounded-full border border-border_primary/30 drop-shadow-2xl drop-shadow-shadow_1 shadow-[inset_0_0_4px_#FFFFFF]"
                >
                  <span className="text-text_primary drop-shadow-xs drop-shadow-shadow_primary">
                    {service}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6">
            <h3 className="text-text_6 text-[16px] font-bold mb-2 uppercase">
              Social Links
            </h3>
            <div className="flex gap-4 text-text1 text-xl">
              <a
                href="#"
                className="border border-text_primary inset-shadow-2xs inset-shadow-text_primary rounded-full p-3"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="border border-text_primary inset-shadow-2xs inset-shadow-text_primary rounded-full p-3"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="#"
                className="border border-text_primary inset-shadow-2xs inset-shadow-text_primary rounded-full p-3"
              >
                <FaUserAlt />
              </a>
              <a
                href="#"
                className="border border-text_primary inset-shadow-2xs inset-shadow-text_primary rounded-full p-3"
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

export default page;
