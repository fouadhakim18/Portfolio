// GradientSVG.jsx
import { motion } from "framer-motion";
import React from "react";

const GradientSVG = () => (
  <svg width="100%" height="100%" viewBox="0 0 500 500">
    {/* Define the linear gradient */}
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#09FBD3" />
      <stop offset="100%" stop-color="#FE53BB" />
    </linearGradient>

    {/* Use the gradient as the stroke color for the circle */}
    <motion.circle
      cx={253}
      cy={253}
      r={230}
      stroke="url(#gradient)" // Apply the gradient as the stroke color
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ strokeDasharray: "24 10 0 0" }}
      animate={{
        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
        rotate: [120, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  </svg>
);

export default GradientSVG;
