
"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useEffect, useRef } from "react";
import FormkitWhatsapp from "@/app/icons/FormkitWhatsapp";
import JamTelegram from "@/app/icons/JamTelegram";
import MingcuteMenuFill from "@/app/icons/MingcuteMenuFill";

import MaterialSymbolsCancel from "@/app/icons/MaterialSymbolsCancel";

const menuItems = [
  { label: 'О нас', anchor: 'about' },
  { label: 'Услуги', anchor: 'services' },
  { label: 'Портфолио', anchor: 'portfolio' },
  { label: 'Контакты', anchor: 'contacts' },
];

function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement>, anchor: string) {
  e.preventDefault();
  const el = document.getElementById(anchor);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export function Header() {

  const [isOpenMainMenu, setIsOpenMainMenu] = useState(false);

  const toggleOpenMainMenu = useCallback(() => {
    setIsOpenMainMenu((value) => !value);
  }, [setIsOpenMainMenu]);

  const reff = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickMain = (e: MouseEvent) => {
      if (
        isOpenMainMenu &&
        reff.current &&
        !reff.current.contains(e.target as Node)
      ) {
        setIsOpenMainMenu(false);
      }
    };
    document.body.addEventListener("click", handleClickMain);
    return () => {
      document.body.removeEventListener("click", handleClickMain);
    };
  }, [isOpenMainMenu]);

  return (
    <>
      <div className="fixed z-50 top-0 w-full self-center bg-bluedark">
        <div className="flex overflow-hidden h-[100px] max-w-[1600px] mx-auto
      font-[family-name:var(--font-manrope-mono)] justify-between max-lg1400:w-[90%]
      max-sm480:h-[80px]">
          <div className="flex w-[30%] items-center gap-4 max-md900:w-[50%] max-s393:w-[75%]">
            <div className="max-sm480:size-[30px]">
              <Image
                alt="logo"
                width={43}
                height={47}
                src={"/developer-logo.svg"}
              />
            </div>
            <div className="font-[family-name:var(--font-montserrat-sans)] text-4xl
            font-extrabold text-gray3 max-lg1080:text-3xl max-sm480:text-xl">The developer</div>
          </div>
          <div className="flex w-[50%] items-center justify-between max-lg1280:justify-end
          max-md900:hidden">
            <nav className="flex justify-between items-center mx-auto max-lg1280:justify-end
            max-lg1280:mx-0">
              <ul className="flex gap-8">
                {menuItems.map((item) => (
                  <li key={item.anchor}>
                    <Link
                      href={`#${item.anchor}`}
                      onClick={e => handleSmoothScroll(e, item.anchor)}
                      className="hover:text-accent transition-colors duration-200 text-2xl
                font-medium cursor-pointer text-gray2 tracking-wider max-lg1280:text-xl"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* menu mobile start */}
          <div className="hidden max-md900:flex w-[30%] items-center justify-end
          max-s393:w-[20%] max-s393:justify-center">
            <div className="flex justify-center items-center text-gray2 text-[42px]
            max-sm480:text-[30px]">
              <MingcuteMenuFill
                onClick={toggleOpenMainMenu}
              />
            </div>
          </div>
          {isOpenMainMenu && (
            <>
              <div ref={reff} className="flex flex-col absolute z-[80] top-[5rem] right-[5rem]
              w-[30vw] text-white gap-3 justify-end text-lg bg-bluedark rounded-lg border-[1px]
              border-gray5/70 max-sm640:w-[50vw]
            max-s425:w-[60vw]">
                <div className="flex text-4xl text-gray5
                absolute top-4 right-4">
                  <MaterialSymbolsCancel
                    onClick={toggleOpenMainMenu}
                  />
                </div>
                <ul className="flex flex-col gap-4 p-8">
                  {menuItems.map((item) => (
                    <li key={item.anchor}>
                      <Link
                        href={`#${item.anchor}`}
                        onClick={e => {
                          handleSmoothScroll(e, item.anchor)
                          toggleOpenMainMenu()
                        }}
                        className="hover:text-accent transition-colors duration-200 text-2xl
                font-medium cursor-pointer text-gray2 tracking-wider max-lg1280:text-xl"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
          {/* menu mobile end */}
          <div className="flex w-[20%] items-center gap-8 max-lg1400:justify-end
          max-sm640:gap-4">
            <Link
              href="https://wa.me/77051121106"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center text-gray2 text-[39px]
              max-sm480:text-[30px]">
              <FormkitWhatsapp />
            </Link>
            <Link
              href="https://t.me/the_developer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center text-gray2 text-4xl
              max-sm480:text-[27px]">
              <JamTelegram />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
