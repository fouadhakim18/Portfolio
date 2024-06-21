"use client";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faProjectDiagram,
  faLaptopCode,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const stats = [
  {
    num: 3,
    text: "Years of experience",
    icon: faBriefcase,
  },
  {
    num: 15,
    text: "Projects Completed",
    icon: faProjectDiagram,
  },
  {
    num: 8,
    text: "Technologies mastered",
    icon: faLaptopCode,
  },
  {
    num: 5,
    text: "Awards Received",
    icon: faAward,
  },
];
const Stats = () => {
  return (
    <section className="mt-[90px] pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mx-auto xl:max-w-none">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`phone:py-5  flex flex-col items-center gap-6 px-3 ${
                i !== 3 && "sm:border-r sm:pr-2"
              } ${i !== 0 && "pl-4"}`}
            >
              <div className="text-white flex-shrink-0 sm:hidden">
                <FontAwesomeIcon
                  icon={stat.icon}
                  className="text-4xl xl:text-6xl"
                />
              </div>
              <div
                className={`flex-1 flex gap-4 items-center justify-center ${
                  stat.text.length < 15 ? "max-w-[100px]" : "max-w-[120px]"
                }   `}
              >
                <CountUp
                  end={stat.num}
                  duration={7}
                  delay={0}
                  start={0}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={` leading-snug text-white/80 phone:text-center
                  `}
                >
                  {stat.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
