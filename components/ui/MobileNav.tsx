"use client";
import React, { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Links from "../../data/links";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const MobileNav = () => {
  const [currentSection, setCurrentSection] = useState("/");

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-primary" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <nav className=" mt-28 mb-10 flex flex-col justify-center items-center gap-14 text-white border-b pb-24">
          {Links.map((link) => (
            <Link
              onClick={() => setCurrentSection(link.path)}
              key={link.name}
              href={link.path}
              className={`${
                currentSection === link.path &&
                "text-primary border-b-2 border-primary hover:border-primary/60"
              } capitalize hover:text-primary/60 text-xl transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className=" text-center text-2xl">
          <Logo />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
