import React from "react";
import { cn } from "@/lib/utils";

interface PropsType {
  className?: string;
}

const NotFound: React.FC<PropsType> = ({ className }) => {
  return <div className={cn("", className)}>hello there</div>;
};

export default NotFound;
