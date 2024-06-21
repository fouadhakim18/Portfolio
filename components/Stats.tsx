"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Years of experience",
  },
  {
    num: 15,
    text: "Projects Completed",
  },
  {
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 5,
    text: "Awards Received",
  },
];
const Stats = () => {
  return (
    <section className="mt-[90px] pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6  mx-auto xl:max-w-none">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex-1 flex gap-4 items-center justify-center  ${
                i !== 3 && "sm:border-r sm:pr-2"
              } ${i !== 0 && "pl-4"} `}
            >
              <CountUp
                end={stat.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  stat.text.length < 15
                    ? "max-w-[100px]"
                    : "max-w-[120px] leading-snug text-white/80"
                }`}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
