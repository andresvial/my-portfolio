import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export const AboutMe = () => {
  return (
    <>
      <div className="justify-center flex flex-wrap">
        <TypewriterEffectSmooth
          className="mt-10 mb-5"
          cursorClassName="bg-gradient-to-r from-indigo-500 to-purple-500"
          words={[
            {
              text: "Sobre",
            },
            {
              text: "Mi",
            },
          ]}
        />
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <p className="text-lg text-gray-700">
          Soy un desarrollador web con más de 5 años de experiencia en el
          desarrollo de aplicaciones web. Me especializo en el desarrollo de
          aplicaciones web con tecnologías modernas como React, Next.js y
          TypeScript. También tengo experiencia en el desarrollo de aplicaciones
          móviles con React Native y en el desarrollo de aplicaciones
          multiplataforma con Electron.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          Me apasiona aprender nuevas tecnologías y mejorar mis habilidades
          técnicas. Me encanta trabajar en equipo y colaborar con otros
          desarrolladores para crear aplicaciones web de alta calidad.
        </p>
      </div>
    </>
  );
};
