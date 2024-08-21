import React from "react";
import Image from "next/image";
//shadcn
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const page: React.FC = () => {
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
        <div>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle className="mb-2 ">React Pizza</CardTitle>
              <CardDescription>
                <img
                  src="https://skillicons.dev/icons?i=react,ts,redux,scss,tailwind,vite"
                  alt=""
                />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/react-pizza-project.jpg"
                alt="react-pizza"
                width={300}
                height={200}
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <a
                target="_blank"
                href="https://react-pizza-two-one.vercel.app/"
                className="border w-full"
              >
                <Button className="w-full">Project Link</Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;
