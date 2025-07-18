
"use client"
import { useRef, useState, useLayoutEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import portfolioAppsData from "@/app/data/portfolioAppsData";
import { Card } from "./cards/Card";

export function PortfolioApps() {

  const [showAll, setShowAll] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  // Determine which items to render
  const itemsToShow = showAll
    ? portfolioAppsData
    : portfolioAppsData.slice(0, 6);

  // after each render (and after showAll toggles), measure all card heights
  useLayoutEffect(() => {
    if (cardRefs.current.length === 0) return;
    const heights = cardRefs.current.map((el) =>
      el ? el.getBoundingClientRect().height : 0
    );
    const newMax = Math.max(...heights);
    if (newMax !== maxHeight) {
      setMaxHeight(newMax);
    }
  }, [itemsToShow, maxHeight]);
    
  return (
    <>
      <div className="flex relative flex-col py-8 bg-gray tracking-wider
      font-[family-name:var(--font-manrope-mono)]">
      <div className="flex relative flex-col items-center max-w-[1600px] mx-auto
      max-l1440:w-[90%]">
        <div className="flex w-full justify-start">
          <h3 className="flex items-start font-[family-name:var(--font-montserrat-sans)]
          uppercase text-4xl text-bluedark font-semibold py-8 z-10 ml-6
          max-l1440:text-3xl max-lg1080:py-4 max-sm480:text-2xl">
            приложения
          </h3>
        </div>
        <div className="absolute z-5 top-0 left-0 max-l1440:size-[4rem]
        max-l1440:top-[1rem] max-lg1080:top-0">
          <Image alt="Ellips" width={100} height={100} src="/Ellipse.svg"
         />
        </div>
        {/* Grid container */}
        <motion.div
          className="grid grid-cols-3 mt-8 gap-8 z-10 max-md900:grid-cols-2
          max-md768:gap-6 max-sm640:grid-cols-1"
          layout
        >
          <AnimatePresence>
            {itemsToShow.map((item) => (
              <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                <Card
                  id={item.id}
                  title={item.title}
                  paragraph={item.paragraph}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        <div className="absolute z-5 -top-14 left-0">
          <Image alt="Shadow" width={400} height={400} src="/Shadow.svg" />
        </div>
        <div className="absolute z-5 right-0 bottom-0">
          <Image alt="Shadow" width={605} height={636} src="/Shadow.svg" />
        </div>

        {portfolioAppsData.length > 6 && (
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="flex relative justify-center items-center max-w-fit h-[70px]
            bg-red my-8 text-white text-2xl font-medium rounded-xl
            outline-[1px] outline-offset-[5px] outline-solid outline-red px-16 pb-1
            cursor-pointer z-20 hover:bg-red-500 max-lg1280:h-[50px] max-lg1280:px-11
            max-sm640:text-xl"
          >
            {showAll ? "скрыть" : "показать ещё"}
          </button>
        )}
      </div>
    </div>
    </>
  )
}
