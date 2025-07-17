
import Image from "next/image";
import MingcuteAppleFill from "@/app/icons/MingcuteAppleFill";
import MaterialSymbolsAutoTransmission from "@/app/icons/MaterialSymbolsAutoTransmission";
import MingcuteTableFill from "@/app/icons/MingcuteTableFill";
import MingcuteGame2Fill from "@/app/icons/MingcuteGame2Fill";
import MdiRobot from "@/app/icons/MdiRobot";
import CircularText from "@/app/components/CircularText";


import SpotLightCard from "@/app/components/SpotLightCard1";

const servicesItems = [
  {
    icon: <MingcuteAppleFill className="w-10 h-10 text-gray3" />,
    title: 'Разработка мобильных приложений',
    description: <p className="flex flex-wrap gap-3">
      <span className="mr-6">FLUTTER</span>
      <span className="mr-6">REACTNATIIVE</span>
      <span className="mr-6">KOTLIN</span>
      <span className="mr-6">JAVA</span>
      <span className="mr-6">SWIFT</span>
      <span>GLIDE</span>
    </p>,
  },
  {
    icon: <MingcuteTableFill className="w-10 h-10 text-gray3" />,
    title: 'Разработка сайтов и базы данных',
    description: <p className="flex flex-wrap gap-3">
      <span className="mr-6">HTML</span>
      <span className="mr-6">JAVA SCRIPT</span>
      <span className="mr-6">NODE.JS</span>
      <span className="mr-6">ACCESS</span>
      <span className="mr-6">MYSQL</span>
      <span className="mr-6">TILDA</span>
      <span className="mr-6">LARAVEL</span>
      <span className="mr-6">OPENCART</span>
      <span>WORDPRESS</span>
    </p>,
  },
  {
    icon: <MingcuteGame2Fill className="w-10 h-10 text-gray3" />,
    title: 'Разработка игр на Unity, Unreal',
    description: <p className="flex flex-wrap gap-3">
      <span className="mr-6 uppercase">Unity</span>
      <span className="uppercase">Unreal Engine</span>
    </p>,
  },
  {
    icon: <MaterialSymbolsAutoTransmission className="w-10 h-10 text-gray3" />,
    title: 'Разработка бизнес процессов для CRM',
    description: <p className="flex flex-wrap gap-3">
      <span className="mr-6">БИТРИКС24</span>
      <span className="mr-6">AMO CRM</span>
      <span>RETAIL CRM</span>
    </p>,
  },
  {
    icon: <MdiRobot className="w-10 h-10 text-gray3" />,
    title: 'Разработка ботов для телеграм',
    description: <p className="flex flex-wrap gap-3">
      <span className="mr-6">PYTHON</span>
      <span className="mr-6">TELEGRAM BOT</span>
      <span>WHATSAPP BOT</span>
    </p>,
  },
  {
    description: <CircularText
      text="PYTHON*KOTLIN*UNITY*"
      onHover="speedUp"
      spinDuration={20}
      className="absolute z-30 -top-[10%]"
    />,
  },
];

export function Services() {
  return (
    <>
      <div id="services" className="flex relative flex-col py-8 bg-white tracking-wider
    font-[family-name:var(--font-manrope-mono)]">
        <div className="max-w-[1600px] mx-auto max-lg1400:w-[90%]">
          <h3 className="font-[family-name:var(--font-montserrat-sans)] uppercase text-5xl
      text-bluedark font-extrabold py-8 max-lg1400:text-4xl">
        услуги</h3>
          <div className="flex gap-14 max-lg1400:gap-8 max-lg1080:flex-col">
            <div className="w-[75%] grid grid-cols-1 md:grid-cols-3 gap-8
            max-lg1400:w-[80%] max-lg1080:w-full">
              {servicesItems.map((service, idx) => (
                <SpotLightCard key={idx}
                  className="z-20 rounded-xl shadow p-8 flex flex-col
            text-left gap-6 bg-bluedark border border-red max-lg1080:gap-4
            max-md900:p-6"
                  spotlightColor="rgba(39, 87, 255, 0.60)">
                  <div className="">{service.icon}</div>
                  <div className="font-bold text-2xl leading-[1.36]
              text-gray3 max-lg1080:text-xl">{service.title}</div>
                  <div className="font-light text-xl leading-[1.36]
              text-gray3 max-lg1080:text-lg max-md900:leading-[1]">
                {service.description}</div>
                </SpotLightCard>
              ))}
            </div>
            <h4 className="flex w-[35%] flex-col mt-6 text-3xl font-medium text-bluedark
            max-lg1400:w-[20%] max-lg1400:text-2xl max-lg1080:w-full">
              <span>Наша цель - превращать</span>
              <span>идеи заказчика</span>
              <span>в функциональные</span>
              <span>и эффективные</span>
              приложения.
            </h4>
          </div>
        </div>
        <div className="absolute z-10 -top-14 left-0">
          <Image
            alt="Shadow"
            width={400}
            height={400}
            src={"/Shadow.svg"}
          />
        </div>
        <div className="absolute z-10 right-0 bottom-0">
          <Image
            alt="Shadow"
            width={605}
            height={636}
            src={"/Shadow.svg"}
          />
        </div>
      </div>
    </>
  )
}
