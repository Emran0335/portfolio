import React from "react";
import Title from "./Title";
import { MdWork } from "react-icons/md";
import ExperienceCard from "./ExperienceCard";
import { SiFigma, SiFiverr, SiFreelancer, SiReact, SiUpwork, SiW3C } from "react-icons/si";

const Experience = () => {
  return (
    <div className="border-b-[1px] border-b-slate-700 py-20">
      <Title text="Experience" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3">
        <ExperienceCard title="Web Developer" subtitle="Web Developer 2021 - Present" icon={<SiW3C />} />
        <ExperienceCard title="React Websites" subtitle="Reactjs Websites 2021 - Present" icon={<SiReact />} />
        <ExperienceCard title="Figma" subtitle="Figma Web Designer 2022 - Present" icon={<SiFigma />} />
        <ExperienceCard title="Freelancer" subtitle="Frontend Developer 2021 - Present" icon={<SiFreelancer />} />
        <ExperienceCard title="UpWork" subtitle="UpWork 2022 - Present" icon={<SiUpwork />} />
        <ExperienceCard title="Fiverr" subtitle="Fiverr 2022 - Present" icon={<SiFiverr />} />
      </div>
    </div>
  );
};

export default Experience;
