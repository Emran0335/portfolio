import Image from "next/image";
import React from "react";
import emranImg from "../../public/img/emran2.png";

const Banner = () => {
  return (
    <div className="border-b-[1px] border-slate-700 py-20 flex flex-col md:flex-row items-center gap-10">
      <div className="w-44 h-44 rounded-full bg-black">
        <Image src={emranImg} alt="emran image" className="object-cover w-full h-full rounded-full border-[1px] border-indigo-700 p-2" />
      </div>
      <div className="w-3/4 flex flex-col items-center md:items-start gap-2">
        <h1 className="text-5xl font-bold text-white">Emran Hossain</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-300 tracking-wide">Frontend Developer</h3>
        <p className="text-base tracking-wide text-center md:text-left">
          I am a frontend software development engineer from Dhaka, Bangladesh, who loves programming, developing, learning and problem-solving. I am very passionate about taking risks and solving
          them by communicating, sharing experiences and knowledge. I am an innovative optimised solution seeker and very excited to be in the development phase of my career as a frontend web
          developer and designer.
        </p>
      </div>
    </div>
  );
};

export default Banner;
