import { DataProps } from "@/types";
import Link from "next/link";
import { FC } from "react";
import React from "react";

const SkillsInput = ({ title, url }: DataProps) => {
  return (
    <Link href={url}>
      <p className="border border-blue-800 px-6 py-2 text-lg tracking-wide bg-transparent text-gray-400 hover:text-white hover:border-blue-600 hover:bg-black rounded-lg duration-300">{title}</p>
    </Link>
  );
};

export default SkillsInput;
