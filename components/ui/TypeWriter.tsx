"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../../app/globals.css";
import { gapSize } from "three/examples/jsm/nodes/Nodes.js";
const TypewriterEffect = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'A <span class="gradient-text">Mobile developer</span>',
        'A <span class="gradient-text">Web developer</span>',
        'A <span class="gradient-text">UI/UX Designer</span>',
      ],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 500,
      startDelay: 0,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };

    const typed = new Typed(typedRef.current, options);

    // Clean up the effect on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typedRef} className="typewriter-text"></span>;
};

export default TypewriterEffect;
