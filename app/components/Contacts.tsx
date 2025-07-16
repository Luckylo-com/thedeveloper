
import FormkitWhatsapp from "@/app/icons/FormkitWhatsapp";
import JamTelegram from "@/app/icons/JamTelegram";
import MaterialSymbolsAlternateEmailRounded from "@/app/icons/MaterialSymbolsAlternateEmailRounded";
import Orb from "@/app/components/Orb";
import DotGrid from "@/app/components/DotGrid";

export function Contacts() {
  return (
    <>
      <div id="contacts" className="flex h-[655px] relative flex-col py-8 tracking-wider
    font-[family-name:var(--font-manrope-mono)]">
        <div className="z-5 top-0 left-0">
          <div style={{ width: '100%', height: '655px', position: 'absolute' }}>
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
        <div className="flex w-full items-center max-w-[1600px] mx-auto z-10">
          <div className="flex relative justify-center items-center w-[50%] pl-[5rem]">
            <div style={{ width: '600px', height: '600px', position: 'relative' }}
              className="">
              <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
              />
            </div>
            <div className="absolute text-gray4  self-center">
              <h5 className="font-[family-name:var(--font-montserrat-sans)]
              font-extrabold text-5xl">КОНТАКТЫ</h5>
              <div className="flex flex-col font-medium text-2xl">
                <span>пишите нам, мы ждем</span>
                <span>вашего сообщения</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[3rem] text-3xl">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <span><FormkitWhatsapp /></span>
                <span>+7 (705) 112 11-06</span>
              </div>
              <div className="flex gap-4 items-center">
                <span><JamTelegram /></span>
                <span>@the_developer</span>
              </div>
              <div className="flex gap-4 items-center">
                <span><MaterialSymbolsAlternateEmailRounded /></span>
                <span>info@thedevelopersai.com</span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <span className="flex">TOO “The developer”,</span>
                <span>ИИН 780555555555</span>
              </div>
              <div className="flex gap-4">
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
