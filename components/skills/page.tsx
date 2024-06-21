"use client";
import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  const row1 = [
    "/svg/skills/flutter.svg",
    "/svg/skills/dart.svg",
    "/svg/skills/firebase.svg",
    "/svg/skills/html.svg",
    "/svg/skills/css.svg",
    "/svg/skills/javascript.svg",
    "/svg/skills/tailwind.svg",
    "/svg/skills/react.svg",
    "/svg/skills/nextJS.svg",
  ];

  const row2 = [
    "/svg/skills/c.svg",
    "/svg/skills/canva.svg",
    "/svg/skills/figma.svg",
    "/svg/skills/git.svg",
    "/svg/skills/java.svg",
    "/svg/skills/microsoftoffice.svg",
    "/svg/skills/mysql.svg",
    "/svg/skills/python.svg",
  ];
  const all = [...row1, ...row2];

  return (
    <div className={styles.appContainer}>
      <div className={styles.wrapper}>
        <h1 className="heading text-white">
          Technical <span className="text-purple">Skills</span>
        </h1>
        <div className={`${styles.items} phone:hidden block`}>
          <div className={styles.marquee}>
            <div className={styles.marqueeGroup}>
              {row1.map((el: string) => (
                <div className={styles.imageGroup} key={el}>
                  <img src={el} className={`${styles.image} p-20`} />
                </div>
              ))}
            </div>
            <div className={styles.marqueeGroup}>
              {row1.map((el: string) => (
                <div className={styles.imageGroup} key={el}>
                  <img src={el} className={`${styles.image} p-20`} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.marquee}>
            <div className={styles.marqueeGroup2}>
              {row2.map((el) => (
                <div className={styles.imageGroup} key={el}>
                  <img src={el} className={styles.image} />
                </div>
              ))}
            </div>
            <div className={styles.marqueeGroup2}>
              {row2.map((el) => (
                <div className={styles.imageGroup} key={el}>
                  <img src={el} className={styles.image} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 sm:hidden w-full">
          {all.map((skill, index) => (
            <div key={index} className="flex justify-center items-center p-4">
              <img src={skill} className="w-11 h-11 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
