"use client";
import React from "react";
import NavbarTabItem from "./navbar-tab-item";

const NavbarItem: React.FC = () => {
  const tabsOptionsMemo = React.useMemo(
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
      {
        value: "/contact",
        href: "/contact",
        label: "Contact",
      },
    ],
    []
  );
  return (
    <div>
      <div className="items-center justify-end gap-6 hidden md:flex">
        {tabsOptionsMemo?.map((item, i) => {
          return <NavbarTabItem key={i} label={item.label} href={item.href} />;
        })}
      </div>
    </div>
  );
};

export default NavbarItem;
