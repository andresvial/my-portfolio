"use client";

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export const Tagline = () => {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <Highlight className="text-white">Hola!</Highlight> Soy Andrés Vial,
        Ingeniero de Software especializado en{" "}
        <Highlight className="text-white">Web Development</Highlight>. Soy{" "}
        <Highlight className="text-white">apasionado</Highlight> sobre mi
        trabajo y siempre estoy buscando nuevos{" "}
        <Highlight className="text-white">desafíos</Highlight>
        <div className="flex flex-col items-center">
          <p className="w-fit mt-2 text-xs text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            (Si, otra de esas frases genericas)
          </p>
        </div>
      </motion.h1>
    </HeroHighlight>
  );
};
