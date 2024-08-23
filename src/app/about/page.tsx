import React from "react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Skill from "@/components/shared/skill";

export const metadata: Metadata = {
  title: "ISA - About Me",
  description: "watch about me and and more :)",
};

const Page: React.FC = () => {
  const SkillOptionsMemo = React.useMemo(
    () => [
      {
        value: "html",
      },
      {
        value: "css",
      },
      {
        value: "sass",
      },
      {
        value: "tailwind",
      },
      {
        value: "js",
      },
      {
        value: "ts",
      },
      {
        value: "react",
      },
      {
        value: "next",
      },
      {
        value: "git",
      },
      {
        value: "github",
      },
    ],
    []
  );

  return (
    <div className="min-h-svh h-auto dark:bg-[#020817] bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#020817] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="m-auto min-h-svh h-auto 2xl:w-[1536px] flex flex-col items-center justify-center lg:justify-start gap-14 pb-10 px-4 md:pb-0 relative z-20">
        <div className="flex flex-col items-center gap-4 justify-center pt-5">
          <h1 className="text-4xl sm:text-5xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-gray-900">
            About Me
          </h1>
          <span className="w-10 h-[6px] rounded-2xl bg-black dark:bg-secondary"></span>
          <h3 className="text-center">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms <br /> of programming and technology
          </h3>
        </div>
        <div className="flex flex-col items-start justify-between w-full gap-14 md:gap-10 md:flex-row">
          <div className="w-full md:w-2/4">
            <h2 className="scroll-m-20 mb-2 border-b pb-2 text-2xl sm:text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Get to know me!
            </h2>
            <div className="flex flex-col items-start justify-start gap-4 mb-5">
              <p className="text-start">
                I&rsquo;m a{" "}
                <b className="text-slate-400">Frontend Focused Web Developer</b>{" "}
                building and managing the Front-end of Websites and Web
                Applications that leads to the success of the overall product.
                Check out some of my work in the
                <b className="ml-1 text-slate-400">Projects</b> section.
              </p>
              <p>
                I&rsquo;m open to <b className="text-slate-400">Job</b>{" "}
                opportunities where I can contribute, learn and grow. If you
                have a good opportunity that matches my skills and experience
                then don&rsquo;t hesitate to{" "}
                <b className="text-slate-400">contact</b> me.
              </p>
            </div>
            <Link href="/contact">
              <Button className="px-12 shadow-xl">Contact</Button>
            </Link>
          </div>
          <div className="w-full md:w-2/4">
            <h2 className="scroll-m-20 mb-2 border-b pb-2 text-2xl sm:text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Get to know me!
            </h2>
            <div className="flex flex-wrap items-start justify-start gap-5">
              {SkillOptionsMemo?.map((item, i: number) => (
                <Skill key={i} techStach={item.value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
