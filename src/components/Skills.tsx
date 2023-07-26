import React from "react";
import Title from "./Title";
import SkillsInput from "./SkillsInput";
import { GiSkills } from "react-icons/gi";
import { data } from "@/data";

const Skills = () => {
  return (
    <div className="border-b-[1px] border-b-slate-700 py-20">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        {data.map((item) => (
          <SkillsInput title={item.title} url={item.url} key={item.id} id={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
