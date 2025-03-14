import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className="w-full mt-[100px] mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[75vw] mb-5">
          Ready to take your{" "}
          <span className="text-purple">digital presence</span> to the next
          level?
        </h1>
        <p className="text-white-200 md:mt-10 mt-5 mb-[40px] text-center phone:text-[16px]">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <Contact />
      </div>
      {/* <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Hakim MAROC
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div> */}
      {/* ))}
        </div> */}
      {/* </div> */}
    </footer>
  );
};

export default Footer;
