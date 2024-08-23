import React from "react";
import { cn } from "@/lib/utils";
//shadcn
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { IconLayoutSidebarLeftCollapse } from "@tabler/icons-react";
import Link from "next/link";
import NavbarTabItem from "./navbar-tab-item";

interface PropsType {
  className?: string;
}

const NavbarDrawer: React.FC<PropsType> = ({ className }) => {
  const drawerOptionsMemo = React.useMemo(
    () => [
      {
        value: "/",
        href: "/",
        label: "Home",
      },
      {
        value: "/about",
        href: "/about",
        label: "About",
      },
      {
        value: "/projects",
        href: "/projects",
        label: "Projects",
      },
    ],
    []
  );

  return (
    <div className={cn("flex md:hidden", className)}>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <IconLayoutSidebarLeftCollapse className="dark:text-white/80 text-gray-600" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div>
            <SheetHeader>
              <SheetTitle className="text-start text-xl">Menu</SheetTitle>
            </SheetHeader>
          </div>
          <div className="mt-5 flex flex-col items-start justify-start gap-3">
            {drawerOptionsMemo?.map((item, i) => {
              return (
                <NavbarTabItem key={i} label={item.label} href={item.href} />
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavbarDrawer;
