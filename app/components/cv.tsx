import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import Image from "next/image";
import CurriculumImage from "../../public/images/curriculum.png";
import { ContainerScroll } from "./container-scroll-animation";

export const CV = () => {
  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <div className="justify-center flex flex-wrap">
              <TypewriterEffectSmooth
                className="mt-0 mb-2"
                cursorClassName="bg-gradient-to-r from-indigo-500 to-purple-500"
                words={[
                  {
                    text: "Mi",
                  },
                  {
                    text: "Curriculum",
                  },
                ]}
              />
            </div>
          }
        >
          <Image
            src={CurriculumImage}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </>
  );
};
