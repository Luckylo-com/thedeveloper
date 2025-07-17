
"use client"
import GridMotion from "@/app/components/GridMotion"
import Image from "next/image";

export function Portfolio() {

  // note: you'll need to make sure the parent container of this component is sized properly
  const items = [
    'Item 1',
    //'Item 2',
    <div key='jsx-item-1'>
      <Image
        alt="BUSYBRAIN"
        width={1598}
        height={962}
        src={"/portfolio/BUSYBRAIN.png"}
        className="rounded-lg"
      />
    </div>,
    <div key='jsx-item-2'>
      <Image
        alt="Candor-Food"
        width={1598}
        height={962}
        src={"/portfolio/Candor-Food.png"}
        className="rounded-lg"
      />
    </div>,
    //'Item 3',
    <div key='jsx-item-3'>
      <Image
        alt="Deliver-Flowers"
        width={1598}
        height={962}
        src={"/portfolio/Deliver-Flowers.png"}
        className="rounded-lg"
      />
    </div>,
    <div key='jsx-item-4'>
      <Image
        alt="POCKETSCAN"
        width={1598}
        height={962}
        src={"/portfolio/POCKETSCAN.png"}
        className="rounded-lg"
      />
    </div>,
    <div key='jsx-item-5'>
      <Image
        alt="ScheduleMe"
        width={1598}
        height={962}
        src={"/portfolio/ScheduleMe.png"}
        className="rounded-lg"
      />
    </div>,
    <div key='jsx-item-6'>
      <Image
        alt="Skill-academy"
        width={1598}
        height={962}
        src={"/portfolio/Skill-academy.png"}
        className="rounded-lg"
      />
    </div>,
    <div key='jsx-item-7'>
      <Image
        alt="Work-Roster"
        width={1598}
        height={962}
        src={"/portfolio/Work-Roster.png"}
        className="rounded-lg"
      />
    </div>,
    <div key='jsx-item-2'>
      <Image
        alt="Candor-Food"
        width={1598}
        height={962}
        src={"/portfolio/Candor-Food.png"}
        className="rounded-lg"
      />
    </div>,
    <div key='jsx-item-3'>
      <Image
        alt="Deliver-Flowers"
        width={1598}
        height={962}
        src={"/portfolio/Deliver-Flowers.png"}
        className="rounded-lg"
      />
    </div>,

    //'Item 10',
    <div key='jsx-item-4'>
      <Image
        alt="POCKETSCAN"
        width={1598}
        height={962}
        src={"/portfolio/POCKETSCAN.png"}
        className="rounded-lg"
      />
    </div>,
    //<div key='jsx-item-3'>Custom JSX Content22</div>,
    <div key='jsx-item-5'>
      <Image
        alt="ScheduleMe"
        width={1598}
        height={962}
        src={"/portfolio/ScheduleMe.png"}
        className="rounded-lg"
      />
    </div>,
    //'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    <div key='jsx-item-6'>
      <Image
        alt="Skill-academy"
        width={1598}
        height={962}
        src={"/portfolio/Skill-academy.png"}
        className="rounded-lg"
      />
    </div>,
    //'Item 11',
    //<div key='jsx-item-2'>Custom JSX Content55</div>,
    //'Item 13',
    //<div key='jsx-item-4'>Custom JSX Content77</div>,
    <div key='jsx-item-6'>
      <Image
        alt="Skill-academy"
        width={1598}
        height={962}
        src={"/portfolio/Skill-academy.png"}
        className="rounded-lg"
      />
    </div>,
    //'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    <Image
    key='jsx-item-1'
        alt="BUSYBRAIN"
        width={1598}
        height={962}
        src={"/portfolio/BUSYBRAIN.png"}
        className="rounded-lg"
      />,
    //'Item 14',
    <div key='jsx-item-2'>
      <Image
        alt="Candor-Food"
        width={1598}
        height={962}
        src={"/portfolio/Candor-Food.png"}
        className="rounded-lg"
      />
    </div>,
    <div key='jsx-item-5'>
      <Image
        alt="ScheduleMe"
        width={1598}
        height={962}
        src={"/portfolio/ScheduleMe.png"}
        className="rounded-lg"
      />
    </div>,
    <div key='jsx-item-7'>
      <Image
        alt="Work-Roster"
        width={1598}
        height={962}
        src={"/portfolio/Work-Roster.png"}
        className="rounded-lg"
      />
    </div>,
    <div key='jsx-item-6'>
      <Image
        alt="Skill-academy"
        width={1598}
        height={962}
        src={"/portfolio/Skill-academy.png"}
        className="rounded-lg"
      />
    </div>,
    //'Item 15',
    //'Item 16',
    // Add more items as needed
  ];

  return (
    <>
      <div id="portfolio" className="flex relative flex-col py-8 tracking-wider
    font-[family-name:var(--font-manrope-mono)] max-w-[1600px] mx-auto
    max-lg1400:w-[90%]">
        <div className="flex w-full justify-end">
          <h3 className="font-[family-name:var(--font-montserrat-sans)]
      uppercase text-white text-5xl font-extrabold py-8 max-lg1400:text-4xl">
            портфолио
          </h3>
        </div>
        <ul className="flex gap-14 text-gray4 text-3xl font-medium mb-6">
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
