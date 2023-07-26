import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiExpress,
  SiPuppeteer,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiAmazonaws,
  SiDocker,
  SiGit,
  SiTerraform,
  SiVisualstudiocode,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPython,
} from "react-icons/si";
import {
    BiFootball,
} from "react-icons/bi";
import {
    GiTennisRacket,
} from "react-icons/gi";
import {
  FcIdea,
    FcMusic, FcPuzzle, FcVideoFile
} from "react-icons/fc"

type DisplayIcon = {
  name: string;
  icon: IconType;
  color?: string;
};

export const skills: DisplayIcon[] = [
  { name: "HTML", icon: SiHtml5, color: "#e34c26" },
  { name: "CSS", icon: SiCss3, color: "#264de4" },
  { name: "JavaScript", icon: SiJavascript, color: "#f0db4f" },
  { name: "TypeScript", icon: SiTypescript, color: "#007acc" },
  { name: "React", icon: SiReact, color: "#04d8f9" },
  { name: "Next", icon: SiNextdotjs, color: "#000" },
  { name: "Node", icon: SiNodedotjs, color: "#3c873a" },
  { name: "Express", icon: SiExpress, color: "#000" },
  { name: "Python", icon: SiPython, color: "#2462f0" },
  { name: "Web Automation", icon: SiPuppeteer, color: "#000" },
  { name: "MongoDB", icon: SiMongodb, color: "#049024" },
  { name: "Postgres", icon: SiPostgresql, color: "#3a5e7d" },
  { name: "Redis", icon: SiRedis, color: "#cc000a" },
  { name: "AWS", icon: SiAmazonaws, color: "#000" },
  { name: "Docker", icon: SiDocker, color: "#0db7ed" },
  { name: "Git", icon: SiGit, color: "#f34f29" },
  { name: "Terraform", icon: SiTerraform, color: "#432a82" },
  { name: "VSCode", icon: SiVisualstudiocode, color: "#0078d7" },
];

export const hobbies: DisplayIcon[] = [
    { name: "Football", icon: BiFootball, color: "#000" },
    { name: "Squash", icon: GiTennisRacket, color: "#000" },
    { name: "Tabla", icon: FcMusic },
    { name: "Puzzles", icon: FcPuzzle },
    { name: "Youtube", icon: FcVideoFile },
    { name: "Learning", icon: FcIdea },
];