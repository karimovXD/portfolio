import React from "react";
import Link from "next/link";
import { TabsTrigger } from "../ui/tabs";

interface PropsType {
  href: string;
  label: string;
}

const NavbarTabItem: React.FC<PropsType> = ({ label, href }) => {
  return (
    <Link className="hover:underline" href={href}>
      <h3>{label}</h3>
    </Link>
  );
};

export default React.memo(NavbarTabItem);
