import React from "react";

const Skill: React.FC<{ url: string }> = ({ url }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <img src={`https://skillicons.dev/icons?i=${url}`} className="w-14 h-auto" alt="" />
    </div>
  );
};

export default React.memo(Skill);
