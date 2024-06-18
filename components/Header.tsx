import Link from "next/link";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import Nav from "./ui/Nav";
import { Button } from "./ui/button";
import MagicButton from "./ui/MagicButton";
import { FaHandshake, FaBriefcase } from "react-icons/fa";
import MobileNav from "./ui/MobileNav";
import Logo from "./ui/Logo";

const Header = () => {
  return (
    <header className="mb-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}

        <Logo />

        {/* desktop nav  */}

        <div className="hidden md:flex items-center lg:gap-12 gap-6">
          <Nav />

          <Link href={"#contact"}>
            <MagicButton
              title="Hire Me"
              position={"right"}
              otherClasses={"text-black rounded-full"}
            ></MagicButton>
          </Link>
        </div>

        {/* mobile nav  */}

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
