import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";

import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Header from "@/components/Header";
import Skills from "@/components/skills/page";

export default function Home() {
  return (
    <main className=" text-white rounded-md bg-black-100 relative flex flex-col items-center justify-center overflow-clip">
      <div className="">
        {/* <FloatingNav navItems={navItems} /> */}

        <Hero />

        <div className="sm:px-10 px-5">
          <Grid />
          <RecentProjects />
          <Skills />
          <Footer />
        </div>
      </div>
    </main>
  );
}
