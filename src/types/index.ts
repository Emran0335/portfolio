import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface DataProps {
  id:number;
  title:string;
  url:string;
}

export interface ProjectProps {
  id:number;
  img:StaticImport;
  title:string;
  link:string;
}

export interface SocialProps {
  id:number;
  title:string;
  link:string;
}
