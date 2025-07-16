
import Image from "next/image";
import Particles from "./SkyOnMain";

export function MainScreen() {
  return (
    <>
      <div className="flex relative w-[55%] justify-between mx-auto my-16">
        <div className="flex flex-col z-20">
          <h1 className="font-[family-name:var(--font-montserrat-sans)] text-white
          text-6xl font-extrabold my-4">MOBILE + WEB</h1>
          <h2 className="flex flex-col font-[family-name:var(--font-montserrat-sans)] text-white
          text-4xl font-extrabold my-4 gap-4">
            <span>Cкорость и разнообразие</span>
            <span>проектов</span>
          </h2>
          <h3 className="font-[family-name:var(--font-manrope-mono)] text-2xl
          font-light text-gray4 tracking-wider">Это сила нашей команды</h3>
          <button className="flex justify-center items-center max-w-fit h-[70px] bg-blue my-8 text-white text-2xl
          font-medium rounded-xl outline-[1px] outline-offset-[5px] outline-solid 
          px-16 pb-1 hover:bg-blue3 cursor-pointer">
            оставить заявку</button>
        </div>
        <div className="pr-[8rem]">
          <Image
            alt="Code"
            width={300}
            height={300}
            src={"/Code.png"}
            className="rounded-xl border-[1px] border-gray3 -rotate-10 "
          />
        </div>
        <div style={{ width: '100%', height: '600px', position: 'absolute', zIndex: '10' }}>
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
