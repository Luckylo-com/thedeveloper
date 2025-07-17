
"use client"
import GridMotion from "@/app/components/GridMotion"
import Image from "next/image";

export function Portfolio() {

  // note: you'll need to make sure the parent container of this component is sized properly
  const items = [
    //'Item 1',
    //'Item 2',
    <Image
      key='jsx-item-1'
      alt="BUSYBRAIN"
      width={1598}
      height={962}
      src={"/portfolio/BUSYBRAIN.png"}
      className="rounded-lg"
    />
    ,
    <Image
      key='jsx-item-2'
      alt="Candor-Food"
      width={1598}
      height={962}
      src={"/portfolio/Candor-Food.png"}
      className="rounded-lg"
    />
    ,
    //'Item 3',
    <Image
      key='jsx-item-3'
      alt="Deliver-Flowers"
      width={1598}
      height={962}
      src={"/portfolio/Deliver-Flowers.png"}
      className="rounded-lg"
    />
    ,
    <Image
      key='jsx-item-4'
      alt="POCKETSCAN"
      width={1598}
      height={962}
      src={"/portfolio/POCKETSCAN.png"}
      className="rounded-lg"
    />
    ,
    <Image
      key='jsx-item-5'
      alt="ScheduleMe"
      width={1598}
      height={962}
      src={"/portfolio/ScheduleMe.png"}
      className="rounded-lg"
    />
    ,
    <Image
      key='jsx-item-6'
      alt="Skill-academy"
      width={1598}
      height={962}
      src={"/portfolio/Skill-academy.png"}
      className="rounded-lg"
    />
    ,
    // <Image
    //   key='jsx-item-7'
    //   alt="Work-Roster"
    //   width={1598}
    //   height={962}
    //   src={"/portfolio/Work-Roster.png"}
    //   className="rounded-lg"
    // />
    // ,
    // <Image
    //   key='jsx-item-8'
    //   alt="Candor-Food"
    //   width={1598}
    //   height={962}
    //   src={"/portfolio/Candor-Food.png"}
    //   className="rounded-lg"
    // />
    ,
    // <Image
    //   key='jsx-item-9'
    //   alt="Deliver-Flowers"
    //   width={1598}
    //   height={962}
    //   src={"/portfolio/Deliver-Flowers.png"}
    //   className="rounded-lg"
    // />
    // ,
    // <Image
    //   key='jsx-item-10'
    //   alt="POCKETSCAN"
    //   width={1598}
    //   height={962}
    //   src={"/portfolio/POCKETSCAN.png"}
    //   className="rounded-lg"
    // />
    // ,
    // <Image
    //   key='jsx-item-11'
    //   alt="ScheduleMe"
    //   width={1598}
    //   height={962}
    //   src={"/portfolio/ScheduleMe.png"}
    //   className="rounded-lg"
    // />
    // ,
    // <Image
    //   key='jsx-item-12'
    //   alt="Skill-academy"
    //   width={1598}
    //   height={962}
    //   src={"/portfolio/Skill-academy.png"}
    //   className="rounded-lg"
    // />
    // ,
    // <Image
    //   key='jsx-item-13'
    //   alt="BUSYBRAIN"
    //   width={1598}
    //   height={962}
    //   src={"/portfolio/BUSYBRAIN.png"}
    //   className="rounded-lg"
    // />
    // ,
    // <Image
    //   key='jsx-item-14'
    //   alt="Skill-academy"
    //   width={1598}
    //   height={962}
    //   src={"/portfolio/Skill-academy.png"}
    //   className="rounded-lg"
    // />,
    // <Image
    //   key='jsx-item-15'
    //   alt="Candor-Food"
    //   width={1598}
    //   height={962}
    //   src={"/portfolio/Candor-Food.png"}
    //   className="rounded-lg"
    // />
    // ,
    // <Image
    //   key='jsx-item-16'
    //   alt="ScheduleMe"
    //   width={1598}
    //   height={962}
    //   src={"/portfolio/ScheduleMe.png"}
    //   className="rounded-lg"
    // />
    // ,
    // <Image
    //   key='jsx-item-17'
    //   alt="Work-Roster"
    //   width={1598}
    //   height={962}
    //   src={"/portfolio/Work-Roster.png"}
    //   className="rounded-lg"
    // />
    // ,
    // <Image
    //   key='jsx-item-18'
    //   alt="Skill-academy"
    //   width={1598}
    //   height={962}
    //   src={"/portfolio/Skill-academy.png"}
    //   className="rounded-lg"
    // />
    // ,
  ];

  return (
    <>
      <div id="portfolio" className="flex relative flex-col py-8 tracking-wider
    font-[family-name:var(--font-manrope-mono)] max-w-[1600px] mx-auto
    max-lg1400:w-[90%]">
        <div className="flex w-full justify-end">
          <h3 className="font-[family-name:var(--font-montserrat-sans)]
      uppercase text-white text-5xl font-extrabold py-8 max-lg1400:text-4xl
      max-sm480:text-3xl">
            портфолио
          </h3>
        </div>
        <ul className="flex gap-14 text-gray4 text-3xl font-medium mb-6
        max-md900:gap-8 max-md900:text-xl max-sm480:flex-wrap max-sm480:gap-4">
          <li>Приложения</li>
          <li>Сайты</li>
          <li>Телеграм-боты</li>
          <li>Игры</li>
        </ul>
        <GridMotion items={items} />
        <p className="w-[80%] my-6 text-3xl font-medium max-lg1280:text-2xl
        max-md900:w-full max-md900:text-lg">
          Наша команда разработчиков, известная как The Developer,
          специализируется на создании разнообразных приложений и
          сервисов в сжатые сроки. Мы гордимся тем, что в нашем
          портфолио собраны проекты из разных сфер – от духовного
          просвещения до электронной коммерции. Такой разброс доказывает
          нашу способность быстро адаптироваться к любым требованиям и
          воплощать самые смелые идеи клиентов.
        </p>
      </div>
    </>
  )
}
