import React from "react";
import { cn } from "@/lib/utils";

interface PropsType {
  className?: string;
}

const page: React.FC<PropsType> = ({ className }) => {
  return <div className={cn("", className)}>page</div>;
};

export default page;
