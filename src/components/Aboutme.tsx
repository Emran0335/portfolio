import React from "react";
import Title from "./Title";
import { SiInformatica } from "react-icons/si";

const Aboutme = () => {
  return (
    <div className="border-b-[1px] border-b-slate-700 py-20">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur nam commodi natus fuga laudantium error totam sunt voluptas, magni saepe praesentium amet ea nostrum, quas eligendi esse
          doloribus excepturi! Pariatur, voluptatum et! Quia animi, cupiditate reprehenderit unde repellat enim voluptatum? magni saepe praesentium amet ea nostrum, quas eligendi esse doloribus
          excepturi! Pariatur, voluptatum et! Quia animi, cupiditate reprehenderit unde repellat enim voluptatum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi impedit deleniti aut. Unde, quo? Repudiandae alias debitis quibusdam. In, quisquam molestias. Natus accusantium dignissimos
          autem quae enim laboriosam, ut soluta!
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
