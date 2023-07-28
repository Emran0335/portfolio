import Link from "next/link";
import React from "react";
import SocialLink from "./SocialLink";
import { socialLinkData } from "@/data";

const Contact = () => {
  return (
    <div className="border-b-[1px] border-b-slate-700 py-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-10 items-center justify-center">
        <h2 className="text-2xl font-bold">Let us create awesome products</h2>
        <p className="text-lg tracking-wide font-medium text-center">I am always open to discuss your project, improve your online presence, or help with your website design and convert challanges</p>
        <Link href="mailto:emranhossain0335@gmail.com">
          <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">Say Hello</button>
        </Link>
      </div>
      <div className="mt-8 flex items-center flex-wrap gap-8 justify-center">
        {socialLinkData.map((data) => (
          <SocialLink id={data.id} key={data.id} title={data.title} link={data.link} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
