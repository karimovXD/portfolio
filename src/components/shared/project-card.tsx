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
  skills: string;
  skillImageAlt: string;
  websiteImage: string;
  websiteImageAlt: string;
  href: string;
}

const ProjectCard: React.FC<PropsType> = ({
  title,
  skills,
  skillImageAlt,
  websiteImage,
  websiteImageAlt,
  href,
}) => {
  return (
    <>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="mb-2 ">{title}</CardTitle>
          <CardDescription>
            <img
              src={`https://skillicons.dev/icons?i=${skills}`}
              alt={skillImageAlt}
            />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src={websiteImage}
            alt={websiteImageAlt}
            width={300}
            height={200}
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <a target="_blank" href={href} className="border w-full">
            <Button className="w-full">Project Link</Button>
          </a>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProjectCard;
