"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Links from "../../data/links";
import { useState } from "react";

const Nav = () => {
  const [currentSection, setCurrentSection] = useState("/");
  return (
    <nav className="flex lg:gap-12 gap-6">
      {Links.map((link) => (
        <Link
          onClick={() => setCurrentSection(link.path)}
          key={link.name}
          href={link.path}
          className={`${
            currentSection === link.path &&
            "text-primary border-b-2 border-primary hover:border-primary/60"
          } capitalize font-medium hover:text-primary/60 transition-all duration-75 py-1`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
