import React from "react";
import ProjectCard from "./ProjectCard";
import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import { projectData } from "@/data";

const Projects = () => {
  return (
    <div className="border-b-[1px] border-b-slate-700 py-20">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {projectData.map((data) => (
          <ProjectCard img={data.img} title={data.title} link={data.link} key={data.id} id={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
