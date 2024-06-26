"use client";

import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { HoverEffect } from "../ui/card-hover-effect";

import Node from "../../public/icons/stack/node.svg";
import Next from "../../public/icons/stack/next.png";
import React from "../../public/icons/stack/react.png";
import PostgreSQL from "../../public/icons/stack/postgresql.png";
import AWS from "../../public/icons/stack/aws.png";
import Prisma from "../../public/icons/stack/prisma.png";
import Typeorm from "../../public/icons/stack/typeorm.png";
import Python from "../../public/icons/stack/python.png";
import Rails from "../../public/icons/stack/rails.png";

const projects = [
  {
    image: Node,
    link: "https://nodejs.org/",
  },
  {
    image: Next,
    link: "https://nextjs.org/",
  },
  {
    image: React,
    link: "https://react.dev/",
  },
  {
    image: PostgreSQL,
    link: "https://www.postgresql.org/",
  },
  {
    image: AWS,
    link: "https://aws.amazon.com/",
  },
  {
    image: Prisma,
    link: "https://www.prisma.io/",
  },
  {
    image: Typeorm,
    link: "https://typeorm.io/",
  },
  {
    image: Python,
    link: "https://www.python.org/",
  },
  {
    image: Rails,
    link: "https://rubyonrails.org/",
  },
];

export const MyStack = () => {
  return (
    <>
      <div className="justify-center flex flex-wrap">
        <TypewriterEffectSmooth
          className="mt-10 mb-5"
          cursorClassName="bg-gradient-to-r from-indigo-500 to-purple-500"
          words={[
            {
              text: "Mi",
            },
            {
              text: "Stack",
            },
          ]}
        />
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </>
  );
};
