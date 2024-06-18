"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import GradientSVG from "./ui/GradientSvg";

const Photo = () => {
  return (
    <div className="relative sm:block hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, delay: 0, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 0.4, ease: "easeInOut" },
          }}
          className="w-[280px] h-[280px] sm:w-[312px] sm:h-[312px] rounded-full absolute "
        >
          <Image
            src="/Me2.png"
            alt="me"
            priority
            quality={100}
            layout="fill"
            objectFit="cover"
            className="object-contain rounded-full"
          />
        </motion.div>

        <GradientSVG />
      </motion.div>
    </div>
  );
};

export default Photo;
