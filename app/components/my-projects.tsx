"use server";

import Image from "next/image";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

import Medipets from "../../public/icons/projects/medipets.svg";
import PdR from "../../public/icons/projects/pdr.png";
import Mitra from "../../public/icons/projects/mitra.svg";
import SmartLearning from "../../public/icons/projects/smart-learning.svg";
import Akloe from "../../public/icons/projects/akloe.png";
import Tricao from "../../public/icons/projects/tricao.png";
import Soubid from "../../public/icons/projects/soubid.svg";

export const MyProjects = () => {
  return (
    <div className="mb-20">
      <div className="justify-center flex flex-wrap">
        <TypewriterEffectSmooth
          className="mt-16 mb-5"
          cursorClassName="bg-gradient-to-r from-indigo-500 to-purple-500"
          words={[
            {
              text: "He",
            },
            {
              text: "contribuido",
            },
            {
              text: "en",
            },
          ]}
        />
      </div>
      <div className="h-full rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={projects.slice(0, 3)}
          direction="right"
          speed="fast"
        />
        <InfiniteMovingCards
          items={projects.slice(3, 7)}
          direction="left"
          speed="fast"
        />
      </div>
    </div>
  );
};

const projects = [
  {
    name: "Medipets",
    children: (
      <div className="bg-white rounded-2xl p-4">
        <Image src={Medipets} height={120} alt="logo" />
      </div>
    ),
  },
  {
    name: "PdR",
    children: (
      <Image className="rounded-2xl" src={PdR} height={153} alt="logo" />
    ),
  },
  {
    name: "Mitra",
    children: (
      <div className="bg-white rounded-2xl p-4">
        <Image src={Mitra} height={120} alt="logo" />
      </div>
    ),
  },
  {
    name: "Smart Learning",
    children: (
      <div className="bg-white rounded-2xl p-4">
        <Image src={SmartLearning} height={120} alt="logo" />
      </div>
    ),
  },
  {
    name: "Soubid",
    children: (
      <div className="bg-soubid rounded-2xl p-4">
        <Image src={Soubid} height={120} alt="logo" />
      </div>
    ),
  },
  {
    name: "Akloe",
    children: (
      <Image
        className="bg-white rounded-2xl"
        src={Akloe}
        height={153}
        alt="logo"
      />
    ),
  },
  {
    name: "Tricao",
    children: (
      <Image
        className="bg-white rounded-2xl"
        src={Tricao}
        height={153}
        alt="logo"
      />
    ),
  },
];
