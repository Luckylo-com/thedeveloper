import { Header } from "@/app/components/Header";
import { MainScreen } from "@/app/components/MainScreen";
import { Services } from "@/app/components/Services";
import { Portfolio } from "@/app/components/Portfolio";
import { Text } from "@/app/components/Text";
import { PortfolioApps } from "@/app/components/PortfolioApps";
import { PortfolioBots } from "@/app/components/PortfolioBots";
import { About } from "@/app/components/About";
import { Contacts } from "@/app/components/Contacts";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <>
    <div className="flex flex-col w-full max-w-[1920px] overflow-hidden
      font-[family-name:var(--font-manrope-mono)] justify-center mx-auto">
        <Header />
        <main>
          <MainScreen />
          <Services />
          <Portfolio />
          <Text />
          <PortfolioApps />
          <PortfolioBots />
          <About />
          <Contacts />
        </main>
        <Footer />
      </div>
    </>
  );
}

