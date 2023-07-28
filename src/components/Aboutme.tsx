import React from "react";
import Title from "./Title";
import { SiInformatica } from "react-icons/si";

const Aboutme = () => {
  return (
    <div className="border-b-[1px] border-b-slate-700 py-20">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          I am a teacher at a government primary school and I have been teaching for five years. Before that, I was also a teacher at a girls’ high school. I taught there for four and a half years.
          During those years, I learnt computer-related skills and programming as I was a student of science in school and college life. I help students and teach computer literacy. But now I want to
          find myself as a frontend developer and use my skill to pursue this career. I am dedicated and each day I am learning something new in web development and practising them again and again. It
          helps me to be experienced and confident enough to carry on more difficult tasks and dive into depth.
        </p>
        <p>
          I have gone through many studies of programming, web development, and design. I have developed a lot of projects and faced many problems but come out successful and I am still facing and
          learning problems and new ideas in coding and designing. My problem-solving expertise inspires me to go ahead a long way so that I can keep doing this type of task and I have been doing so
          for more than three years in web development, web app creation, design and so on. Creating and developing such websites and applications are the ways to be successful and help me a lot to
          pursue a career that I am doing for nearly the last three years.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
