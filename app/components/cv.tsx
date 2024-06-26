import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import Image from "next/image";
import CurriculumImage from "../../public/images/curriculum.png";
import { ContainerScroll } from "./container-scroll-animation";
import { DownloadCVButton } from "./download-cv-button";

export const CV = () => {
  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <div className="justify-center flex flex-wrap mb-4 md:-mb-10">
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
        <ContainerScroll titleComponent={""}>
          <Image
            src={CurriculumImage}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
        <div className="flex flex-row justify-center md:-mt-8">
          <DownloadCVButton />
        </div>
      </div>
    </>
  );
};
