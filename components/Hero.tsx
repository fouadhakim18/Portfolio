"use client";
import { Spotlight } from "./ui/Spotlight";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import Photo from "./Photo";
import Header from "./Header";
import Stats from "../components/Stats";
import TypewriterEffect from "./ui/TypeWriter";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

const handleDownload = () => {
  console.log("downloading");
  const link = document.createElement("a");
  link.href = "/my_cv.pdf";
  link.download = "CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Hero = () => {
  return (
    <div className="">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-auto rounded-md bg-black-100 relative flex flex-col items-center justify-center  antialiased sm:px-10 px-55 pb-20">
        <div className="mx-auto lg:p-4 w-full h-full">
          <div className=" relative my-5 z-10 flex flex-col justify-between items-stretch h-full">
            <Header />
            <div className="mx-8 tablet:flex tablet:flex-col tablet:items-center tablet:gap-6 ">
              <div className="flex flex-col lg:flex-row items-center justify-between w-full tablet:flex-col-reverse">
                <div className="text-center lg:text-left mt:mt-20">
                  <span className="text-2xl ">
                    Hi there <span className="wave-emoji">👋</span>
                  </span>
                  <h1 className="text-[38px] leading-[1.1] md:text-[60px] font-semibold mb-6 mt-4">
                    I'm <span>Hakim MAROC</span>
                  </h1>
                  <TypewriterEffect />
                  <p className="max-w-[550px] pt-8 pb-12 text-white/80 md:text-[18px] text-[16px] text-center lg:text-left">
                    Flutter developer, specializing in creating beautiful,
                    user-friendly mobile apps.
                  </p>
                </div>
                <Photo />
              </div>
              <div className="tablet:flex tablet:justify-center">
                <MagicButton
                  title="Download Resume"
                  position={"right"}
                  icon={<FaDownload />}
                  handleClick={handleDownload}
                  otherClasses={
                    "rounded-full border-2 border-white bg-transparent hover:bg-gradient-to-r from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white text-[16px] py-4 px-9"
                  }
                ></MagicButton>
              </div>
            </div>

            <Stats />
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
};

export default Hero;