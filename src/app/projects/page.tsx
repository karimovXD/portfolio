import React from "react";
import ProjectCard from "@/components/shared/project-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISA - Projects",
  description: "watch my projects and and more :)",
};

const Page: React.FC = () => {
  const projectOptionsMemo = React.useMemo(
    () => [
      {
        title: "Weather app",
        skills: ["next", "ts", "tailwind"],
        websiteImage: "/weather-app.png",
        href: "https://weather-app-two-one.vercel.app/",
      },
      {
        title: "React Pizza",
        skills: ["react", "ts", "redux", "scss", "tailwind", "vite"],
        websiteImage: "/react-pizza.png",
        href: "https://react-pizza-two-one.vercel.app/",
      },
      {
        title: "CRUD",
        skills: ["react", "ts", "scss", "tailwind", "vite"],
        websiteImage: "/crud.png",
        href: "https://crud-lilac-psi.vercel.app/",
      },
      {
        title: "Netflix",
        skills: ["react", "scss", "tailwind", "vite"],
        websiteImage: "/netflix.png",
        href: "https://chipper-chaja-412c30.netlify.app/",
      },
      {
        title: "Rest Countries",
        skills: ["react", "scss", "tailwind", "vite"],
        websiteImage: "/rest-countries.png",
        href: "https://rest-countries-henna.vercel.app/",
      },
    ],
    []
  );

  return (
    <div className="min-h-svh h-auto dark:bg-[#020817] bg-white dark:bg-grid-small-white/[0.2] relative bg-grid-small-black/[0.2]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#020817] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="m-auto min-h-svh h-auto 2xl:w-[1536px] flex flex-col gap-14 pb-10 px-4 md:pb-0 relative z-10">
        <div className="flex flex-col items-center gap-4 justify-center pt-5">
          <h1 className="text-4xl sm:text-5xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-gray-900">
            Projects
          </h1>
          <span className="w-10 h-[6px] rounded-2xl bg-black dark:bg-secondary"></span>
          <h3 className="text-center">
            Here you will find some of the personal and clients projects that I
            created with each project <br /> containing its own case study Here
            you
          </h3>
        </div>
        <div className="flex items-start justify-center flex-wrap gap-5">
          {projectOptionsMemo.map((item, i) => {
            return (
              <ProjectCard
                key={i}
                title={item.title}
                skills={item.skills}
                websiteImage={item.websiteImage}
                href={item.href}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
