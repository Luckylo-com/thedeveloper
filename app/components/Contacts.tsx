
import Link from "next/link";
import FormkitWhatsapp from "@/app/icons/FormkitWhatsapp";
import JamTelegram from "@/app/icons/JamTelegram";
import MaterialSymbolsAlternateEmailRounded from "@/app/icons/MaterialSymbolsAlternateEmailRounded";
import Orb from "@/app/components/Orb";
import DotGrid from "@/app/components/DotGrid";

export function Contacts() {
  return (
    <>
      <div id="contacts" className="flex flex-col h-[655px] relative py-8 tracking-wider
    font-[family-name:var(--font-manrope-mono)] overflow-hidden bg-bluedark
    max-l1440:h-[550px] max-md900:py-4 max-md900:h-[350px] max-sm480:h-[570px]">
        <div className="z-5 top-0 left-0">
          {/* style={{ width: '100%', height: '655px', position: 'absolute' }} */}
          <div className="w-full h-[655px] top-6 absolute z-5 max-l1440:h-[550px]
          max-md900:h-[350px] max-sm480:h-[570px]"
          >
            <DotGrid
              dotSize={3}
              gap={10}
              baseColor="#0B1749"
              activeColor="#FD4043"
              proximity={170}
              shockRadius={220}
              shockStrength={5}
              resistance={750}
              returnDuration={1.5}
            />
          </div>
        </div>
        <div className="flex w-full items-center max-w-[1600px] mx-auto z-10 mb-8
        max-l1440:w-[90%] max-sm480:flex-col">
          <div className="flex relative justify-center items-center w-[50%] pl-[5rem]
          max-l1440:pl-[2rem] max-md900:pl-0">
            {/* style={{ width: '600px', height: '600px', position: 'relative' }} */}
            <div className="w-[600px] h-[600px] relative max-l1440:w-[450px]
            max-l1440:h-[450px] max-md900:w-[300px] max-md900:h-[300px]">
              <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
              />
            </div>
            <div className="absolute text-gray4 self-center">
              <h5 className="font-[family-name:var(--font-montserrat-sans)]
              font-extrabold text-5xl max-l1440:text-4xl max-md900:text-2xl">
                КОНТАКТЫ</h5>
              <div className="flex flex-col font-medium text-2xl max-l1440:text-xl
              max-md900:text-base">
                <span>пишите нам, мы ждем</span>
                <span>вашего сообщения</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[3rem] text-3xl max-l1440:gap-[2rem]
          max-l1440:text-2xl max-lg1280:text-xl">
            <div className="flex flex-col gap-4 max-lg1280:gap-2 max-md900:gap-0">
              <div className="flex gap-4 items-center">
                <Link
                  href="https://wa.me/77051121106"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FormkitWhatsapp />
                </Link>
                <span>+7 (705) 112 11-06</span>
              </div>
              <div className="flex gap-4 items-center">
                <Link
                  href="https://t.me/the_developer"
                  target="_blank"
                  rel="noopener noreferrer">
                  <JamTelegram />
                </Link>
                <span>@the_developer</span>
              </div>
              <div className="flex gap-4 items-center">
                <span><MaterialSymbolsAlternateEmailRounded /></span>
                <span>info@thedevelopersai.com</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 max-md900:gap-0">
              <div className="flex gap-4 max-lg1400:flex-col max-md900:gap-0">
                <span className="flex">TOO “The developer”,</span>
                <span>ИИН 780555555555</span>
              </div>
              <div className="flex gap-4 max-lg1400:flex-col max-md900:gap-0">
                <span>БИН 55555555,</span>
                <span>р/сч 9999999999999999999</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
