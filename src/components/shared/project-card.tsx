import React from "react";
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
import Image from "next/image";

interface PropsType {
  title: string;
  skills: string[];
  websiteImage: string;
  href: string;
}

const ProjectCard: React.FC<PropsType> = ({
  title,
  skills,
  websiteImage,
  href,
}) => {
  return (
    <>
      <Card className="w-full md:w-[350px] h-auto">
        <CardHeader>
          <CardTitle className="mb-2 ">{title}</CardTitle>
          <CardDescription className="flex items-center justify-start gap-2 overflow-y-auto pb-1">
            {skills.map((item, i) => (
              <span
                key={i}
                className="border px-5 py-2 rounded-lg bg-slate-50 dark:bg-[#030712]"
              >
                {item}
              </span>
            ))}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src={websiteImage}
            alt="website image"
            width={800}
            height={400}
            className="rounded-md"
            priority
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <a target="_blank" href={href} className="w-full">
            <Button className="w-full">Project Link</Button>
          </a>
        </CardFooter>
      </Card>
    </>
  );
};

export default React.memo(ProjectCard);
