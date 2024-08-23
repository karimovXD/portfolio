import React from "react";

const Skill: React.FC<{ techStach: string }> = ({ techStach }) => (
  <span className="border px-5 py-2 rounded-lg bg-slate-50 dark:bg-[#030712]">
    {techStach}
  </span>
);

export default React.memo(Skill);
