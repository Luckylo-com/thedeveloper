
"use client"
import Image from "next/image";
import Link from "next/link";
import FormkitWhatsapp from "@/app/icons/FormkitWhatsapp";
import JamTelegram from "@/app/icons/JamTelegram";

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
  return (
    <>
    <div className="flex w-full max-w-[1600px] overflow-hidden h-[110px]
      font-[family-name:var(--font-manrope-mono)] justify-between mx-auto">
        <div className="flex w-[30%] items-center gap-4">
          <div>
            <Image
            alt="logo"
            width={43}
            height={47}
            src={"/developer-logo.svg"}
             />
          </div>
          <div className="font-[family-name:var(--font-montserrat-sans)] text-4xl font-extrabold
          text-gray3">The developer</div>
        </div>
        <div className="flex w-[50%] items-center justify-between">
          <nav className="flex justify-between items-center mx-auto">
        <ul className="flex gap-8">
          {menuItems.map((item) => (
            <li key={item.anchor}>
              <Link
                href={`#${item.anchor}`}
                onClick={e => handleSmoothScroll(e, item.anchor)}
                className="hover:text-accent transition-colors duration-200 text-2xl
                font-medium cursor-pointer text-gray2 tracking-wider"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
        </div>
        <div className="flex w-[20%] items-center gap-8">
          <div className="flex justify-center items-center text-gray2 text-[39px]">
            <FormkitWhatsapp />
          </div>
          <div className="flex justify-center items-center text-gray2 text-4xl">
            <JamTelegram />
          </div>
        </div>
      </div>
    </>
  )
}
