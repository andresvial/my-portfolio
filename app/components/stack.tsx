"use client";

import { HoverEffect } from "../ui/card-hover-effect";
import Node from "../../public/icons/node.svg";
import Next from "../../public/icons/next.png";
import React from "../../public/icons/react.png";
import PostgreSQL from "../../public/icons/postgresql.png";
import AWS from "../../public/icons/aws.png";
import Prisma from "../../public/icons/prisma.png";
import Typeorm from "../../public/icons/typeorm.png";
import Python from "../../public/icons/python.png";
import Rails from "../../public/icons/rails.png";

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
        <h2 className="mt-8 mb-4 text-4xl font-bold tracking-tight sm:text-6xl underline">
          Mi Stack
        </h2>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </>
  );
};
