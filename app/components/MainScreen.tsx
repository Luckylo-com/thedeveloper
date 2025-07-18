
"use client"
//import Image from "next/image";
import { useCallback } from "react";
import Particles from "@/app/components/SkyOnMain";
import SplitText from "@/app/components/SplitText";
import LetterGlitch from "@/app/components/LetterGlitch";
import useModalSendEmail from "@/app/hooks/useModalSendEmail";

export function MainScreen() {

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  const ModalSendEmail = useModalSendEmail();

  const OpenModalSendEmail = useCallback(() => {
    ModalSendEmail.onOpen();
  }, [ModalSendEmail]);

  return (
    <>
    <div className="flex w-full">
      <div className="flex relative w-[55%] justify-between mx-auto my-[10rem]
      max-l1440:w-[70%] max-l1440:mb-[5rem] max-lg1080:w-[90%] max-sm640:mt-[7.5rem]
      max-sm640:mb-6 max-sm480:mt-[5rem]">
        <div className="flex flex-col z-20 max-l1440:pt-[2rem]">
          {/* <h1 className="font-[family-name:var(--font-montserrat-sans)] text-white
          text-6xl font-extrabold my-4">MOBILE + WEB</h1> */}
          <h1 className="">
            <SplitText
              text="MOBILE + WEB"
              className="text-6xl font-extrabold font-[family-name:var(--font-montserrat-sans)] text-white max-lg1080:text-5xl max-sm640:text-3xl"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </h1>
          <h2 className="flex flex-col font-[family-name:var(--font-montserrat-sans)]
          text-white text-4xl font-extrabold my-4 gap-4 max-lg1080:text-3xl
          max-md768:gap-0 max-sm640:text-2xl">
            <span>Cкорость и разнообразие</span>
            <span>проектов</span>
          </h2>
          <h3 className="font-[family-name:var(--font-manrope-mono)] text-2xl
          font-light text-gray4 tracking-wider max-sm640:text-xl">
            Это сила нашей команды</h3>
          <div className="pl-1">
            <button
            onClick={OpenModalSendEmail}
            className="flex justify-center items-center max-w-fit h-[70px] bg-blue my-8
            text-white text-2xl font-medium rounded-xl outline-[1px] outline-offset-[5px]
            outline-solid px-16 pb-1 hover:bg-blue3 cursor-pointer max-md768:h-[50px]
          max-md768:px-8 max-s393:text-xl">
              оставить заявку
            </button>
          </div>
        </div>
        <div className="w-[350px] h-[350px] rounded-xl border-[1px] border-gray3
        -rotate-10 opacity-60 overflow-hidden mr-[6rem] max-l1440:mr-[3rem]
        max-l1440:w-[300px] max-l1440:h-[300px] max-lg1080:mr-[10rem]
        max-md900:mr-[2rem] max-sm640:w-[200px] max-sm640:h-[200px] max-sm480:hidden">
          {/* <Image
            alt="Code"
            width={300}
            height={300}
            src={"/Code.png"}
            className="rounded-xl border-[1px] border-gray3 -rotate-10 "
          /> */}
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={false}
            outerVignette={false}
            smooth={true}
          />
        </div>
      </div>
      {/* <div style={{ width: '100%', height: '600px', position: 'absolute', zIndex: '10' }}
        className="h-inherit max-lg1400:h-[400px]"> */}
          <div className="w-full absolute z-10 h-[600px] max-l1440:h-[500px]
          max-sm640:h-[400px]">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      </div>
    </>
  )
}
