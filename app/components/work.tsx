"use client";

import Image from "next/image";

import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";

import Abstract from "../../public/icons/workplaces/abstract.svg";
import Sixbell from "../../public/icons/workplaces/sixbell.svg";
import Uandes from "../../public/icons/workplaces/uandes.svg";

export const Work = () => {
  return (
    <div className="justify-center flex flex-wrap mt-8">
      <TypewriterEffectSmooth
        className="mt-10 mb-5"
        cursorClassName="bg-gradient-to-r from-indigo-500 to-purple-500"
        words={[
          {
            text: "He",
          },
          {
            text: "trabajado",
          },
          {
            text: "en",
          },
        ]}
      />
      <div className="w-full flex flex-col px-8">
        <CardContainer className="inter-var w-full">
          <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-gray-950 border-white/[0.2]  h-auto rounded-xl p-6 border">
            <CardItem translateZ="100" className="w-full mt-4 p-4">
              <Image
                src={Sixbell}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem translateZ="50" className="text-xl font-bold text-white">
              2020
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var w-full">
          <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-gray-950 border-white/[0.2] h-auto rounded-xl p-6 border">
            <CardItem translateZ="100" className="w-full mt-4 p-4">
              <Image
                src={Uandes}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem translateZ="50" className="text-xl font-bold text-white">
              2022
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var w-full">
          <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-gray-950 border-white/[0.2] h-auto rounded-xl p-6 border">
            <CardItem translateZ="100" className="w-full mt-4 p-4">
              <Image
                src={Abstract}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem className="text-xl font-bold text-white">
              2022 - Presente
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};
