
"use client"
import MaterialSymbolsArrowCircleUp from "@/app/icons/MaterialSymbolsArrowCircleUp";

export const Buttonup = () => {
    const ScrollToTop = ()  => {
        window.scrollTo({
            top: 0
        });
    }
  return (
    <div
    onClick={ScrollToTop}
    className="fixed self-end cursor-pointer bottom-[2rem] right-8 z-[90]
    text-5xl text-blue/50 max-sm640:bottom-[3rem] max-sm640:right-4 max-sm480:bottom-[5rem]"
    >
      <MaterialSymbolsArrowCircleUp />
    </div>
  );
}