import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandTelegram,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

interface PropsType {
  className?: string;
}

const Footer: React.FC<PropsType> = ({ className }) => {
  const links = [
    {
      title: "Linked In",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/iskandar-karimov-203a96321/",
    },
    {
      title: "Github",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/karimovXD",
    },
    {
      title: "Telegram",
      icon: (
        <IconBrandTelegram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://t.me/LMN00000",
    },
    {
      title: "leftr2053@gmail.com",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "+998(90)004-56-43",
      icon: (
        <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <footer className="px-10 py-4 flex items-center justify-between w-full m-auto 2xl:w-[1536px]">
      <div>
        <h2 className="text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          ISA
        </h2>
      </div>
      <div>
        <FloatingDock items={links} />
      </div>
    </footer>
  );
};

export default Footer;
