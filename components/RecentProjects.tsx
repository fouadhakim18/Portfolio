"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading phone:text-2xl tablet:text-4xl">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 ">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item?.id}
          >
            <CardContainer className="inter-var">
              <CardBody className="bg-black-100 border-white/20 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  w-auto h-auto rounded-xl py-3 px-4 border  ">
                <CardItem translateZ="100" className="w-full mt-4">
                  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                    {/* <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div> */}

                    <img
                      src={item?.img}
                      alt="cover"
                      className="z-10 absolute bottom-0 cover rounded-xl"
                    />
                  </div>
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mt-6"
                >
                  {item?.title}
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {item?.description}
                  </p>
                </CardItem>
                <div className="flex justify-between items-center mt-6 mb-3">
                  <CardItem translateZ={20} className="flex items-center">
                    {item?.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    <a href={item?.link} target="_blank">
                      <div className="flex justify-center items-center">
                        <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                          Check Live
                        </p>
                        <FaLocationArrow className="ms-3" color="#CBACF9" />
                      </div>
                    </a>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>

          // <div
          // className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          // key={item?.id}
          // >
          //   <PinContainer title={item?.link} href={item?.link}>
          // <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
          //   {/* <div
          //     className="relative w-full h-full overflow-hidden lg:rounded-3xl"
          //     style={{ backgroundColor: "#13162D" }}
          //   >
          //     <img src="/bg.png" alt="bgimg" />
          //   </div> */}

          //   <img
          //     src={item?.img}
          //     alt="cover"
          //     className="z-10 absolute bottom-0 cover rounded-xl"
          //   />
          // </div>

          //     <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
          //       {item?.title}
          //     </h1>

          // <p
          //   className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
          //   style={{
          //     color: "#BEC1DD",
          //     margin: "1vh 0",
          //   }}
          // >
          //   {item?.description}
          // </p>

          //     <div className="flex items-center justify-between mt-7 mb-3">
          //       <div className="flex items-center">
          // {item?.iconLists.map((icon, index) => (
          //   <div
          //     key={index}
          //     className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
          //     style={{
          //       transform: `translateX(-${5 * index + 2}px)`,
          //     }}
          //   >
          //     <img src={icon} alt="icon5" className="p-2" />
          //   </div>
          // ))}
          //       </div>

          //   <div className="flex justify-center items-center">
          //     <p className="flex lg:text-xl md:text-xs text-sm text-purple">
          //       Check Live
          //     </p>
          //     <FaLocationArrow className="ms-3" color="#CBACF9" />
          //   </div>
          // </div>
          //   </PinContainer>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
