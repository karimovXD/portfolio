import React from "react";
import NavbarTabs from "../navbar-tabs";
import { ModeToggle } from "@/components/shared/mode-theme";
import NavbarDrawer from "@/components/shared/navbar-drawer";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg z-50">
      <div className="p-4 py-4 flex items-center justify-between m-auto 2xl:w-[1536px]">
        <div>
          <h2 className="text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            ISA
          </h2>
        </div>
        <div className="flex items-center justify-end gap-4 xl:w-full">
          <ModeToggle />
          <NavbarDrawer />
          <NavbarTabs />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
