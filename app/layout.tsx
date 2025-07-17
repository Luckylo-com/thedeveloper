import type { Metadata } from "next";
import { Montserrat, Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import { ModalSendEmail } from "@/app/components/modals/ModalSendEmail";

const montserratFont = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

const manropeFont = Manrope({
  variable: "--font-manrope-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The developer",
  description: "Mobile app and website development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${montserratFont.variable} ${manropeFont.variable} antialiased`}
      >
        <Toaster position='bottom-right' toastOptions={{duration: 3000}} />
        <ModalSendEmail />
        {children}
      </body>
    </html>
  );
}
