
import Fa6BrandsSquareXTwitter from "@/app/icons/Fa6BrandsSquareXTwitter"
import MynauiBrandYoutubeSolid from "@/app/icons/MynauiBrandYoutubeSolid"
import F7LogoInstagram from "@/app/icons/F7LogoInstagram"
import MageTiktokCircle from "@/app/icons/MageTiktokCircle"
import LineiconsFacebookOval from "@/app/icons/LineiconsFacebookOval"

export function Footer() {

  const today = new Date()
  const year = today.getFullYear()
  return (
    <>
      <div className="flex  flex-col py-4 tracking-wider
    font-[family-name:var(--font-manrope-mono)] border-t-[1px] border-t-gray5
    h-[100px]">
        <div className="relative w-full  max-w-[1600px] mx-auto">
          <div className="flex justify-center items-center text-4xl gap-6 text-gray5 py-4">
            <Fa6BrandsSquareXTwitter />
            <MynauiBrandYoutubeSolid />
            <F7LogoInstagram />
            <MageTiktokCircle />
            <LineiconsFacebookOval />
          </div>
          <span className="absolute text-gray5 font-medium text-2xl top-[35%] right-0">
            &copy; The developer - {year}</span>
        </div>
      </div>
    </>
  )
}
